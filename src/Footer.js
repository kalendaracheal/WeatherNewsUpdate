import React from "react";
import "./Footer.css";
import pic from "./assets/weather-logo.png";

const Footer = () => {
    let mydate = new Date().getFullYear().toString();
  return (
    <div className="footer">
      <span className="name">
        Principles of programming Languages  
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Group 17
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">Weather News App
      <img src={pic} width={50} height={50} className='pic' />
      <div>Contact</div>
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
          <i className="fab fa-instagram-square fa-2x">instagram</i>
        </a>
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          <i className="fab fa-linkedin fa-2x">linkedin</i>
        </a>
        <a href="https://piyushjsx.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x">netflix</i>
        </a>
      </div>
      <div className="f-text">All rights reserved @ {mydate}</div>
    </div>
  );
};

export default Footer;
