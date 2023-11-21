import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <h1>Get started</h1>
      <h2>Create your account now</h2>
      <label className="name">User name</label>
      <input type="text" id="name" />

      <label for="email">Email</label>
      <input type="email" id="email" />

      <label for="password">Password</label>
      <input type="password" id="password" />

      <input className="button" type="submit" value="Signup" />
      <div className="acc-ask">
        Already have account?<Link to="/login"> Login</Link>
      </div>
    </div>
  );
}
export default Register;
