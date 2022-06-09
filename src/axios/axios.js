/* eslint-disable no-template-curly-in-string */
import axios from "axios";

export const baseUrl ="https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl ="https://hacker-news.firebaseio.com/v0/newstories.json";
// '${baseUrl}newstories.json/' '${baseUrl}item/'
export const storysUrl ="https://hacker-news.firebaseio.com/v0/item/";

export const getStory =async dataApi=>{
    const result= await axios.get("https://hacker-news.firebaseio.com/v0/item/31679398.json")
    // ("${baseUrl+dataApi}.json")
    .then(({data})=>data);

    return result
}
export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl)
    .then(({data})=>data);

    return result;
}