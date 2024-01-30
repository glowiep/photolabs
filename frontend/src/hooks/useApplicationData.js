import React, {useReducer} from 'react';

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
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
      const favPhotoArray = [...state.favorites]
      return {
        ...state,
        favorites: [favPhotoArray.filter(fav => fav != action.payload)]
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        photoSelected: action.payload,
        displayModal: true
      }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state
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
   * Open modal view when the user selects a photo
   * This will call two functions: setPhotoSelected and setDisplayModel
   * @function
   * @param {object} photo object with details
   */
  const onPhotoSelect = (photo) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo})
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
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;