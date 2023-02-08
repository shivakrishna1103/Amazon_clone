import React from 'react';
import {useState} from "react";
import {Link } from "react-router-dom";
const Login = () => {
    const [ user , setUser] = useState();
  return (
    <div className='login-page'>
        <Link  to="/">
        <img className='login_logo' src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" alt=""></img>
          </Link>
          <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <label>username</label>
                 <input type="text" id="username" value={user} placeholder="Email or phoneNumber"></input>
                 <label>Password</label>
                 <input type="password" id="password" placeholder="password"></input>
                 
            </form>
           
          </div>
    </div>
  )
}

export default Login