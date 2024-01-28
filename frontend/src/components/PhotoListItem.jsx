import React, { useCallback, useState } from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  photo, 
  favorites, 
  updateFavorites, 
  setDisplayModal, 
  setPhotoSelected
}) => {
  const {urls, location, user} = photo;
  const id = photo.id;

  const handlePhotoClick = () => {
    setPhotoSelected(photo)
    setDisplayModal(prevDisplayModal => !prevDisplayModal);
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton favorites={favorites} updateFavorites={updateFavorites} id={id}/>
      <img src={urls.regular} className="photo-list__image" onClick={handlePhotoClick} alt={`Regular size photo by ${user.username}`}></img>
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
