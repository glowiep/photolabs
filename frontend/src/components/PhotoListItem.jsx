import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, imageSource, location, username, profile} = props.photo;
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} className="photo-list__image"></img>
      <div className="photo-list__user-info photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"></img>
        <div>
          {username} 
          <br>
          </br>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
