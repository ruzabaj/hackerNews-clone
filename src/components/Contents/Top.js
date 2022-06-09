import React from "react";
import '../../scss/contents.scss';
import { useState, useEffect } from "react";
import axios from "axios";

const New = () => {
const [data, setdata] = useState("");

useEffect (() => {
  return () => {
    axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then((response)=>{
      console.log(response.data);
      setdata(response.data)
    })
  };
}, [])
  return (
    <div className="new-posts">
        <div className="contents">
          <div className="content-one">
            <p>1</p>
            <p>{data.title}</p>
            <p>({data.url})</p>
          </div>
          <div className="content-two">
            <a href="title">1 point by {data.title}</a>
            <a href="url">(time{data.url})</a>
            <a href="comment">(comment if it has child)</a>
          </div>
      </div>
    </div>
  );
};

export default New;
