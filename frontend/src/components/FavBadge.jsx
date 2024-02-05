import React from 'react';
import FavIcon from './FavIcon';
import { Tooltip } from '@mui/material';
import useApplicationData from 'hooks/useApplicationData';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const { getFavoritePhotos, updateFavoritePhotos } = useApplicationData();
  updateFavoritePhotos();
  return (
    <Tooltip title="Click to display Favorites!">
    <div className='fav-badge' onClick={() => {getFavoritePhotos()}}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
    </Tooltip>
  ) 
};

export default FavBadge;