import PropTypes from "prop-types";
import "../styles/Button.css";

const Button = ({
  label,
  onClick,
  variant = "primary", // 'primary' | 'secondary'
  size = "default", // 'default' | 'small'
  disabled = false,
  type = "button", // button type: 'button', 'submit', etc.
}) => {
  const classes = [
    "button",
    variant,
    size === "small" ? "small" : "",
    disabled ? "disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["default", "small"]),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
