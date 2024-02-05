/**
 * Filters the photoData to return an array that contains the user favorites.
 * @function
 * @param {number[]} favorites - Array of photo IDs that are marked as favorites.
 * @param {Array<Object>} photoData - Array of photo objects with details.
 * @returns {Array<Object>} An array containing the user's favorite photo objects.
 */
const getFavPhotosData = (favorites, photoData) => {
  return photoData.filter(photo => favorites.includes(photo.id));
};

export default getFavPhotosData;