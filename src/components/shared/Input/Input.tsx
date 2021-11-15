import React from "react";
import * as Styles from "./Input.Styles";

interface InputProps {
  type: string;
  name?: string;
  value?: string;
  onChange?: (event) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <Styles.InputConteiner {...props} />;
};

export default Input;
