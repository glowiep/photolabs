import { useEffect } from "react";
import { ACTIONS } from 'contexts/AppContext';

/**
 * This is used to fetch the data to be populated on the photo list in the main content
 * @param {string} API_URL - API URL for data source
 * @param {string} type - Type of data to be retrieved
 * @param {function} dispatch - Accepts an object that represents the type of action we want to execute
 */
const useFetchData = (API_URL, type, dispatch) => {
  useEffect(() => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          switch (type) {
            case "photoData": 
              dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
              break;
            case "topicData":
              dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data})
              break;
            default: console.log("Data could not be fetched.")
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    
  }, []);
}

export default useFetchData;