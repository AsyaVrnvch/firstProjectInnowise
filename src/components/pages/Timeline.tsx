import React from "react";
import ImageGrid from "../shared/ImageGrid/ImageGrid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllImages } from "../../redux/selectors/images";
import { loadingImages } from "../../redux/actions/timeline"

function TimeLine() {
  const dispatch = useDispatch();
  const allImages = useSelector(selectAllImages);

  useEffect(()=>{
    dispatch(loadingImages());
  },[]);

  return (
      <div>
        <div>
          <input type="text"/>
        </div>
        <ImageGrid allImages={allImages}/>
      </div>
  );
}

export default TimeLine;