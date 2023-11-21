import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="navLeft">
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>The Game</h2>
      </div>
      <h2>
        <Link to="/login">User</Link>
      </h2>
    </nav>
  );
}
export default Nav;
