import { useEffect } from "react";
import useApplicationData from "./useApplicationData";

/**
 * A custom hook for the initial load of the page (loading skeleton).
 * The loading state is set as true, then after a timeout it is set to false
 * @function
 */
const useInitialLoading = () => {
  const { setLoading } = useApplicationData();

  useEffect(() => {
    // Set loading to true when component mounts
    setLoading(true);

    // Set a timeout to update timeout to false after the specified duration
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Cleanup function to clear timeout when component unmounts
    return () => {
      clearTimeout(loadingTimeout);
    }
  }, []);

};

export default useInitialLoading;