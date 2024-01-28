import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({
  setDisplayModal, 
  photoSelected, 
  setFavorites,
  favSelected,
  setFavSelected
}) => {
  console.log(photoSelected)
  const {id, user, urls, location} = photoSelected
  const handleCloseButton = () => {
    setDisplayModal(false);
  }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseButton}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className="photo-details-modal__images">
        <PhotoFavButton setFavorites={setFavorites} id={id} setFavSelected={setFavSelected} favSelected={favSelected}/>
        <img src={urls.full} className="photo-details-modal__image"></img>
        <div className="photo-list__user-info photo-list__user-details">
          <img src={user.profile} className="photo-list__user-profile"></img>
            <div>
              {user.username}
              <br />
              <span className="photo-list__user-location">{location.city}, {location.country}</span>
            </div>
        </div>
        
        <div className="photo-details-modal__header">Similar Photos</div>

        <div>
          
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
