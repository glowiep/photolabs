import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  setDisplayModal, 
  photoSelected, 
  favorites,
  updateFavorites,
  setPhotoSelected
}) => {
  const {id, user, urls, location, similar_photos} = photoSelected
  const photos = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => {setDisplayModal(false)}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__images">
        <PhotoFavButton favorites={favorites} updateFavorites={updateFavorites} id={id}/>
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
        <PhotoList 
          photos={photos}
          favorites={favorites}
          updateFavorites={updateFavorites}
          setDisplayModal={setDisplayModal}
          setPhotoSelected={setPhotoSelected}
          />
      </div>
      

    </div>
  )
};

export default PhotoDetailsModal;
