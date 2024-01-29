import React from "react";

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({favorites, updateToFavPhotoIds, id}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => {updateToFavPhotoIds(id)}} >
        <FavIcon selected={favorites.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;