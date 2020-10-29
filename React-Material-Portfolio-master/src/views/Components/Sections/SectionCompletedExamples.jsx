import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import SkillsCard from "components/Card/SkillsCard";

//import "assets/jss/material-kit-react/views/componentsSections/componentupdate.css";

// core components
//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";

//import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <div>
          <div>
            <div className="completed-cards">
              <SkillsCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// SectionCompletedExamples.propTypes = {
//   classes: PropTypes.object
// };

export default SectionCompletedExamples;
