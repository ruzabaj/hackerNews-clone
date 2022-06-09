import React from "react";
import '../../scss/contents.scss';
import { useState, useEffect } from "react";
import axios from "axios";

const New = () => {
const [dataApi, setdataApi] = useState([]);

useEffect (() => {
  return () => {
    axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    .then((response)=>{
      console.log(response.data);
      setdataApi(response.data)
    })
  };
}, [])
// useEffect (()=>{
//   axios.get("https://hacker-news.firebaseio.com/v0/item/31678336(i).json?print=pretty")
//   .then((response)=>{
//     console.log(response.data)
//   })
// })
  return (
    <div className="new-posts">
      {/* {console.log( dataApi)}
      {console.log( "dataApi called")} */}
        <div className="contents">
          <div className="content-one">
            {dataApi.map((i)=>(<p>{console.log(i)}</p>))}
            {/* <p>{data.title}</p>
            <p>({data.url})</p> */}
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
