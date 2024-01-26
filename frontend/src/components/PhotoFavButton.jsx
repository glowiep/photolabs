import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [favorite, setFavorite] = useState(false)
  
  const handleClick = () => {
    return setFavorite(prevFavorite => !prevFavorite)
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