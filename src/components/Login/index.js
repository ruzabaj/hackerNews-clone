import React from 'react';
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "src/scss/login.scss"
const Login = () => {
  return (
    <div className='container'>
        <img src='bg-hackerNews.jpg' alt='hackerNews' className='bg-img'/>
        <div className='containers'>
            {/* onSubmit={formSubmit} */}
            <form  >
                <p>
                    <label to="username">username:</label>
                    {/*  value={formvalue.username} onChange={formChange}*/}
                    <input type="text"/>
                </p>
                {/* <p>{formerror.username}</p> */}
                <p>
                    <label to="username">password:</label>
                    {/*value={formvalue.password} onChange={formChange}  */}
                    <input type="password"  /> 
                </p>
                {/* <p>{formerror.password}</p> */}
                <button type='submit' className='btn-login'>Login</button>
                <p>
                    <Link to="/reset">Forgot password?</Link>
                </p>
                <p>Don't have an account? <Link to="/register">Register </Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login