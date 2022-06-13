import React from "react";
import "../../../scss/contents.scss";
import Comment from "../../comment/Comment";
import { getBestStory } from "../../../axios/axios";
import { useState, useEffect } from "react";

const BestNews = ({ id, counter }) => {
  const [bestStory, setBestStory] = useState({});
  const [children, setChildren] = useState([]);

  useEffect(() => {
    getBestNews();
  }, []);

  const getBestNews = async () => {
    try {
      const response = await getBestStory(id);
      setBestStory(response.data);
      setChildren(response.data.kids);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-posts">
      <div className="contents">
        <div className="content-one">
          <p>{counter}</p>
          <p> {JSON.stringify(bestStory.title)}</p>
          <p>( {JSON.stringify(bestStory.url)})</p>
        </div>
        <div className="content-two">
          <a href="score">{JSON.stringify(bestStory.score)}points by</a>
          <a href="author">{JSON.stringify(bestStory.by)}</a>
          <a href="time">{JSON.stringify(bestStory.time)}hours ago</a>
          {children ? <Comment /> : <p>No children</p>}
        </div>
      </div>
    </div>
  );
};

export default BestNews;
