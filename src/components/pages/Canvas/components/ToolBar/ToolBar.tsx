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
import { changeToolAction, saveRequest } from '../../../../../redux/actions/canvas'

interface ToolBarProps {}

const ToolBar: React.FC<ToolBarProps> = (props) => {
  const dispatch = useDispatch()

  const handleClick = (tool: string) => () => {
    dispatch(changeToolAction({ tool }))
  }

  const saveImage = () => {
    dispatch(saveRequest())
  }

  return (
    <Styles.ToolBarContainer {...props}>
      <BarButton onClick={handleClick('brush')}>
        <Brush />
      </BarButton>
      <BarButton onClick={handleClick('pen')}>
        <Pen />
      </BarButton>
      <BarButton onClick={handleClick('eraser')}>
        <Eraser />
      </BarButton>
      <BarButton onClick={handleClick('line')}>
        <Line />
      </BarButton>
      <BarButton onClick={handleClick('circle')}>
        <Circle />
      </BarButton>
      <BarButton onClick={handleClick('rectangle')}>
        <Rectangle />
      </BarButton>
      <BarButton className="right" onClick={handleClick('clear')}>
        <Clear />
      </BarButton>
      <BarButton onClick={saveImage}>
        <Save />
      </BarButton>
    </Styles.ToolBarContainer>
  )
}

export default ToolBar
