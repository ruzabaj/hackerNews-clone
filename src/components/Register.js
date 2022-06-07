import React from 'react'
import '../scss/login.scss'

const Register = () => {
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
                <button type='submit' className='btn-login'>Create account</button>
            </form>
        </div>
    </div>
  )
}

export default Register