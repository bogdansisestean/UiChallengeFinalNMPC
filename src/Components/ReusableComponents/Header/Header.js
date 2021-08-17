import React from "react";
import "./Header.css";
import logo from "../../../Images/Logo.png";

function Header() {
  return (
    <div className="boxed-content">
      <div className="row header-menu align-items-center">
        <div className="col-3">
          <a href="/Home">
            <img clas src={logo} />
          </a>
        </div>
        <div className="col-6 menu-pages">
          <div className="row ">
            <div className="col-3 menu-pages-item">
              <a className="black-small-text" href="/Home">Home</a>
            </div>
            <div className="col-3 menu-pages-item">
              <a className="black-small-text" href="/About-us">About Us</a>
            </div>
            <div className="col-3 menu-pages-item">
              <a className="black-small-text" href="/Blog">Blog</a>
            </div>
            <div className="col-3 menu-pages-item">
              <a className="black-small-text" href="/Contact-us">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row align-items-center">
            <div className="col-6 dropdown">
              <a className="dropbtn black-small-text">Sell Bitcoin/Giftcard</a>
              <div className="dropdown-content">
                <a className="black-small-text" href="/sell-bitcoin">Sell Bitcoin</a>
                <a className="black-small-text" href="/sell-giftcard">Sell Giftcard</a>
              </div>
            </div>
            <div className="col-6 dropdown">
                <a href="/login">
              <button className="default-btn">Login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
