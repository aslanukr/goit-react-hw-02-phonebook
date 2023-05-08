import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { List } from 'components/Styles.styled';

export const ContactList = ({ contactsArray, deleteContact }) => {
  return (
    <>
      <List>
        <ListItem filteredContacts={contactsArray} deleteItem={deleteContact} />
      </List>
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
