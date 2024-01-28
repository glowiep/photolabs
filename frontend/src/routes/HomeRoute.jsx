import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics, setDisplayModal, setPhotoSelected}) => {
  const [favorites, setFavorites] = useState([])

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length}/>
      <PhotoList 
        photos={photos} 
        favorites={favorites} 
        setFavorites={setFavorites}
        setDisplayModal={setDisplayModal}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
