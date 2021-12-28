import React from 'react'
import * as Styles from './Input.Styles'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
}

const Input: React.FC<InputProps> = (props) => {
  return <Styles.InputConteiner {...props} />
}

export default Input
