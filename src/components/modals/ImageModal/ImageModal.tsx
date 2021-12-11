import * as Styles from "./ImageModal.Styles";
import { Image } from "../../../redux/reducers/images"; 

interface ImageModalProps {
  selectedImage: Image,
  setSelectedImage: (value: Image|null) => void,
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, setSelectedImage }) => {
  
  const handleClick = (event: React.MouseEvent) => {
    if((event.target as HTMLElement).classList.contains('backdrop')){
      setSelectedImage(null);
    }
  }
  
  return (
    <Styles.ImageModalContainer className='backdrop' onClick={handleClick}>
        <div>
          <img src={selectedImage.url} alt="Loading..."/>
          <span>{selectedImage.username}</span>
          <span>Published {selectedImage.createdAt.toLocaleString()}</span>
        </div>
    </Styles.ImageModalContainer>
  );
};

export default ImageModal;