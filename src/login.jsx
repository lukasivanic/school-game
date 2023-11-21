import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <h1>Welcome back!</h1>
      <h2>Login to you account</h2>
      <label className="name" for="name">
        User name
      </label>
      <input type="text" id="name" />

      <label for="password">Password</label>
      <input type="password" id="password" />

      <input className="button" type="submit" value="Login" />
      <div className="acc-ask">
        Dont have account?<Link to="/register"> Sign in</Link>
      </div>
    </div>
  );
}

export default Login;
