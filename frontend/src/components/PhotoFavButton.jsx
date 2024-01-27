import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const {favPhotoCount, setFavPhotoCount} = props;
  const [favorite, setFavorite] = useState(false)
  
  const handleClick = () => {
    setFavorite(prevFavorite => {
      const incrementValue = prevFavorite ? -1 : 1; // If it was already a favorite, decrement count
      setFavPhotoCount(prevFavCount => prevFavCount + incrementValue)
      return !prevFavorite;
    });
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick} >
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;