import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  setDisplayModal, 
  photoSelected, 
  setFavorites,
  favSelected,
  setFavSelected,
  setPhotoSelected
}) => {
  const {id, user, urls, location, similar_photos} = photoSelected
  const photos = Object.values(similar_photos);

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

        <div className="photo-details-modal__images">
          <PhotoList 
            photos={photos}
            setFavorites={setFavorites}
            setDisplayModal={setDisplayModal}
            setPhotoSelected={setPhotoSelected}
            favSelected={favSelected}
            setFavSelected={setFavSelected}
           />
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
