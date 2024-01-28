import React from "react";

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const {setFavorites, id, setSelected, selected} = props;
  
  const handleFavoritesList = () => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        // Remove the element if it exists
        return prevFavorites.filter(fav => fav !== id);
      } else {
        // Add the element if it doesn't exist
        return [...prevFavorites, id]
      }
      })
  };

  const handleFavoritesIcon =() => {
    setSelected(prevSelected => prevSelected === true ? false : true)
  }

  const handleClick = () => {
    handleFavoritesList();
    handleFavoritesIcon();
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick} >
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;