import React, {useState} from 'react';

const useApplicationData = () => {
  // Entire state of the application
  const [state, setState] = useState();

  // Manage state of favorites list
  const [favorites, setFavorites] = useState([])

  // Manage state for side peek modal
  const [displayModal, setDisplayModal] = useState(false)

  // Manage state for selected photo
  const [photoSelected, setPhotoSelected] = useState();

  // This is used to set the favourite photos

  /**
   * @function
   * @param {string} id 
   * @returns {array}
   */
  const updateToFavPhotoIds = (id) => {
    setFavorites(prevFavorites => {
      console.log(favorites)
      if (prevFavorites.includes(id)) {
        // Remove the element if it exists
        return prevFavorites.filter(fav => fav !== id);
      } else {
        // Add the element if it doesn't exist
        return [...prevFavorites, id]
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
    setPhotoSelected(photo)
    setDisplayModal(prevDisplayModal => !prevDisplayModal);
  }

  /**
   * Action to close the modal
   * @function
   */
  const onClosePhotoDetailsModal = () => {
    return setDisplayModal(false);
  };

  return {
    state,
    favorites,
    displayModal,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;