import axios from "axios";
export const baseUrl =`https://hacker-news.firebaseio.com/v0/`;
export const storysUrl =`${baseUrl}item/`;
export const newStoriesUrl =`${baseUrl}newstories.json`;
export const bestStoriesUrl =`${baseUrl}beststories.json`;
export const topStoriesUrl =`${baseUrl}topstories.json`;
// https://hacker-news.firebaseio.com/v0/item/31690162.json?print=pretty
export const getNewStory =async id=>{
    const result= await axios.get(`${storysUrl+id}.json`)
    return result
}
export const getNewStories = async () => {
    const result = await axios.get(newStoriesUrl)
    return result;
}

export const getBestStory =async id=>{
    const result=await axios.get(`${storysUrl+id}.json`)
    return result
}
export const getBestStories=async () =>{
    const result= await axios.get(`${bestStoriesUrl}`)
    return result;
}

export const getTopStory= async id=>{
    const result =await axios.get(`${storysUrl+id}.json`)
    return result;
}

export const getTopStories=async() =>{
    const result = await axios.get(topStoriesUrl)    
    return result;
}

export const getCommentList =async id=>{
    const result= await axios.get(`${storysUrl+id}.json`)
    return result;
}

