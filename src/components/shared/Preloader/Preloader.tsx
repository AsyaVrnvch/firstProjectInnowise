import React from 'react'
import * as Styles from './Preloader.Styles'

const Preloader: React.FC = () => {
  return (
    <Styles.PreloaderContainer>
      <Styles.Spinner/>
    </Styles.PreloaderContainer>
  )
}

export default Preloader
