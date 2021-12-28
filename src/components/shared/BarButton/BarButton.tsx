import React from 'react'
import * as Styles from './BarButton.Styles'

interface BarButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  right?:boolean
}

const BarButton: React.FC<BarButtonProps> = (props) => {
  return <Styles.BarButtonContainer {...props} />
}

export default BarButton
