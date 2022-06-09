import React from "react";
import '../../scss/contents.scss';
import { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../../axios/axios";

const New = () => {
const [dataApi, setdataApi] = useState([]);

useEffect (() => {
  getStoryIds().then(res =>  setdataApi(res));
  getStory(31679398).then(data=>console.log(data));
}, [])
 
  return (
    <div className="new-posts">
        <div className="contents">
          <div className="content-one">
            {/* {dataApi.map((i)=>(<p>{console.log(i)}</p>))} */}
            {/* <p>{data.title}</p>
            <p>({data.url})</p> */}
            <p>{JSON.stringify(dataApi)}</p> 
          </div>
          <div className="content-two">
            {/* <a href="title">1 point by {data.title}</a>
            <a href="url">(time{data.url})</a> */}
            <a href="comment">(comment if it has child)</a>
          </div>
      </div>
    </div>
  );
};

export default New;
