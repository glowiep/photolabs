import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import useApplicationData from '../hooks/useApplicationData';

const TopNavigation = () => {
  const { state } = useApplicationData();
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList />
        <FavBadge isFavPhotoExist={state.favorites.length} />      
    </div>
  )
}

export default TopNavigation;