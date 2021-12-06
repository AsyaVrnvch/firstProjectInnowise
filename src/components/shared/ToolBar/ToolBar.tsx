import React from "react";
import * as Styles from "./ToolBar.Styles";
import BarButton from "../BarButton/BarButton";
import Brush from "@material-ui/icons/BrushOutlined";
import Save from "@material-ui/icons/SaveOutlined";
import Rectangle from "@material-ui/icons/Crop32Outlined";
import Circle from "@material-ui/icons/RadioButtonUncheckedOutlined";
import Eraser from "@material-ui/icons/LocationSearchingOutlined";
import { Redo, Undo, Remove as Line } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { changeToolAction, saveRequest } from "../../../redux/actions/canvas";

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
      {/* <BarButton className="right" onClick={()=>dispatch(canvasUndo())}><Undo/></BarButton>
      <BarButton onClick={()=>dispatch(canvasRedo())}><Redo/></BarButton> */}
      <BarButton className="right" onClick={()=> dispatch(saveRequest())}
      ><Save/></BarButton>
    </Styles.ToolBarContainer>
  );
};

export default ToolBar;