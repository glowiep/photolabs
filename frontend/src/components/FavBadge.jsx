import React from 'react';
import FavIcon from './FavIcon';
import { Tooltip } from '@mui/material';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <Tooltip title="Click to display Favorites!">
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
    </Tooltip>
  ) 
};

export default FavBadge;