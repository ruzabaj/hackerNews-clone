import React from 'react'
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
                    <a href='forgot'>Forgot password?</a>
                </p>
                <p>Don't have an account? <a href='register'>Register</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login