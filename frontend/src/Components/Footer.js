import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
      
          <div className="col-lg-3">
            <h4 className="footer-title">Real <span className="dot">Estate.</span></h4>
            <p className="contact-info">conbusi@support.com</p>
            <p className="contact-info">+10 873 672 6782</p>
            <p className="contact-info">600/D, Green road, NewYork</p>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>

          <div className="col-lg-3">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><a href="#">Marketing & SEO</a></li>
              <li><a href="#">Startup</a></li>
              <li><a href="#">Finance Solution</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Travel</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="footer-heading">Useful Links</h5>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Appointment</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="footer-heading">Subscribe</h5>
            <div className="subscribe-box">
              <input type="email" className="subscribe-input" placeholder="Enter your email" /><br></br>
             
            </div>
            <button className="subscribe-btn ">Subscribe</button>
            <p className="subscribe-text">
              Esteem spirit temper too say adieus who direct esteem esteems luckily.
            </p>
          </div>
        </div>

        
        <hr />

        
        <p className="text-center mt-3 copyright-text">
          Copyright ©2025 All rights reserved | This template is made with ❤ by 
          <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer"> Colorlib</a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;