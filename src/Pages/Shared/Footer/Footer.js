import React from "react";
import logo2 from "../../../assets/logo2.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-32 mt-16 bg-gray-800 text-white">
      <div>
        <img className="w-20" src={logo2} alt="" />
        <p>
          Runner Automobiles Ltd.
          <br />
          Providing reliable tech since 2000
        </p>
        <small>© 2023 - Runner Automobiles PLC.</small>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/service" className="link link-hover">
          Service
        </Link>
        <Link to="/product" className="link link-hover">
          Product
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </div>
      <div>
        <span className="footer-title">CONTACT INFO</span>
        <span>Address</span>
        <small>138/1 Tejgaion I/A</small>
        <span>Phone</span>
        <small>09611222000</small>
        <span>Email</span>
        <small>support@runnerbd.com</small>
      </div>
      
    </footer>
  );
};

export default Footer;
