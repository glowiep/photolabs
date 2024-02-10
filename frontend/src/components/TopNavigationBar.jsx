import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import ThemeToggle from './ThemeToggle';
import useApplicationData from '../hooks/useApplicationData';

const TopNavigation = () => {
  const { state } = useApplicationData();
  const { darkMode } = state;
  return (
    <div className={darkMode ? "dark-top-nav-bar" : "top-nav-bar"}>
      <span className={darkMode ? "dark-top-nav-bar__logo" : "top-nav-bar__logo"}>PhotoLabs</span>
        <TopicList />
        <div className="top-nav-bar__right">
          <ThemeToggle />
          <FavBadge isFavPhotoExist={state.favorites.length} />      
        </div>
    </div>
  )
}

export default TopNavigation;