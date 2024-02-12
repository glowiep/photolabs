import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import ThemeToggle from './ThemeToggle';
import useApplicationData from '../hooks/useApplicationData';
import SearchBar from './SearchBar';

const TopNavigation = () => {
  const { state } = useApplicationData();
  const { darkMode } = state;
  // const dataFiltered = filterData(searchInput, data);

  return (
    <div className={darkMode ? "dark-top-nav-bar" : "top-nav-bar"}>
      <span className={darkMode ? "dark-top-nav-bar__logo" : "top-nav-bar__logo"}>PhotoLabs</span>
        <TopicList />
        <SearchBar />
        <div className="top-nav-bar__right">
          <ThemeToggle />
          <FavBadge isFavPhotoExist={state.favorites.length} />      
        </div>
    </div>
  )
}

export default TopNavigation;