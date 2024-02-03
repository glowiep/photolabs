import React from "react";

import "../styles/TopicListItem.scss";
import useApplicationData from "../hooks/useApplicationData";

const TopicListItem = ({ topic }) => {
  const { getPhotosByTopics } = useApplicationData();

  return (
    <div className="topic-list__item" onClick={() => {getPhotosByTopics(topic.id)}}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
