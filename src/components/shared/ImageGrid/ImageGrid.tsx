import React from 'react';
import * as Styles from "./ImageGrid.Styles";
import UserImage from "../UserImage/UserImage";
import { Image } from "../../../redux/reducers/images"; 
import { useState } from "react";
import ImageModal from "../../modals/ImageModal/ImageModal";

interface ImageGridProps{
    allImages: Array<Image>
}

const ImageGrid: React.FC<ImageGridProps> = ({ allImages }) => {
    const [selectedImage, setSelectedImage] = useState<Image|null>();
    return(
        <Styles.ImageGridContainer>
            {allImages && allImages.map(image => (
                <div key={image.id}>
                    <UserImage data={image} 
                        onClick={() => setSelectedImage(image) }
                    />
                </div>
            ))}
            {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
        </Styles.ImageGridContainer>
    )
}

export default ImageGrid;