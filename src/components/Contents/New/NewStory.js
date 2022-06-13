import React from "react";
import "../../../scss/contents.scss";
import { useState, useEffect } from "react";
import { getNewStory} from "../../../axios/axios";

const Story = ({ id ,sno}) => {
  const [newStory, setNewStory] = useState({});
  const [timeHour, setTimeHour] = useState();

  useEffect(() => {
    getStoryNew();
    getTime();
    hourTime();
  }, []);

 
  const getTime =async ()=>{
    try {
      const response=await getNewStory(id);
      setTimeHour(response.data.time);
    } 
    catch (error) {
      console.log(error)
    }
  }
  const hourTime =()=>{
    const hours =(timeHour / 3600);
    const days = (hours/24);
    const week =(days/7);
    const months =(week/12);
    console.log("hours")
    console.log(months)

    return hours+':'+days+':'+week+':'+months;
  }
  const getStoryNew = async () => {
    try {
      const response=await getNewStory(id);
      setNewStory(response.data)
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
          <a href="author">{JSON.stringify(newStory.by)}</a>
          <a href="time">{JSON.stringify(newStory.time)} {hourTime}hours ago</a>
        </div>
      </div>
    </div>
  );
};

export default Story;
