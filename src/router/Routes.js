import {Route, Routes} from 'react-router-dom';
import New from 'src/components/NewStory';
import Top from 'src/components/TopStory';
import Best from 'src/components/BestStory';
import Comment from 'src/components/comment';
import Register from '../components/Register';
import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<New/>}></Route>
            <Route exact path='/top' element={<Top/>}></Route>
            <Route exact path='/best' element={<Best/>}></Route>
            <Route  path='/register' element={<Register/>}></Route>
            <Route  path='/comment/:id' element={<Comment/>}></Route>
        </Routes>
    </div>
  )
}

export default Router