import React from "react";

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import useApplicationData from "hooks/useApplicationData";

function PhotoFavButton({ id }) {
  const { state, updateToFavPhotoIds } = useApplicationData();
  const favorites = state.favorites;
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => {updateToFavPhotoIds(id)}} >
        <FavIcon selected={favorites.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;