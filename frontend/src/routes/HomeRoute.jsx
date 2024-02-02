import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({
  photos, 
  topics,
  favorites,
  getPhotosByTopics,
  onPhotoSelect, 
  updateToFavPhotoIds
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length} getPhotosByTopics={getPhotosByTopics}/>
      <PhotoList 
        photos={photos}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
