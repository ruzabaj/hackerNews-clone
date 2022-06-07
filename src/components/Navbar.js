import React from "react";
import "../scss/navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-top">
        <div className="right-contents">
            <img src="logo.png" alt="logo"/>
            <h5 className="heading">Hacker News</h5>
          <ul>
            <li>New</li>
            <li>Post</li>
            <li>Comment</li>
            <li>Ask</li>
            <li>Show</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="submit" className="btn-login">
            Login
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
