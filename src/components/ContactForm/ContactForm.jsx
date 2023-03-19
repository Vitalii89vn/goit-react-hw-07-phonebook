import { nanoid } from 'nanoid'
import css from "./ContactForm.module.css"
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from 'redux/contactsSlice';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    let nameId = nanoid();
    let numberId = nanoid();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        contacts.find(item => item.name.toLowerCase() === name.toLowerCase())
            ?
            Notiflix.Notify.failure(`${name} is already in contacts`)
            :
            dispatch(addContact({
                name,
                phone,
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
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required

            />
            <button type="submit" className={css.btn}>Add contact</button>
        </form>
    </div>
    )
}
