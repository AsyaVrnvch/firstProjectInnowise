import React from "react";
import * as Styles from "./Button.styles";

interface ButtonProps {
  onClick?: () => void;
  onSubmit?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <Styles.ButtonContainer {...props} />;
};

export default Button;
