import React from 'react'
import * as Styles from './ImageGrid.Styles'
import UserImage from '../UserImage/UserImage'
import { Image } from '../../../redux/reducers/images'
import { useState } from 'react'
import ImageModal from '../../modals/ImageModal/ImageModal'
import { useEffect, useCallback, useMemo } from 'react'

interface ImageGridProps {
  allImages: Array<Image>
  username?: boolean
}

const ImageGrid: React.FC<ImageGridProps> = React.memo(({ allImages, username }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>()

  useEffect(() => { 
    console.log('render image grid')
  })

  const setImage = useCallback((image: Image) => () => {
    setSelectedImage(image)
  },[])

  return (
    <Styles.ImageGridContainer>
      {allImages &&
        allImages.map((image)=>(
          <div key={image.id}>
            <UserImage data={image} onClick={setImage(image)} />
            {username && <Styles.UsernameSpan>{image.username}</Styles.UsernameSpan>}
          </div>
        ))
      }
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </Styles.ImageGridContainer>
  )
})

export default ImageGrid
