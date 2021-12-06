import React from "react";
import * as Styles from "./SettingBar.Styles";
import Label from "../Label/Label";
import { changeWidth, changeColor } from "../../../redux/actions/canvas";
import { useDispatch } from "react-redux";

interface SettingBarProps{

}

const SettingBar: React.FC<SettingBarProps> = (props) => {
const dispatch = useDispatch();

  return (
    <Styles.SettingBarContainer {...props}>
      <Label>Width</Label>
      <Styles.BarInputContainer 
        type='number' 
        defaultValue={1} 
        min={1} 
        max={50}
        onChange={(e)=>dispatch(changeWidth(e.target.value))}
      />
      <Label>Colour</Label>
      <Styles.BarInputContainer type='color' onChange={(e)=>dispatch(changeColor(e.target.value))}/>
    </Styles.SettingBarContainer>
  ); 
};

export default SettingBar;