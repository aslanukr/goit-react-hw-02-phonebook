import PropTypes from 'prop-types';

export const ListItem = ({ filteredContacts, deleteItem }) => {
  return (
    <>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <div>
              <button
                type="button"
                name="delete"
                value={id}
                onClick={() => deleteItem(id)}
              >
                Delete
              </button>
            </div>
          </li>
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
