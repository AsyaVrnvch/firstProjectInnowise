import * as Styles from "./ImageModal.Styles";

interface ImageModalProps {
  selectedImage: string,
  setSelectedImage: (value:string) => void
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, setSelectedImage,...props }) => {
  
  const handleClick = (event) => {
    if(event.target.classList.contains('backdrop')){
      setSelectedImage('');
    }
  }
  
  return (
    <Styles.ImageModalContainer className='backdrop' onClick={handleClick}>
        <img src={selectedImage} alt="Loading..."/>
    </Styles.ImageModalContainer>
  );
};

export default ImageModal;