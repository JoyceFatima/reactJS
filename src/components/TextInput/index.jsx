import "./styles.css";

export const TextInput = ({ searchValue, handleChange, placeholder }) => {
  return (
    <input
      className="text-input"
      placeholder={placeholder}
      onChange={handleChange}
      value={searchValue}
      type="search"
    />
  );
};
