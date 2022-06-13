import React from 'react'
import '../../../scss/contents.scss';
import { useState, useEffect } from "react";
import {getTopStories} from '../../../axios/axios';
import Story from './TopStory'

const Top = () => {
const[topStory, setTopStory]= useState([]);

useEffect(()=>{
    getTopStory();
},[]);

const getTopStory = async () => {
try {
    const response=await getTopStories();
    setTopStory(response.data)
} 
catch (error) {
    console.log(error)
}
};
  return (
    <div className="new-posts">
        <div className="contents">
            {topStory.map((i,index)=>(
            <Story id={i} sno={index+1}/>
            ))}
        </div>
    </div>
  )
}

export default Top;