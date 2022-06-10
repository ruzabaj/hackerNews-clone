import React from 'react'
import "../../../scss/contents.scss";
import Comment from '../Comment';
import { useState, useEffect } from "react";
import {getTopStory} from '../../../axios/axios'

const Story = ({id ,sno}) => {
  const[topStory, setTopStory]=useState({});
  const [children, setChildren]=useState([]);

  useEffect(()=>{
    getTopStoryList();
  },[]);

  const getTopStoryList= async()=>{
    try {
      const response=await getTopStory(id);
      setTopStory(response.data)
      console.log(response.data) 
      setChildren(response.data.kids)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="new-posts">
      <div className="contents">
        <div className="content-one">
          <p>{sno}</p>
          <p> {JSON.stringify(topStory.title)}</p>
          <p>( {JSON.stringify(topStory.url)})</p>
        </div>
        <div className="content-two">
          <a href="score">{JSON.stringify(topStory.score)}points by</a>
          <span>
            <a href="author">{JSON.stringify(topStory.by)}</a>
          </span>
          <a href="time">{JSON.stringify(topStory.time)}hours ago</a>
          {children ?
          <a href="children">{JSON.stringify(children)}</a>
        :
        <Comment/>
        }
        </div>
      </div>
    </div>
  );
}

export default Story