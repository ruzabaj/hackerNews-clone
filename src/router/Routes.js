import {Route, Routes} from 'react-router-dom';
import New from '../components/Contents/New';
import Post from '../components/Contents/Past';
import Comment from '../components/Contents/Comment';
import Ask from '../components/Contents/Ask';
import Show from '../components/Contents/Show';
import Jobs from '../components/Contents/Job';
import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<New/>}></Route>
            <Route  path='/past' element={<Post/>}></Route>
            <Route  path='/comment' element={<Comment/>}></Route>
            <Route path='/ask' element={<Ask/>}></Route>
            <Route  path='/show' element={<Show/>}></Route>
            <Route  path='/jobs' element={<Jobs/>}></Route>
        </Routes>
    </div>
  )
}

export default Router