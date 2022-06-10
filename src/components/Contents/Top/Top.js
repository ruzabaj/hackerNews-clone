import React from 'react'
import '../../../scss/contents.scss';
import { useState, useEffect } from "react";
import {getTopStories} from '../../../axios/axios'
import TopStory from './TopStory'

const Top = () => {
const[topStory, setTopStory]= useState([]);

useEffect(()=>{
    getTop();
},[]);

const getTop=async()=>{
try {
    const response=await getTopStories();
    setTopStory(response.data.slice(0,30))
} 
catch (error) {
    console.log(error)
}
}
  return (
    <div className="new-posts">
        <div className="contents">
            {topStory.map((i,index)=>(
            <TopStory id={i} sno={index}/>
            ))}
        </div>
    </div>
  )
}

export default Top