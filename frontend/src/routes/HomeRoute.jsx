import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({
  photos, 
  topics, 
  setDisplayModal, 
  setPhotoSelected, 
  favorites, 
  setFavorites,
  favSelected, 
  setFavSelected
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length}/>
      <PhotoList 
        photos={photos}
        setFavorites={setFavorites}
        setDisplayModal={setDisplayModal}
        setPhotoSelected={setPhotoSelected}
        favSelected={favSelected}
        setFavSelected={setFavSelected}
      />
    </div>
  );
};

export default HomeRoute;
