import React from 'react'
import * as Styles from './SettingBar.Styles'
import Label from '../../../../shared/Label/Label'
import { changeWidth, changeColor } from '../../../../../redux/actions/canvas'
import { useDispatch } from 'react-redux'

interface SettingBarProps {}

const SettingBar: React.FC<SettingBarProps> = (props) => {
  const dispatch = useDispatch()

  const handleClickColour = (event: React.MouseEvent) => {
    dispatch(changeColor((event.target as HTMLInputElement).value ))
  }

  const handleClickWidth = (event: React.MouseEvent) => {
    dispatch(changeWidth((event.target as HTMLInputElement).value ))
  }

  return (
    <Styles.SettingBarContainer {...props}>
      <Label>Width</Label>
      <Styles.BarInputContainer
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        onChange={handleClickWidth}
      />
      <Label>Colour</Label>
      <Styles.BarInputContainer type="color" onChange={handleClickColour} />
    </Styles.SettingBarContainer>
  )
}

export default SettingBar
