import React from "react";
import Canvas from "../shared/Canvas/Canvas";
import ToolBar from "../shared/ToolBar/ToolBar";
import SettingBar from "../shared/SettingBar/SettingBar";
import * as Styles from "../shared/CanvasForm/CanvasForm.Styles";

const CanvasPage: React.FC = () => {

  return (
    <Styles.CanvasFormContainer>
      <ToolBar/>
      <SettingBar/>
      <Canvas/>
    </Styles.CanvasFormContainer>
  );
}

export default CanvasPage;
