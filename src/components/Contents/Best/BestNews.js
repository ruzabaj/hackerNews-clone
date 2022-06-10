import React from 'react'
import "../../../scss/contents.scss";
import {getBestStory} from '../../../axios/axios'
import { useState, useEffect } from 'react';

const BestNews = ({id, sno}) => {
const [bestStory, setBestStory]= useState({})

useEffect(() => {
  getBestNews()  
}, []);

const getBestNews= async()=>{
  try {
    const response= await getBestStory(id);
    setBestStory(response.data)
  } catch (error) {
    console.log(error)
  }}

  return (
    <div className="new-posts">
      <div className="contents">
        <div className="content-one">
          <p>{sno}</p>
          <p> {JSON.stringify(bestStory.title)}</p>
          <p>( {JSON.stringify(bestStory.url)})</p>
        </div>
        <div className="content-two">
          <a href="score">{JSON.stringify(bestStory.score)}points by</a>
          <span>
            <a href="author">{JSON.stringify(bestStory.by)}</a>
          </span>
          <a href="time">{JSON.stringify(bestStory.time)}hours ago</a>
        </div>
      </div>
    </div>
  );
}

export default BestNews