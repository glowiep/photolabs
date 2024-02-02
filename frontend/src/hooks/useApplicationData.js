import React, { useEffect, useReducer} from 'react';
import useFetchData from './useFetchData';

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_FAV_PHOTO:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case ACTIONS.REMOVE_FAV_PHOTO:
      return {
        ...state,
        favorites: [...state.favorites.filter(fav => fav !== action.payload)]
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state, photoData: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state, topicData: action.payload
      }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state, photoData: action.payload
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        photoSelected: action.payload,
        displayModal: true
      }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        photoSelected: action.payload
      }
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        photoSelected: null,
        displayModal: false
      }
    default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
  }
}

const INITIAL_STATE = {
  favorites: [],
  photoData: [],
  topicData: [],
  displayModal: false,
  photoSelected: null
}

const useApplicationData = () => {
  // Entire state of the application
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useFetchData('/api/photos', "photoData", dispatch);
  useFetchData('/api/topics', "topicData", dispatch);
  
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
        dispatch({type: ACTIONS.REMOVE_FAV_PHOTO, payload: id})
      } else {
        // Add the element if it doesn't exist
        dispatch({type: ACTIONS.ADD_FAV_PHOTO, payload: id});
      }
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

      dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: newPhotoInModal[0]})

    } else {  // If modal is not open
      dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo})
    }
  };

  /**
   * Action to close the modal
   * @function
   */
  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL})
  };

  return {
    state,
    updateToFavPhotoIds,
    getPhotosByTopics,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;