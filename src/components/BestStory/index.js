import React, { useState, useEffect } from "react";
import Story from "src/components/Story";
import { getBestStories} from "src/services/Story";

const BestStory = () => {
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
              (<Story id={i} sno={index+1}/>)
            )}
      </div>
    </div>
  );
};

export default BestStory;
