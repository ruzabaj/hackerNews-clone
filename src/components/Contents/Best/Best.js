import React from "react";
import '../../../scss/contents.scss';
import { useState, useEffect } from "react";
import BestNews from "./BestNews";
import { getBestStories} from "../../../axios/axios";

const Best = () => {
const [bestStories, setBestStories] = useState([]);

useEffect(()=>{
  getBest();
}, []);

const getBest=async()=>{
  try{
    const response=await getBestStories();
    setBestStories(response.data.slice(0,30))
  }
  catch(error){
    console.log(error);
  }
 }
  return (
    <div className="new-posts">
        <div className="contents">
            {bestStories.map((i,index)=>
              (<BestNews props={i}/>)
            )}
      </div>
    </div>
  );
};

export default Best;
