import React from "react";
import "../../scss/contents.scss";
import { useState, useEffect } from "react";
import {getCommentList} from '../../axios/axios';

const Comment = ({id}) => {
const [comment,setComment]=useState([]);

useEffect(()=>{
  getList();
},[]);

console.log("from comment", comment)

const getList = async ()=>{
try {
  const response=await getCommentList(id);
  setComment(response.data)
} catch (error) {
  console.log(error)
}
}

  return (
    <div className="new-posts">
      <div className="contents">
      {comment.map((item,index)=>
        (<a href="comment">{item.text}</a>)
        )}
      </div>   
    </div>
  );
};

export default Comment;
