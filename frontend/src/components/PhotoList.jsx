import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  favorites,
  updateFavorites, 
  setDisplayModal, 
  setPhotoSelected,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          favorites={favorites}
          updateFavorites={updateFavorites}
          setDisplayModal={setDisplayModal}
          setPhotoSelected={setPhotoSelected}
        />
       ))}
    </ul>
  );
};

export default PhotoList;
