import React from "react";
import * as Styles from "./ToolBar.Styles";
import BarButton from "../BarButton/BarButton";
import Brush from "@material-ui/icons/BrushOutlined";
import Save from "@material-ui/icons/SaveOutlined";
import Colorize from "@material-ui/icons/ColorizeOutlined";
import Rectangle from "@material-ui/icons/Crop32Outlined";
import ColorFill from "@material-ui/icons/FormatColorFillOutlined";
import Circle from "@material-ui/icons/RadioButtonUncheckedOutlined";
import Eraser from "@material-ui/icons/LocationSearchingOutlined";
import { Redo, Undo, Remove as Line } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { changeToolAction } from "../../../redux/actions/canvas";

interface ToolBarProps{

}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <Styles.ToolBarContainer {...props}>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'brush' }))}><Brush/></BarButton>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'eraser' }))}><Eraser/></BarButton>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'line' }))}><Line/></BarButton>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'circle' }))}><Circle/></BarButton>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'rectangle' }))}><Rectangle/></BarButton>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'colorize' }))}><Colorize/></BarButton>
      <BarButton onClick={()=>dispatch(changeToolAction({ tool: 'colorfill' }))}><ColorFill/></BarButton>
      <BarButton className="right"><Undo/></BarButton>
      <BarButton><Redo/></BarButton>
      <BarButton><Save/></BarButton>
    </Styles.ToolBarContainer>
  );
};

export default ToolBar;