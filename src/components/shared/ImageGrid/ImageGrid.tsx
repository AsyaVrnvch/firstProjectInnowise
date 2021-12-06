import React from 'react';
import * as Styles from "./ImageGrid.Styles";
import { useSelector } from "react-redux";
import { selectAllImages } from "../../../redux/selectors/images";
import UserImage from "../UserImage/UserImage";

interface ImageGridProps{
    setSelectedImage
}

const ImageGrid: React.FC<ImageGridProps> = ({ setSelectedImage }) => {
    const allImages = useSelector(selectAllImages);
    
    return(
        <Styles.ImageGridContainer>
            {allImages && allImages.map(image => (
                <div key={image.id}>
                    <UserImage data={image} 
                        onClick={() => setSelectedImage(image.url) }
                    />
                </div>
            ))}
        </Styles.ImageGridContainer>
    )
}

export default ImageGrid;