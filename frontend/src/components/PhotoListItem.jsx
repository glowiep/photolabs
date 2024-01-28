import React, { useCallback, useState } from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({photo, favorites, setFavorites, setDisplayModal}) => {
  const {urls, location, user} = photo;
  const id = photo.id;

  const [favSelected, setFavSelected] = useState(false);

  const handlePhotoClick = () => {
    return setDisplayModal(prevDisplayModal => !prevDisplayModal);
  }

  return (
    <div className="photo-list__item" onClick={handlePhotoClick}>
      <PhotoFavButton setFavorites={setFavorites} id={id} setFavSelected={setFavSelected} favSelected={favSelected}/>
      <img src={urls.regular} className="photo-list__image"></img>
      <div className="photo-list__user-info photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"></img>
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
