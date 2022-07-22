import props from 'prop-types';
import './styles.css';

export const Button = (props) => {
  const { text, onClick, disabled } = props;
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: props.string.isRequired,
  onClick: props.func.isRequired,
  disabled: props.bool,
};
