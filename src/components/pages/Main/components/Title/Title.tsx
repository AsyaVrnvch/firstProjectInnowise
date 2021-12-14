import React from 'react'
import * as Styles from './Title.Styles'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTitle } from '../../../../../redux/selectors/profile'
import { changingTitle } from '../../../../../redux/actions/profile'

interface TitleProps {}

const Title: React.FC<TitleProps> = () => {
  const dispatch = useDispatch()
 
  const [title, setTitle] = useState<string>('')
  const [change, setChange] = useState<boolean>(false)
  const [input, setInput] = useState<boolean>(false)

  const titleText = useSelector(selectTitle)

  const handleClick = (value: boolean) => () => {
    if (!value) {
      if (change) dispatch(changingTitle(title))
    } else {
      setTitle(titleText)
    }
    setInput(value)
    setChange(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle((event.target as HTMLInputElement).value)
    setChange(true)
  }

  return (
    <div>
      {input ? (
        <div>
          <Styles.TitleInput onChange={handleChange} value={title}/>
          <Styles.CheckIcon onClick={handleClick(false)} />
        </div>
      ) : ( 
        <div>
          <Styles.Span className="title">{titleText || 'Welcome'}</Styles.Span>
          <Styles.AddIcon onClick={handleClick(true)} />
        </div>
      )}
    </div>
  )
}

export default Title
