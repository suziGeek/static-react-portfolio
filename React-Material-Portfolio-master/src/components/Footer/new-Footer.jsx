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
import { List, ListItem, withStyles } from "@material-ui/core";
import Button from "components/CustomButtons/Button.jsx";

import footerLinksStyle from "assets/jss/material-kit-react/components/footerLinksStyle.jsx";

// @material-ui/icons
//import Favorite from "@material-ui/icons/Favorite";

//import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

const today = new Date();

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className="footerWrapper">
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}

            <Button
              href="#mytools"
              color="transparent"
              className={classes.navLink}
            >
              <i class="fas fa-wrench"></i>
              My Tools
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              href="#skills"
              className={classes.navLink}
            >
              <i class="far fa-file-code"></i>
              Skills
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              href="#projects"
              className={classes.navLink}
            >
              <i class="far fa-folder"></i>
              Projects
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              href="#contact"
              className={classes.navLink}
            >
              <div>
                <i class="far fa-paper-plane"></i>
              </div>
              Contact
            </Button>
          </ListItem>
        </List>
        <div className="copy">
          <p> &copy; {today.getFullYear()} Suzanne Allen.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   whiteFont: PropTypes.bool
// };

export default withStyles(footerLinksStyle)(Footer);
