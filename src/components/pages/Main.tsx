import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsername } from "../../redux/selectors/auth";
// import PhotoForm from "../shared/PhotoForm/PhotoForm";
import ImageGrid from "../shared/ImageGrid/ImageGrid";
import { loadingImages } from "../../redux/actions/images"
import ImageModal from "../modals/ImageModal/ImageModal";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(()=>{
    dispatch(loadingImages());
  },[]);

  return (
    <div>
      <h3>MainPage</h3>
      <p>{username}</p>
      {/* <h4>Your avatar</h4> */}
      {/* <PhotoForm/> */}
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default Main;
