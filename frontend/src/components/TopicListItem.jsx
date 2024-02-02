import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {topic, getPhotosByTopics} = props
  return (
    <div className="topic-list__item" onClick={() => {getPhotosByTopics(topic.id)}}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
