import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

export const ContactList = ({ contactsArray, deleteContact }) => {
  return (
    <>
      <ul>
        <ListItem filteredContacts={contactsArray} deleteItem={deleteContact} />
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
