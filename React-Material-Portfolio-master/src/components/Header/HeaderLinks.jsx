/*eslint-disable*/
import React from "react";
//import DeleteIcon from "@material-ui/icons/Delete";
//import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
//import { Apps, CloudDownload } from "@material-ui/icons";

// core components
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}

        <Button href='#mytools' color='transparent' className={classes.navLink}>
          <i className='fas fa-wrench'></i>
          My Tools
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color='transparent' href='#skills' className={classes.navLink}>
          <i className='far fa-file-code'></i>
          Skills
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color='transparent'
          href='#projects'
          className={classes.navLink}
        >
          <i className='far fa-folder'></i>
          Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color='transparent' href='#contact' className={classes.navLink}>
          <div>
            <i className='far fa-paper-plane'></i>
          </div>
          Contact
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
