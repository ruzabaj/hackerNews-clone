import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentList, getStory } from "src/services/Story";
import Story from "src/components/Story";

const Comment = () => {
  const [story, setStory] = useState({kids:[]});
  const { id } = useParams();

  useEffect(() => {
    if (id) getList();
  }, [id]);

  const getList = async () => {
    try {
      const response = await getStory(id);
      setStory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-posts">
      <div className="contents">
        {story.kids.map((item, index) => (
          <Story id={item} counter={index+1}/>
        ))}
      </div>
    </div>
  );
};

export default Comment;
