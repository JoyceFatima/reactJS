import "./styles.css";

export const Button = () => {
  const { text, onClick, disabled } = this.props;
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
