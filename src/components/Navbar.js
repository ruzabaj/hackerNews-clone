import React from "react";
import "../scss/navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-top">
        <div>
          <ul>
            <li>New</li>
            <li>Post</li>
            <li>Comment</li>
            <li>Ask</li>
            <li>Show</li>
            <li>Jobs</li>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </ul>
        </div>
        <div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </div>
      </div>
      <div className="contents">
          <p>whatever</p>
      </div>
    </div>
  );
};

export default Navbar;
