import React, { useCallback, useState } from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  photo, 
  favorites, 
  setFavorites, 
  setDisplayModal, 
  setPhotoSelected, 
  favSelected, 
  setFavSelected
}) => {
  const {urls, location, user} = photo;
  const id = photo.id;

  const handlePhotoClick = () => {
    setPhotoSelected(photo)
    setDisplayModal(prevDisplayModal => !prevDisplayModal);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton setFavorites={setFavorites} id={id} setFavSelected={setFavSelected} favSelected={favSelected}/>
      <img src={urls.regular} className="photo-list__image" onClick={handlePhotoClick} alt="Regular size photo by user"></img>
      <div className="photo-list__user-info photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" alt="User's profile picture"></img>
        <div>
          {user.username} 
          <br>
          </br>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
