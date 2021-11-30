import React from "react";
import * as Styles from "./SettingBar.Styles";
import Label from "../Label/Label";

interface SettingBarProps{

}

const SettingBar: React.FC<SettingBarProps> = (props) => {
  return (
    <Styles.SettingBarContainer {...props}>
      <Label>Width</Label>
      <Styles.BarInputContainer type='number'/>
      <Label>Colour</Label>
      <Styles.BarInputContainer type='color'/>
    </Styles.SettingBarContainer>
  ); 
};

export default SettingBar;