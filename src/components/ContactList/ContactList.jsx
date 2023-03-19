import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(
        contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ul>
            {visibleContacts.length > 0 && visibleContacts.map(({ id, name, phone }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                />
            ))}
        </ul>
    )
};
