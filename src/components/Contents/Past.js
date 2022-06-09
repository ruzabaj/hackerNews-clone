import React from 'react'
import '../../scss/contents.scss';
import { useState } from 'react';
import newData from "../../StaticFiles/data";

const Past = () => {
const [data, setData] = useState(newData)
  return (
    <div>
      <div className="new-posts">
        {data.map((val)=>(
          <div className="contents">
      {console.log(val)}
      {val.title}
      </div>
      ))}
      </div>
    </div>
  )
}

export default Past