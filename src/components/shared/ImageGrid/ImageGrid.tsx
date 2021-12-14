import React from 'react'
import * as Styles from './ImageGrid.Styles'
import UserImage from '../UserImage/UserImage'
import { Image } from '../../../redux/reducers/images'
import { useState } from 'react'
import ImageModal from '../../modals/ImageModal/ImageModal'

interface ImageGridProps {
  allImages: Array<Image>
  username?: boolean
}

const ImageGrid: React.FC<ImageGridProps> = ({ allImages, username, ...props }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>()
  return (
    <Styles.ImageGridContainer {...props}>
      {allImages &&
        allImages.map((image) => (
          <div key={image.id}>
            <UserImage data={image} onClick={() => setSelectedImage(image)} />
            {username && <Styles.UsernameSpan>{image.username}</Styles.UsernameSpan>}
          </div>
        ))}
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </Styles.ImageGridContainer>
  )
}

export default ImageGrid
