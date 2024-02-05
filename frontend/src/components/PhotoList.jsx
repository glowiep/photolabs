import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import useApplicationData from "hooks/useApplicationData";
import emptyImage from '../assets/empty.png';

const PhotoList = ({ photos }) => {
  const { state } = useApplicationData();

  return (
    <ul className='photo-list'>
      {state.displayFavorites && photos.length === 0 && <img src={emptyImage} alt="No photos available"></img> }
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo}
        />
       ))}
    </ul>
  );
};

export default PhotoList;
