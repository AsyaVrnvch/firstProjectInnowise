import React from 'react'
import * as Styles from './ToolBar.Styles'
import BarButton from '../../../../shared/BarButton/BarButton'
import Brush from '@material-ui/icons/BrushOutlined'
import Save from '@material-ui/icons/SaveOutlined'
import Clear from '@material-ui/icons/Refresh'
import Rectangle from '@material-ui/icons/Crop32Outlined'
import Circle from '@material-ui/icons/RadioButtonUncheckedOutlined'
import Eraser from '@material-ui/icons/Adjust'
import Pen from '@material-ui/icons/Edit'
import { Remove as Line } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { Tools } from "../../../../../redux/reducers/canvas/consts"
import { changeToolAction, saveRequest } from '../../../../../redux/actions/canvas'

interface ToolBarProps {}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const dispatch = useDispatch()
  
  const handleClick = (tool: string) => () => {
    dispatch(changeToolAction({ tool }));
  }

  const saveImage = () => {
    dispatch(saveRequest())
  }

  return (
    <Styles.ToolBarContainer {...props}>
      <BarButton onClick={handleClick(Tools.Brush)}>
        <Brush />
      </BarButton>
      <BarButton onClick={handleClick(Tools.Pen)}>
        <Pen />
      </BarButton>
      <BarButton onClick={handleClick(Tools.Eraser)}>
        <Eraser />
      </BarButton>
      <BarButton onClick={handleClick(Tools.Line)}>
        <Line />
      </BarButton>
      <BarButton onClick={handleClick(Tools.Circle)}>
        <Circle />
      </BarButton>
      <BarButton onClick={handleClick(Tools.Rectangle)}>
        <Rectangle />
      </BarButton>
      <BarButton right onClick={handleClick(Tools.Clear)}>
        <Clear />
      </BarButton>
      <BarButton onClick={saveImage}>
        <Save />
      </BarButton>
    </Styles.ToolBarContainer>
  )
}

export default ToolBar
