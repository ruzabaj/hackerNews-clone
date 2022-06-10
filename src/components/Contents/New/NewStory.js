import React from "react";
import "../../../scss/contents.scss";
import { useState, useEffect } from "react";
import { getNewStory} from "../../../axios/axios";

const Story = ({ id ,sno}) => {
  const [newStory, setNewStory] = useState({});
  const [descendant, setDescendants] = useState();

  useEffect(() => {
    getStoryNew();
  }, []);

  const getStoryNew = async () => {
    try {
      const response=await getNewStory(id);
      setNewStory(response.data)
      console.log("from newStory after replaing id js")
      console.log(response.data.descendants)
      setDescendants(response.data.descendants)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new-posts">
      <div className="contents">
        <div className="content-one">
          <p>{sno}</p>
          <p> {JSON.stringify(newStory.title)}</p>
          <p>( {JSON.stringify(newStory.url)})</p>
        </div>
        <div className="content-two">
          <a href="score">{JSON.stringify(newStory.score)}points by</a>
          <span>
            <a href="author">{JSON.stringify(newStory.by)}</a>
          </span>
          <a href="time">{JSON.stringify(newStory.time)}hours ago</a>
          <a href="descendants">{JSON.stringify(descendant)}</a>       
        </div>
      </div>
    </div>
  );
};

export default Story;
