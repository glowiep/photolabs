import { useEffect } from "react";
import { ACTIONS } from "./useApplicationData";

const useFetchData = (API_URL, type, dispatch) => {
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        switch (type) {
          case "photoData": dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
          break;
          case "topicData": dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data})
          break;
          default: console.log("Data could not be fetched.")
        }
      })
  }, [API_URL, type, dispatch]);
}

export default useFetchData;