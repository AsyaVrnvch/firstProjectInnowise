import * as Styles from './ImageModal.Styles'
import { Image } from '../../../redux/reducers/images'
import { useEffect, useCallback } from 'react'

interface ImageModalProps {
  selectedImage: Image
  setSelectedImage: (value: Image | null) => void
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }

  return (
    <Styles.ImageModalContainer className="backdrop" onClick={handleClick}>
      <Styles.Div>
        <Styles.Img src={selectedImage.url} alt="Loading..." />
        <Styles.Span>{selectedImage.username}</Styles.Span>
        <Styles.Span>Published {selectedImage.createdAt.toLocaleString()}</Styles.Span>
      </Styles.Div>
    </Styles.ImageModalContainer>
  )
}

export default ImageModal
