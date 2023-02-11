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
            <h2>Sign-in</h2>
            <form>
                <label>Username</label>
                 <input type="text" id="username" value={user} placeholder="Email or phoneNumber"></input>
                 <label>Password</label>
                 <input type="password" id="password" placeholder="password"></input>
                 <button type="button">SignIn</button>
            </form>
             <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                 <button className='login_registrationBtn'>Create amazon account</button>
          </div>
    </div>
  )
}

export default Login;