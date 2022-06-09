import React from "react";
import '../../scss/contents.scss';
import Story from "./New/NewStory";
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
            {/* {dataApi.map((i)=>(<p>{(i)}</p>))} */}
            
              <p>{JSON.stringify(dataApi)}</p> 
            {dataApi.map((i)=>
              (<Story props={i}/>)
            )}
          </div>
          
      </div>
    </div>
  );
};

export default New;
