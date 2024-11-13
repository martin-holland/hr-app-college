import "./Button.css";

const Button = ({ onClick, text, role }) => {
  return (
    <button className={role} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
