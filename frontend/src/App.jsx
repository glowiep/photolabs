import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Manage state for side peek modal
  const [displayModal, setDisplayModal] = useState(false)

  // Manage state for selected photo
  const [photoSelected, setPhotoSelected] = useState();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics}
        setDisplayModal={setDisplayModal}
        setPhotoSelected={setPhotoSelected}
      />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} photoSelected={photoSelected}/>}
    </div>
  );
};

export default App;
