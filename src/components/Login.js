import React from "react";
import { useState } from "react";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";
//import { auth } from "./Firebase";

const Login = () => {
  // const history = useHistory();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const submitHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        // history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if(auth){
          // history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login-page">
      <Link to="/">
        <img
          className="login_logo"
          src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg"
          alt=""
        ></img>
      </Link>
      <div className="login_container">
        <h2>Sign-in</h2>
        <form>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email , password"
          ></input>
          <label>Password</label>
          <input
            type="password"
            id="password"
            vlaue={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          ></input>
          <button type="button" onClick={submitHandler}>
            Signin
          </button>
        </form>
        <p>
          By continuing, you agree to Fake Amazon Clone{" "}
          <a href=" / ">Conditions of Use</a> and
          <a href="/ "> Privacy Notice.</a>
        </p>
        <div className="createBtn">
          <button type="button" onClick={registerHandler}>
            Create amazon account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
