import React from "react";
import "./Footer.css";
import pic from "./assets/weather-logo.png";
import news from "./assets/news.jpg";

const Footer = () => {
    let mydate = new Date().getFullYear().toString();
  return (
    <div className="footer">
      <span className="name">
      <h3>Weather News APP</h3>
       
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
      <img src={pic} width={50} height={50} className='pic' />
      <div>Principles of programming Languages </div> 
        {/* <a href="https://www.linkedin.com/in/piyush-eon" target="__blank"> */}
          <div>Group 17</div>
          <img src={news} width={50} height={50} className='pic' />
        
      <div></div>
       
      </div>
      <div className="f-text">All rights reserved @ {mydate}</div>
    </div>
  );
};

export default Footer;
