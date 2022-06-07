import React from 'react'

const Reset = () => {
  return (
    <div>
        <img src='bg-hackerNews.jpg' alt='hackerNews' className='bg-img'/>
        <div className='containers'>
            <form>
                <p>
                    <label to="username">Username:</label>
                    <input type="text"/>
                </p>
                <button type='submit' className='btn-register'>Reset</button>
            </form>
        </div>
    </div>
  )
}

export default Reset