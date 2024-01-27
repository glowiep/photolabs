import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, favPhotoCount, setFavPhotoCount} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favPhotoCount={favPhotoCount} setFavPhotoCount={setFavPhotoCount}/>
       ))}
    </ul>
  );
};

export default PhotoList;
