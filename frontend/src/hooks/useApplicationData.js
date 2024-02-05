import { useAppContext, ACTIONS } from 'contexts/AppContext';
import useFetchData from './useFetchData';
import getFavPhotosData from "utils/helperFunctions";
import { useEffect } from 'react';

const useApplicationData = () => {
  const { state, dispatch } = useAppContext();

  const fetchData = () => {
    useFetchData('/api/photos', "photoData", dispatch);
    useFetchData('/api/topics', "topicData", dispatch);
  };

  
  /**
   * This is used to update the array of photo ids 
   * that are added to Favorites.
   * @function
   * @param {string} id 
   * @returns {array}
   */
  const updateToFavPhotoIds = (id) => {    
      if (state.favorites.includes(id)) {
        // Remove the element if it exists
        dispatch({type: ACTIONS.REMOVE_FAV_PHOTO, payload: id});
      } else {
        // Add the element if it doesn't exist
        dispatch({type: ACTIONS.ADD_FAV_PHOTO, payload: id});
      }
  };

  /**
   * This is used to handle the click event when the favorite badge on the top navigation is clicked.
   * This will fetch the photo data based on the photo ids in the state.favorites array.
   * @function
   */
  const getFavoritePhotos = () => {
    dispatch({type: ACTIONS.DISPLAY_FAVORITES});

    // Fetch favorite photos
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        const favoritesData = getFavPhotosData(state.favorites, data);
        dispatch({type: ACTIONS.GET_FAVORITE_PHOTOS, payload: favoritesData})
      })
      .catch(error => {
        console.error("Error fetching favorite photos:", error);
    });
  }

  const updateFavoritePhotos = () => {
    useEffect(() => {
      if (state.displayFavorites) {
        getFavoritePhotos()
      }
    }, [state.favorites]);
  };

  /**
   * Fetch different image categories when users click on specific photo topics in top navigation
   * @function
   * @returns {array}
   */
  const getPhotosByTopics = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}));
  };


  /**
   * Shows the large image in the modal when the user selects a photo
   * Modal display will open if it was not already showing.
   * @function
   * @param {object} photo object with details
   */
  const onPhotoSelect = (photo) => {
    if (state.displayModal) { // If the modal is already open
      // Redisplay the large image 
      const photo_id = photo.id;
      const allPhotos = state.photoData;
      const newPhotoInModal = allPhotos.filter((p) => p.id === photo_id);
      dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: newPhotoInModal[0]});
      
      const modalDiv = document.getElementById("modal-div");
      modalDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } else {  // If modal is not open
      dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo});
    }
  };

  /**
   * Action to close the modal
   * @function
   */
  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  return {
    state,
    updateToFavPhotoIds,
    getFavoritePhotos,
    updateFavoritePhotos,
    getPhotosByTopics,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    fetchData
  };
};

export default useApplicationData;