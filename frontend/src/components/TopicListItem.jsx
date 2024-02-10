import React from "react";
import { Tooltip } from '@mui/material';

import "../styles/TopicListItem.scss";
import useApplicationData from "../hooks/useApplicationData";

const TopicListItem = ({ topic }) => {
  const { getPhotosByTopics, state } = useApplicationData();
  const { darkMode } = state;

  return (
    <div className={darkMode ? "dark-topic-list__item" : "topic-list__item"} onClick={() => {getPhotosByTopics(topic.id)}}>
      <Tooltip title={`View ${topic.title} Photos`}>
        <span>{topic.title}</span>
      </Tooltip>
    </div>
  );
};

export default TopicListItem;
