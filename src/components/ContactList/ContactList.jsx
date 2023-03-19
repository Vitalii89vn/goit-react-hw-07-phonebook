import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(
        contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ul>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    )
};
