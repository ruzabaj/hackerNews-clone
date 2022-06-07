import React from "react";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <div  className="container" id="container-footer">
        <div className="footer-handle">

      <div className="footer">
        <ul>
          <li>Guidelines</li>
          <li>FAQ</li>
          <li>Lists</li>
          <li>API</li>
          <li>Security</li>
          <li>Legal</li>
          <li>Apply to YC</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="search-option">
          <label to="search">Search:</label>
          <input type="text"/>
      </div>
        </div>
    </div>
  );
};

export default Footer;
