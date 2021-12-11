import React from "react";
import * as Styles from "./Preloader.Styles";

const Preloader: React.FC = () => {
  return (
    <Styles.PreloaderContainer>
        <span className="spinner"></span>
    </Styles.PreloaderContainer>
  )
};

export default Preloader;
