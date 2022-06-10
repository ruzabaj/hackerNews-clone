import React from "react";
import "../../../scss/contents.scss";
import Story from "./NewStory";
import { useState, useEffect } from "react";
import { getNewStories } from "../../../axios/axios";

const New = () => {
  const [newStories, setNewStories] = useState([]);

  useEffect(() => {
    getStoriesNew();
  }, []);

  const getStoriesNew = async () => {
    try {
      const response=await getNewStories();
      setNewStories(response.data.slice(0,20))
      console.log("from new js")
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new-posts">
      <div className="contents">
        {newStories.map((i,index) => (
          <Story id={i} sno={index+1}/>
        ))}
      </div>
    </div>
  );
};

export default New;
