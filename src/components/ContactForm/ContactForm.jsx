import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from "react-redux";
import { addContacts, getContacts } from '../../redux/contactsSlice';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    let nameId = nanoid();
    let numberId = nanoid();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
            ?
            Notiflix.Notify.failure(`${name} is already in contacts`)
            :
            dispatch(addContacts({
                name,
                number,
                id: nanoid(10),
            }
            ));
      
        const findName = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
        if (!findName) form.reset();
    };

    return (<div className={css.container}>
        <form onSubmit={handleSubmit}>
            <label htmlFor={nameId}>Name</label>
            <input
                type="text"
                id={nameId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required

            />
            <label htmlFor={numberId}>Number</label>
            <input
                type="tel"
                id={numberId}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required

            />
            <button type="submit" className={css.btn}>Add contact</button>
        </form>
    </div>
    )
}
