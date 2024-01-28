import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const {favorites, setFavorites, id} = props;
  const [selected, setSelected] = useState(false);
  
  const handleClick = () => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        setSelected(false)
        // Remove the element if it exists
        return prevFavorites.filter(fav => fav !== id);
      } else {
        setSelected(true);
        // Add the element if it doesn't exist
        return [...prevFavorites, id]
      }
      })
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick} >
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;