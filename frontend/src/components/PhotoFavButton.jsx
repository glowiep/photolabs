import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [favorite, setFavorite] = useState(0)
  
  const handleClick = () => {
    return setFavorite((prevFavorite) => (prevFavorite === 0 ? 1 : 0))  
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick} >
        {favorite === 0 ? <FavIcon /> : <FavIcon selected="true"/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;