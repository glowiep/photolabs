import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos, 
  setFavorites, 
  setDisplayModal, 
  setPhotoSelected, 
  favSelected, 
  setFavSelected
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          setFavorites={setFavorites}
          setDisplayModal={setDisplayModal}
          setPhotoSelected={setPhotoSelected}
          favSelected={favSelected}
          setFavSelected={setFavSelected}
        />
       ))}
    </ul>
  );
};

export default PhotoList;
