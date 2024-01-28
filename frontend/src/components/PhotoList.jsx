import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, setFavorites, displayModal, setDisplayModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          setFavorites={setFavorites}
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
        />
       ))}
    </ul>
  );
};

export default PhotoList;
