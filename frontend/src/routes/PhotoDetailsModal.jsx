import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';

const PhotoDetailsModal = () => {
  const { state, onClosePhotoDetailsModal } = useApplicationData();
  const { id, user, urls, location, similar_photos } = state.photoSelected;
  // Photos array here differs from the photos array in HomeRoute.jsx
  const photos = Object.values(similar_photos);

  return (
    <div id="modal-div" className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__images">
        <PhotoFavButton id={id}/>
        <img src={urls.full} className="photo-details-modal__image" alt={`Large size photo by ${user.username}`}></img>
        <div className="photo-details-modal__photographer-info photo-details-modal__photographer-details">
          <img src={user.profile} className="photo-details-modal__photographer-profile" alt="User's profile picture"></img>
            <div>
              {user.username}
              <br />
              <span className="photo-details-modal__photographer-location">{location.city}, {location.country}</span>
            </div>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__image">
        <PhotoList photos={photos}/>
        </div>
      </div>
      

    </div>
  )
};

export default PhotoDetailsModal;
