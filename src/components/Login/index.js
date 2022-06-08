import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <img src='bg-hackerNews.jpg' alt='hackerNews' className='bg-img'/>
        <div className='containers'>
            <form>
                <p>
                    <label to="username">Username:</label>
                    <input type="text"/>
                </p>
                <p>
                    <label to="username">Password:</label>
                    <input type="password"/> 
                </p>
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