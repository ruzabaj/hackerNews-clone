import React ,{ useState, useEffect }from "react";
import { getTopStories } from "src/services/Story";
import Story from "src/components/Story";

const TopStory = () => {
  const [topStory, setTopStory] = useState([]);

  useEffect(() => {
    getTopStory();
  }, []);

  const getTopStory = async () => {
    try {
      const response = await getTopStories();
      setTopStory(response.data.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new-posts">
      <div className="contents">
        {topStory.map((i,index)=>(
            <Story id={i} sno={index+1}/>
            ))}
      </div>
    </div>    
  )                
};
export default TopStory;
                         
                
                    