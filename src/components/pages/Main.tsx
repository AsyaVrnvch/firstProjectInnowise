import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsername } from "../../redux/selectors/auth";
import PhotoForm from "../shared/PhotoForm/PhotoForm";
import ImageGrid from "../shared/ImageGrid/ImageGrid";
import { loadingImages } from "../../redux/actions/images"
import { selectMyImages } from "../../redux/selectors/images";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  useEffect(()=>{
    dispatch(loadingImages());
  },[]);

  const myImages = useSelector(selectMyImages);

  return (
    <div>
      <h3>MainPage</h3>
      <p>{username}</p>
      <h4>Your avatar</h4>
      <PhotoForm/>
      <ImageGrid allImages={myImages}/>
    </div>
  );
}

export default Main;
