import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
//import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import "./hovercard.css";

import HoverCard from "components/Card/HoverCard";

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345
//   }
// });

export default function ProjectCard() {
  //const classes = useStyles();

  return (
    <div className="container-row">
      <div className="row">
        <HoverCard />
      </div>
    </div>
  );
}
