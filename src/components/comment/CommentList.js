import React from "react";
import { getCommentList } from "../../axios/axios";
import { useState, useEffect } from "react";

const CommentList = ({ id ,sno }) => {
  const [commentList, setCommentLIst] = useState({});
  useEffect(() => {
    getListComment();
  });
  const getListComment = async () => {
    const response = await getCommentList(id);
    setCommentLIst(response);
    console.log(response);
  };
  return (
    <div className="new-posts">
      <div className="contents">
        <div className="content-one">{commentList.text}</div>
      </div>
    </div>
  );
};
export default CommentList;
