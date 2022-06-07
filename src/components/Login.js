import React from 'react'
import '../scss/login.scss'

const Login = () => {
  return (
    <div>
        <img src='bg-hackerNews.jpg' alt='hackerNews' className='bg-img'/>
        <div className='containers'>
            <form>
                <label to="username">Username:</label>
                <input type="text"/>
                <div>
                    <label to="username">Password:</label>
                    <input type="password"/> 
                </div>
                <button type='submit' className='btn-login'>Login</button>
                <div>
                    <a href='forgot'>Forgot password?</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login