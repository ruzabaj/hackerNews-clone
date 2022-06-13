import React from "react";
import "../../scss/contents.scss";
import { useState, useEffect } from "react";
import {getCommentList} from '../../axios/axios';

const Comment = ({id}) => {
const [comment,setComment]=useState([]);

useEffect(()=>{
  getList();
},[]);

const getList = async ()=>{
try {
  const response=await getCommentList(id);
  setComment(response.data)
  console.log("from comment")
  console.log(response.data)
} catch (error) {
  console.log(error)
}
}

  return (
    <div className="new-posts">
      <div className="contents">
      {/* {comment.map((i,index)=> */}
      {/* <CommentList id={i}/> */}
(<a href="comment">Comment</a>)
{comment}
 {/* )} */}
</div>   
</div>
  );
};

export default Comment;
