import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, imageSource, location, username, profile} = props.photo;
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} className="photo-list__image"></img>
      <div className="photo-list__user-details">
      <img src={profile} className="photo-list__user-profile"></img>
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
