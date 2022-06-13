import {Route, Routes} from 'react-router-dom';
import New from '../components/Contents/New/New';
import Top from '../components/Contents/Top/Top';
import Best from '../components/Contents/Best/Best';
import Post from '../components/Contents/Past';
import Comment from '../components/comment/Comment';
import Ask from '../components/Contents/Ask';
import Show from '../components/Contents/Show';
import Jobs from '../components/Contents/Job';
import Login from '../components/Login/index';
import Reset from '../components/Reset/index';
import Register from '../components/Register/index';
import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<New/>}></Route>
            <Route exact path='/top' element={<Top/>}></Route>
            <Route exact path='/best' element={<Best/>}></Route>
            <Route  path='/past' element={<Post/>}></Route>
            <Route  path='/comment' element={<Comment/>}></Route>
            <Route path='/ask' element={<Ask/>}></Route>
            <Route  path='/show' element={<Show/>}></Route>
            <Route  path='/jobs' element={<Jobs/>}></Route>
            <Route  path='/login' element={<Login/>}></Route>
            <Route  path='/reset' element={<Reset/>}></Route>
            <Route  path='/register' element={<Register/>}></Route>
        </Routes>
    </div>
  )
}

export default Router