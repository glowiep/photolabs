import React, {useState} from 'react';

const useApplicationData = () => {
  // Entire state of the application
  const [state, setState] = useState({
    favorites: [],
    displayModal: false,
    photoSelected: null
  });

  /**
   * This is used to update the array of photo ids 
   * that are added to Favorites.
   * @function
   * @param {string} id 
   * @returns {array}
   */
  const updateToFavPhotoIds = (id) => {
    setState((prevState) => {
      const prevFavorites = prevState.favorites;
      if (prevFavorites.includes(id)) {
        // Remove the element if it exists
        return {...prevState, favorites: prevFavorites.filter(fav => fav !== id)};
      } else {
        // Add the element if it doesn't exist
        return {...prevState, favorites: [...prevFavorites, id]};
      }
    });
  };


  /**
   * Open modal view when the user selects a photo
   * This will call two functions: setPhotoSelected and setDisplayModel
   * @function
   * @param {object} photo object with details
   */
  const onPhotoSelect = (photo) => {
    setState((prevState) => ({...prevState, photoSelected: photo, displayModal: !prevState.displayModal}));
  };

  /**
   * Action to close the modal
   * @function
   */
  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({ ...prevState, displayModal: false }));
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;