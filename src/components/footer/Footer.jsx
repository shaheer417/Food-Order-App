import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et
            quae distinctio? Vitae, accusantium labore nihil distinctio iste
            sunt non saepe laboriosam, architecto nam fuga modi facere ipsum ab
            qui.
          </p>
          <div className="footer-soial-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+92 288149817</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ tomato.com - All rights reserved.

      </p>
    </div>
  );
};

export default Footer;
