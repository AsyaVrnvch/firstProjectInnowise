import React from "react";
import * as Styles from "./Form.Styles";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {

}

const Form: React.FC<FormProps> = ( props ) => {
  return <Styles.FormContainer {...props} />;
};

export default Form;
