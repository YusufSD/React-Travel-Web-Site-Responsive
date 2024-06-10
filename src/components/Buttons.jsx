import React from "react";
import "../styles/Buttons.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SİZES = ["btn--medium", "btn--large"];

export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SİZES.includes(buttonSize) ? buttonSize : SİZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};
