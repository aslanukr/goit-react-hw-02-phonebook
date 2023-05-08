import { FilterInput } from 'components/Styles.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search contacts by name"
      value={filter}
      onChange={onChange}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
