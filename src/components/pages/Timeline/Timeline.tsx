import React from 'react'
import ImageGrid from '../../shared/ImageGrid/ImageGrid'
import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllImages } from '../../../redux/selectors/images'
import { loadingImages } from '../../../redux/actions/timeline'
import { Image } from '../../../redux/reducers/images'
import SearchBar from './components/SearchBar/SearchBar'

const TimeLine: React.FC = () => {
  const dispatch = useDispatch()
  const allImages = useSelector(selectAllImages)

  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    dispatch(loadingImages())
  }, [])

  useEffect(() => {
    setImages(allImages)
  }, [allImages])

  const handleChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const query = (event.target as HTMLInputElement).value
    const filterImages = allImages.filter((image) => {
      if (image.username.includes(query)) return image
    })
    setImages(filterImages)
  },[])

  return (
    <div>
      <SearchBar onChange={handleChange} />
      <ImageGrid allImages={images} username={true} />
    </div>
  )
}

export default TimeLine
