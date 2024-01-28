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

  // Manage state for side peek modal
  const [displayModal, setDisplayModal] = useState(false)

  // Manage state for selected photo
  const [photoSelected, setPhotoSelected] = useState();

  const updateFavorites = (id) => {
    setFavorites(prevFavorites => {
      console.log(favorites)
      if (prevFavorites.includes(id)) {
        // Remove the element if it exists
        return prevFavorites.filter(fav => fav !== id);
      } else {
        // Add the element if it doesn't exist
        return [...prevFavorites, id]
      }
    })
  }

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics}
        favorites={favorites} 
        updateFavorites={updateFavorites}
        setDisplayModal={setDisplayModal}
        setPhotoSelected={setPhotoSelected}
      />
      {displayModal && <PhotoDetailsModal 
                        setDisplayModal={setDisplayModal} 
                        photoSelected={photoSelected}
                        favorites={favorites}
                        updateFavorites={updateFavorites}
                        setPhotoSelected={setPhotoSelected}
                        />}
    </div>
  );
};

export default App;
