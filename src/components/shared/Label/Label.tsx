import React from 'react'
import * as Styles from './Label.Styles'

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = React.memo((props) => {
  return <Styles.LabelContainer {...props} />
})

export default Label
