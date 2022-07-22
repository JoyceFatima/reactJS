import props from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange, placeholder }) => {
  return (
    <input className="text-input" placeholder={placeholder} onChange={handleChange} value={searchValue} type="search" />
  );
};

TextInput.propTypes = {
  searchValue: props.string.isRequired,
  handleChange: props.func.isRequired,
  placeholder: props.string.isRequired,
};
