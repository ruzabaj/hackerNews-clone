import React from 'react'
import {Link} from 'react-router-dom';
import { generatePath , useNavigate} from "react-router";
// import Comment from 'src/comment/Comment';
// import CommentList from 'src/comment/CommentList';
import { useState, useEffect } from "react";
import {getStory} from 'src/services/Story'

const Story = ({id ,sno}) => {
  const[topStory, setTopStory]=useState({});
  const [children, setChildren]=useState([]);

  useEffect(()=>{
    getTopStoryList();
  });

  const getTopStoryList= async()=>{
    try {
      const response=await getStory(id);
      setTopStory(response.data)
      setChildren(response.data.kids)
    } catch (error) {
      console.log(error)
    }
  }

  const path = '/comment/:id';
  let navigate=useNavigate();
  const onComment = () =>{
    const pathName= generatePath(path, {id});
    navigate(pathName);
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
          <a href="author">{JSON.stringify(topStory.by)}</a>
          <a href="time">{JSON.stringify(topStory.time)}hours ago</a>
          {children?.length > 0 && <button onClick={onComment}><Link to="/comment/:id">Comment </Link></button>}
        </div>
      </div>
    </div>
  );
}

export default Story