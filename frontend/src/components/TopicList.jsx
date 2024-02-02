import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics, getPhotosByTopics} = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem topic={topic} key={topic.id} getPhotosByTopics={getPhotosByTopics}/>
      ))}
    </div>
  );
};

export default TopicList;
