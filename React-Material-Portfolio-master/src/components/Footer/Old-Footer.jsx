/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { Fragment } from "react";
// nodejs library to set properties for components
//import PropTypes from "prop-types";
// nodejs library that concatenates classes
//import classNames from "classnames";
import "./footer.css";
//import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
//import Favorite from "@material-ui/icons/Favorite";

//import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

const today = new Date();

const Footer = () => {
  return (
    <React.Fragment>
      <div className="pad">
        <footer className="footer ">
          <div className="footer-container">
            <nav className="footer-float">
              <div className="footer-menu">
                <li className="crumb">
                  <a href="#mytools">Tools </a>
                </li>

                <li className="crumb">
                  <a href="#skills">Skills </a>
                </li>

                <li className="crumb">
                  <a href="#projects">Projects </a>
                </li>

                <li className="crumb">
                  <a href="#contact">Contact</a>
                </li>
              </div>
            </nav>
            <div className="footer-icons">
              <a href="https://github.com/suziGeek">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.freecodecamp.org/suzigeek">
                <i className="fab fa-free-code-camp"></i>
              </a>
            </div>
          </div>
          <div className="copy">
            <p> &copy; {today.getFullYear()} Suzanne Allen.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   whiteFont: PropTypes.bool
// };

export default Footer;
