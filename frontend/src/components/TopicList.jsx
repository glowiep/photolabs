import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import useApplicationData from "../hooks/useApplicationData";

const TopicList = () => {
  const { state } = useApplicationData();
  const topics = state.topicData;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem topic={topic} key={topic.id} />
      ))}
    </div>
  );
};

export default TopicList;
