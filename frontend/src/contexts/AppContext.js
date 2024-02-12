// State management is centralized here
import React, { createContext, useReducer, useContext } from 'react';

export const ACTIONS = {
  ADD_FAV_PHOTO: 'ADD_FAV_PHOTO',
  REMOVE_FAV_PHOTO: 'REMOVE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  GET_FAVORITE_PHOTOS: 'GET_FAVORITE_PHOTOS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  GET_SEARCH_PHOTOS: 'GET_SEARCH_PHOTOS',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  DISPLAY_FAVORITES: 'DISPLAY_FAVORITES',
  CLOSE_MODAL: 'CLOSE_MODAL',
  LOADING_TIMEOUT_DONE: 'LOADING_TIMEOUT_DONE',
  SET_LOADING: 'SET_LOADING',
  SET_DARK_THEME: 'SET_DARK_THEME'
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
    case ACTIONS.SET_SEARCH_VALUE:
      return {
        ...state, searchValue: action.payload
      }
    case ACTIONS.GET_FAVORITE_PHOTOS:
      return {
        ...state, photoData: action.payload
      }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state, 
        photoData: action.payload,
        displayFavorites: false
      }
    case ACTIONS.GET_SEARCH_PHOTOS:
      return {
        ...state, 
        photoData: action.payload
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
    case ACTIONS.DISPLAY_FAVORITES:
      return {
        ...state,
        displayFavorites: true
      }
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        photoSelected: null,
        displayModal: false
      }
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case ACTIONS.SET_DARK_THEME:
      return {
        ...state,
        darkMode: action.payload
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
  searchPhotoData: [],
  displayModal: false,
  displayFavorites: false,
  photoSelected: null,
  darkMode: false,
  searchValue: ""
}

// Create context
const AppContext = createContext();

// Provider component to wrap app
export const AppProvider = ({ children }) => {
  // Entire state of the application
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

