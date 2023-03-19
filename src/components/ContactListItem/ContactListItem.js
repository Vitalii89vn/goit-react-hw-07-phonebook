import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from "react-redux";



export const ContactListItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <li>{name}: {phone}
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};