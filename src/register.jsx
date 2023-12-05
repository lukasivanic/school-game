import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/register.css";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <div id="id">
      <form onSubmit={handleSubmit} className="register">
        <h1>Get started</h1>
        <h2>Create your account now</h2>
        <label className="name">User name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />

        <input className="button" type="submit" value="Signup" />
        <div className="acc-ask">
          Already have account?<Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
}
export default Register;
