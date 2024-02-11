import React from 'react';

import useApplicationData from 'hooks/useApplicationData';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

// Photos need to be defined here, as PhotoDetailsModal will use similarPhotos array
const HomeRoute = () => {
  const { state } = useApplicationData();
  const { darkMode } = state;
  const photos = state.photoData;

  return (
    <div className={darkMode ? "dark-home-route" : "home-route"}>
      <TopNavigation />
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
