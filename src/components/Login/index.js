import React from 'react';
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // const initialValue= {username:"", password:"" };
    // const [formvalue, setformValue] = useState(initialValue);
    // const [formerror, setformError] = useState();
    // const [submit, setsubmit] = useState(false);

    // const formChange=(e)=>{
    //     const{name, value}=e.target;
    //     setformValue({...formvalue, [name]:value})
    // }
    // const formSubmit=(event)=>{
    //     event.preventDefault();
    //     // on formsubmit set the form error with validation of formvalue
    //     setformError(Validate(formvalue));
    //     setsubmit(true)
    // }
    // const Validate=(values)=>{
    //     const error={};
    //     if(!values.username){
    //         error.username="username is required!"
    //     }
    //     if(!values.password){
    //         error.password="password is required!"
    //     }
    //     return error;
    // }
    // useEffect(() => {
    // console.log(formerror)
    //         if(Object.keys(formerror).length === 0 && submit){
    //             console.log(formvalue);
    //         }
    // }, [formerror]);

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