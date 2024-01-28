import React, { useCallback, useState } from 'react';

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {urls, location, user} = props.photo;
  const {favorites, setFavorites} = props;
  const id = props.photo.id;

  const [selected, setSelected] = useState(false);

  return (
    <div className="photo-list__item">
      <PhotoFavButton setFavorites={setFavorites} id={id} setSelected={setSelected} selected={selected}/>
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
