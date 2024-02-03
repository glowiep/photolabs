import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import useApplicationData from 'hooks/useApplicationData';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, fetchData } = useApplicationData();
  fetchData();
  
  return (
    <div className="App">
      <HomeRoute />
      {state.displayModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
