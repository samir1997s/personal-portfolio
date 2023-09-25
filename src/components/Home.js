import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useState } from "react";
export const Home = () => {
  return (
    <div className="home-wrpper">
      <div className="home-container">
        <span className="my-name">SAMIR ALKHALIL 👋</span>
        <br />
        <hr className="hr"></hr>
        <br />
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/samir-alkhalil-66bb9a170/"
            target="_blank"
          >
            <img src={navIcon1} alt="" />
          </a>
          <a href="https://www.facebook.com/sameer.alkhalil" target="_blank">
            <img src={navIcon2} alt="" />
          </a>
          <a href="https://www.instagram.com/sameer_alkhalil/" target="_blank">
            <img src={navIcon3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
