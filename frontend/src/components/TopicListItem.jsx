import React from "react";
import { Tooltip } from '@mui/material';

import "../styles/TopicListItem.scss";
import useApplicationData from "../hooks/useApplicationData";

const TopicListItem = ({ topic }) => {
  const { getPhotosByTopics } = useApplicationData();

  return (
    <div className="topic-list__item" onClick={() => {getPhotosByTopics(topic.id)}}>
      <Tooltip title={`View ${topic.title} Photos`}>
        <span>{topic.title}</span>
      </Tooltip>
    </div>
  );
};

export default TopicListItem;
