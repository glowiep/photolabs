import React from "react";

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const {favorites, setFavorites, id, setFavSelected, favSelected} = props;

  const handleClick = () => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        // Remove the element if it exists
        return prevFavorites.filter(fav => fav !== id);
      } else {
        // Add the element if it doesn't exist
        return [...prevFavorites, id]
      }
    })

    setFavSelected(prevFavSelected => !prevFavSelected)
    console.log(favSelected)
  } 

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick} >
        <FavIcon favSelected={favSelected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;