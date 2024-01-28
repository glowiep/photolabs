import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {photos, favorites, setFavorites} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favorites={favorites} setFavorites={setFavorites}/>
       ))}
    </ul>
  );
};

export default PhotoList;
