import React from "react";
import * as Styles from "./Error.styles";

interface ErrorProps{

}

const Error: React.FC = (props: ErrorProps) => {
  return <Styles.ErrorContainer {...props} />;
};

export default Error;
