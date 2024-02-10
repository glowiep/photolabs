import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import useApplicationData from "hooks/useApplicationData";
import emptyImage from '../assets/empty.png';
import { Paper } from '@mui/material';

const PhotoList = ({ photos }) => {
  const { state } = useApplicationData();

  return (
    <Paper elevation={0} square>
      <ul className='photo-list'>
        {state.displayFavorites && photos.length === 0 && <img src={emptyImage} alt="No photos available" className="empty-img"></img> }
        {photos.map((photo) => (
          <PhotoListItem 
            key={photo.id} 
            photo={photo}
          />
        ))}
      </ul>
    </Paper>
  );
};

export default PhotoList;
