import React from 'react'
import Canvas from './components/Canvas/Canvas'
import ToolBar from './components/ToolBar/ToolBar'
import SettingBar from './components/SettingBar/SettingBar'
import * as Styles from './Canvas.Styles'

const CanvasPage: React.FC = () => {
  return (
    <Styles.CanvasPage>
      <ToolBar />
      <SettingBar />
      <Canvas />
    </Styles.CanvasPage>
  )
}

export default CanvasPage
