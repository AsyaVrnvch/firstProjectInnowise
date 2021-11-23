import React from "react";
import * as Styles from "./Button.styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<ButtonProps> = ( props ) => {
  return <Styles.ButtonContainer {...props} />;
};

export default Button;
