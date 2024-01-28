import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics}) => {
  const [favorites, setFavorites] = useState([])

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length}/>
      <PhotoList photos={photos} favorites={favorites} setFavorites={setFavorites}/>
    </div>
  );
};

export default HomeRoute;
