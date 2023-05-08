import PropTypes from 'prop-types';
import { BiTrash, BiPhoneCall } from 'react-icons/bi';
import Notiflix from 'notiflix';
import {
  ContactItem,
  DeleteBtn,
  Info,
  PhoneWrapper,
} from 'components/Styles.styled';

export const ListItem = ({ filteredContacts, deleteItem }) => {
  return (
    <>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}
            <PhoneWrapper href={`tel:${number}`}>
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
                <BiTrash size="20px" />
              </DeleteBtn>
            </div>
          </ContactItem>
        ))
      ) : (
        <>
          {Notiflix.Notify.info('No contacts found')}
          <Info>No contacts</Info>
        </>
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
