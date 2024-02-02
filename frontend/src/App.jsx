import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    getPhotosByTopics,
    onPhotoSelect,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photoData} 
        topics={state.topicData}
        favorites={state.favorites}
        getPhotosByTopics={getPhotosByTopics}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
      {state.displayModal && <PhotoDetailsModal 
                        state={state}
                        onPhotoSelect={onPhotoSelect}
                        updateToFavPhotoIds={updateToFavPhotoIds}
                        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
                        />}
    </div>
  );
};

export default App;
