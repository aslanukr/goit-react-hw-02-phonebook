import { BiTrash, BiPhoneCall } from 'react-icons/bi';
import { ContactItem, DeleteBtn, PhoneWrapper } from 'components/Styles.styled';
import PropTypes from 'prop-types';

export const ListItem = ({ filteredContacts, deleteItem }) => {
  return (
    <>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}
            <PhoneWrapper>
              <BiPhoneCall color="rgba(66, 137, 254, 255)" />
              {number}
            </PhoneWrapper>
            <div>
              <DeleteBtn
                type="button"
                name="delete"
                value={id}
                onClick={() => deleteItem(id)}
              >
                <BiTrash size="25px" />
              </DeleteBtn>
            </div>
          </ContactItem>
        ))
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};

ListItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
