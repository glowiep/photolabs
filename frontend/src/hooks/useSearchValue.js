import { useEffect } from "react";
import { ACTIONS, useAppContext } from 'contexts/AppContext';

/**
 * A custom hook for the loading photos based on the search value.
 * @function
*/
const useSearchValue = () => {
  const { state, dispatch } = useAppContext();
  const { searchValue } = state;

  useEffect(() => {
    if (searchValue !== null) {
      fetch(`/api/photos`)
        .then(res => res.json())
        .then(data => data.filter(photo => (photo.location.city === state.searchValue)))
        .then(filteredData => dispatch({type: ACTIONS.GET_SEARCH_PHOTOS, payload: filteredData}));
    } else {
      console.log("search value should be null")
      fetch(`/api/photos`)
        .then(res => res.json())
        .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
    }
  }, [searchValue]);
  console.log("useEffect in useSearchValue.js")
};

export default useSearchValue;