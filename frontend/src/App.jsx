import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { favorites, displayModal, photoSelected },
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics}
        favorites={favorites} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
      {displayModal && <PhotoDetailsModal 
                        photoSelected={photoSelected}
                        favorites={favorites}
                        updateToFavPhotoIds={updateToFavPhotoIds}
                        onPhotoSelect={onPhotoSelect}
                        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
                        />}
    </div>
  );
};

export default App;
