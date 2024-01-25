import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="PhotoListItem" key={props.key}>
      <img src={props.imageSource}></img>
      <img src={props.profile}></img>
      <p>{props.username}</p>
      <p>{props.city}, {props.country}</p>
    </div>
  )
};

export default PhotoListItem;
