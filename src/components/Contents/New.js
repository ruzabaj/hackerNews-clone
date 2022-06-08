import React from "react";
import '../../scss/contents.scss';
// import newData from "../../StaticFiles/data";
import { useState, useEffect } from "react";
import axios from "axios";

const New = () => {
const [data, setdata] = useState("");

useEffect (() => {
  return () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response.data[0].title);
      setdata(response.data[1].title)
    })
  };
}, [])
  return (
    <div className="new-posts">
      {/* {newData.map((item)=>( */}

        <div className="contents">
        <table>
          <tbody>

          <tr>
            <p>{data}</p>
          </tr>
          <tr>
            <p>Hello</p>
          </tr>
          <tr>
            <div>Whatever</div>
          </tr>
          {/* <tr>
            <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
            </p>
            </tr>
            <tr>
            <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              </p>
              </tr>
              <tr>
              <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              </p>
              </tr>
              <tr>
              <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              </p>
            </tr> */}
              </tbody>
        </table>
      </div>
            {/* ))} */}
    </div>
  );
};

export default New;
