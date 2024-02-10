import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';

const PhotoDetailsModal = () => {
  const { state, onClosePhotoDetailsModal } = useApplicationData();
  const { id, user, urls, location, similar_photos } = state.photoSelected;
  const { darkMode } = state;
  // Photos array here differs from the photos array in HomeRoute.jsx
  const photos = Object.values(similar_photos);

  return (
    <div id="modal-div" className={darkMode ? "dark-photo-details-modal" : "photo-details-modal"}>
      <div>
        <button className={darkMode ? "dark-photo-details-modal__close-button" : "photo-details-modal__close-button"}onClick={onClosePhotoDetailsModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      
      <div className="photo-details-modal__images">
        <PhotoFavButton id={id}/>
        <img src={urls.full} className={darkMode ? "dark-photo-details-modal__image" : "photo-details-modal__image"} alt={`Large size photo by ${user.username}`}></img>
        <div className="photo-details-modal__photographer-info photo-details-modal__photographer-details">
          <img src={user.profile} className="photo-details-modal__photographer-profile" alt="User's profile picture"></img>
            <div>
              {user.username}
              <br />
              <span className={darkMode ? "dark-photo-details-modal__photographer-location" : "photo-details-modal__photographer-location"}>{location.city}, {location.country}</span>
            </div>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <div className={darkMode ? "dark-photo-details-modal__header" : "photo-details-modal__header"}>Similar Photos</div>
        <div className="photo-details-modal__image">
        <PhotoList photos={photos}/>
        </div>
      </div>
      

    </div>
  )
};

export default PhotoDetailsModal;
