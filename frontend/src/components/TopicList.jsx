import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const topic = {
  id: "3",
  slug: "topic-3",
  title: "People",
}
const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem topic={topic} key={topic.id}/>
      )
        
      )}
    </div>
  );
};

export default TopicList;
