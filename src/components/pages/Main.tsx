import React from "react";
import { useSelector } from "react-redux";
import { selectUsername } from "../../redux/selectors/auth";
import PhotoForm from "../shared/PhotoForm/PhotoForm";
import ImageGrid from "../shared/ImageGrid/ImageGrid";

const Main: React.FC = () => {
  const username = useSelector(selectUsername);
  return (
    <div>
      <h3>MainPage</h3>
      <p>{username}</p>
      <h4>Your avatar</h4>
      <PhotoForm/>
      <ImageGrid/>
    </div>
  );
}

export default Main;
