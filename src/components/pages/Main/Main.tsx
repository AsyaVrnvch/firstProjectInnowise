import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUsername } from '../../../redux/selectors/profile'
import PhotoForm from './components/PhotoForm/PhotoForm'
import ImageGrid from '../../shared/ImageGrid/ImageGrid'
import { loadingImages } from '../../../redux/actions/images'
import { selectMyImages } from '../../../redux/selectors/images'
import Title from './components/Title/Title'

const Main: React.FC = () => {
  const dispatch = useDispatch()
  const username = useSelector(selectUsername)

  useEffect(() => {
    dispatch(loadingImages())
  }, [])

  const myImages = useSelector(selectMyImages)

  return (
    <div>
      <p>{username}</p>
      <PhotoForm />
      <Title />
      <ImageGrid allImages={myImages} />
    </div>
  )
}

export default Main
