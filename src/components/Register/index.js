import React from 'react'

const Register = () => {
  return (
    <div className='container'>
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
                <button type='submit' className='btn-register'>Create account</button>
            </form>
        </div>
    </div>
  )
}

export default Register