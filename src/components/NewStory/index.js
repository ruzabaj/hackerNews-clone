import React ,{ useState, useEffect } from "react";
import Story from "src/components/Story";
import { getNewStories } from "src/services/Story";

const NewStory = () => {
  const [newStories, setNewStories] = useState([]);

  useEffect(() => {
    getStoriesNew();
  }, []);

  const getStoriesNew = async () => {
    try {
      const response=await getNewStories();
      setNewStories(response.data.slice(0,30))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new-posts">
      <div className="contents">
        {newStories.map((i,index) => (
          <Story id={i} sno={index+1}/>
        ))}
      </div>
    </div>
  );
};

export default NewStory;
