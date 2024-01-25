import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, imageSource, location, username, profile} = props.photo;
  return (
    <div className="PhotoListItem" key={id}>
      <img src={imageSource}></img>
      <img src={profile}></img>
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
