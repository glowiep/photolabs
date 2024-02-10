import React from 'react';
import { Skeleton, Tooltip } from '@mui/material';

import useApplicationData from 'hooks/useApplicationData';
import useInitialLoading from 'hooks/useInitialLoading';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  const { state, onPhotoSelect } = useApplicationData();
  const { darkMode } = state;
  
  useInitialLoading();

  if (state.loading) {
    // Render skeleton for entire item if photo is not available
    return (
      <div className="photo-list__item">
        <Skeleton variant="rectangular" width={300} height={250}/>
      </div>
    );
  } else {
    const {urls, location, user} = photo;
    const id = photo.id;
    const { displayModal } = state;
  
    return (
      <div className={darkMode ? "dark-photo-list__item" : "photo-list__item"}>
          <PhotoFavButton id={id}/>
          <Tooltip title="View Photo">
            <img src={urls.regular} className={displayModal ? "photo-list__modal_image" : "photo-list__image"} onClick={() => {onPhotoSelect(photo)}} alt={`Regular size photo by ${user.username}`}></img>
          </Tooltip>
          <div className="photo-list__user-info photo-list__user-details">
            <img src={user.profile} className="photo-list__user-profile" alt="User's profile picture"></img>
            <div>
              {user.username} 
              <br />
              <span className={darkMode ? "dark-photo-list__user-location" : "photo-list__user-location"}>{location.city}, {location.country}</span>
            </div>
          </div>
        </div>
    )
  }

  
};

export default PhotoListItem;
