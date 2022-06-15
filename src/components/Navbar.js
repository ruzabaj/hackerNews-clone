import React from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import Routes from '../router/Routes'

const Navbar = () => {
  return (
    <div className="container" id="with-links">
      <div className="navbar-top">
        <div className="right-contents">
            <img src="logo.png" alt="logo"/>
            <h5 className="heading">Hacker News</h5>
          <ul>
            <li><Link to="/">New</Link></li>
            <li><Link to="/top">Top</Link></li>
            <li><Link to="/best">Best</Link></li>
            <li><Link to="/past">Past </Link></li>
            <li><Link to="/comment">Comment </Link></li>
            <li><Link to="/ask">Ask </Link></li>
            <li><Link to="/show">Show</Link></li>
            <li><Link to="/jobs">Jobs </Link></li>
          </ul>
        </div>
        <div className="button-nav">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="submit" className="btn-login">
            <Link to="/login">Login </Link>
          </button>
        </div>
      </div>
          <Routes/>
    </div>
  );
};

export default Navbar;
