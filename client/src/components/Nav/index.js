import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">React Express Example</h1>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/newexample">
            Make your own
          </Link>
        </li>
        <li className="btn btn-outline-dark"><Link to="/login" id='login'>Login</Link></li>
        <li className="btn btn-outline-dark"><Link to="/signup" id='signup'>Sign Up</Link></li>
      </ul >
    </nav >
  );
}

export default Nav;
