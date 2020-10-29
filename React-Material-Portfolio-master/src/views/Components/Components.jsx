import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import MyTools from "components/MyTools/MyTools.jsx";
//import Map from "components/GoogleMap/Map.jsx";
//import MyProjects from "components/MyProjects/MyProjects.jsx";
//import MyProjectsReverse from "components/MyProjects/MyProjectsReverse.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import SectionBasics from "./Sections/SectionBasics.jsx";
// import SectionNavbars from "./Sections/SectionNavbars.jsx";
// import SectionTabs from "./Sections/SectionTabs.jsx";
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionNotifications from "./Sections/SectionNotifications.jsx";
//import SectionTypography from "./Sections/SectionTypography.jsx";
//import SectionJavascript from "./Sections/SectionJavascript.jsx";
// import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionCompletedProjects from "./Sections/SectionCompletedProjects.jsx";
import SectionMapContact from "./Sections/SectionMapContact.jsx";
import "assets/jss/material-kit-react/views/componentsSections/componentupdate.css";
//import ReactContactForm from 'react-mail-form';

// import SectionLogin from "./Sections/SectionLogin.jsx";
// import SectionExamples from "./Sections/SectionExamples.jsx";
// import SectionDownload from "./Sections/SectionDownload.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
//import Contact from '../../components/Contact/ContactForm';
//import ContactForm from "./../../components/Contact/ContactForm";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <React.Fragment>
        <div className='mainwrapper'>
          <Header
            brand='Suzanne Allen'
            rightLinks={<HeaderLinks />}
            fixed
            color='transparent'
            changeColorOnScroll={{
              height: 400,
              color: "white",
            }}
            {...rest}
          />

          <Parallax image={require("assets/img/hero.jpg")}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>Suzanne Allen</h1>
                  <h2 className={classes.subtitle}>Full Stack Web Developer</h2>
                  <h3 className={classes.subtitle}>
                    Specializing in .Net Core, C#, MySQL, Javascript, React,
                    HTML5, CSS3.
                  </h3>
                  <h2 className={classes.subtitle}>Based in Cleveland Ohio.</h2>
                </div>
              </GridItem>
            </GridContainer>
          </Parallax>

          <div>
            <GridContainer>
              <GridItem id='mytools'>
                <MyTools />
              </GridItem>
            </GridContainer>
          </div>

          <div id='skills'>
            <SectionCompletedExamples />
          </div>
          <div id='projects'>
            <SectionCompletedProjects />
          </div>
          <div id='contact'>
            <SectionMapContact />
          </div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(componentsStyle)(Components);
