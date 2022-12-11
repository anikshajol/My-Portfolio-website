import React from "react";
import { Link } from "react-router-dom";
import "./SideMenubar.css";

const SideMenubar = () => {
  return (
    <div className="">
      <section className="container">
        <nav id="navbar">
          <section className="side-menubar">
            <div className="display-image">
              <img
                src="https://i.ibb.co/z81rdBj/FB-IMG-1575364926110-removebg-preview.png"
                alt="UserImage"
                className="user-image"
              />
              <h2 className="user-name">Anik Hasan</h2>
            </div>
            <div className="menu">
              <ul className="menu__list">
                <Link to="/home">
                  <li id="menu__active">Home</li>
                </Link>
                <Link to="/about-me">
                  <li>About Me</li>
                </Link>
                <Link to="vision">
                  <li>What I Do</li>
                </Link>
                <Link to="resume">
                  <li>Resume</li>
                </Link>
                <Link to="my-details">
                  <li>Portfolio</li>
                </Link>
                <Link to="/testimonial">
                  <li>Testimonial</li>
                </Link>
                <Link to="contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>

            <div class="social-icon">
              {/* <Link to="">
                <i class="fa-brands fa-facebook icon"></i>
              </Link>
              <Link to="">
                <i class="fa-brands fa-twitter icon"></i>
              </Link>
              <Link to="">
                <i class="fa-brands fa-github icon"></i>
              </Link> */}
            </div>
          </section>
        </nav>
      </section>
    </div>
  );
};

export default SideMenubar;
