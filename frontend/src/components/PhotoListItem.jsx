import React, { useCallback, useState } from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  photo, 
  favorites, 
  updateToFavPhotoIds, 
  onPhotoSelect
}) => {
  const {urls, location, user} = photo;
  const id = photo.id;

  return (
    <div className="photo-list__item">
      <PhotoFavButton favorites={favorites} updateToFavPhotoIds={updateToFavPhotoIds} id={id}/>
      <img src={urls.regular} className="photo-list__image" onClick={() => {onPhotoSelect(photo)}} alt={`Regular size photo by ${user.username}`}></img>
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
