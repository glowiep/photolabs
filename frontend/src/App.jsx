import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Manage state of favorites list
  const [favorites, setFavorites] = useState([])

  // Manage state of favorite button
  const [favSelected, setFavSelected] = useState(false);

  // Manage state for side peek modal
  const [displayModal, setDisplayModal] = useState(false)

  // Manage state for selected photo
  const [photoSelected, setPhotoSelected] = useState();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics}
        favorites={favorites} 
        setFavorites={setFavorites}
        setDisplayModal={setDisplayModal}
        setPhotoSelected={setPhotoSelected}
        setFavSelected={setFavSelected}
      />
      {displayModal && <PhotoDetailsModal 
                        setDisplayModal={setDisplayModal} 
                        photoSelected={photoSelected}
                        setFavorites={setFavorites}
                        favSelected={favSelected}
                        setFavSelected={setFavSelected}
                        setPhotoSelected={setPhotoSelected}
                        />}
    </div>
  );
};

export default App;
