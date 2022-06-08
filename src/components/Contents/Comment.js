import React from "react";
import "../../scss/contents.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Comment = () => {
  const [Comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setComment(response.data[0].name);
      });
  }, []);
  
  return (
    <div className="new-posts">
      {/* {Comment.map((item) => ( */}
      <div className="contents">{Comment}</div>
      {/* ))} */}
    </div>
  );
};

export default Comment;
