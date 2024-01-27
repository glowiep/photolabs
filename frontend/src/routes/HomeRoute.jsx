import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics}) => {
  const [favPhotoCount, setFavPhotoCount] = useState(0)

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favPhotoCount}/>
      <PhotoList photos={photos} favPhotoCount={favPhotoCount} setFavPhotoCount={setFavPhotoCount}/>
    </div>
  );
};

export default HomeRoute;
