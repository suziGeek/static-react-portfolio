import React from "react";
import Link from "@material-ui/core/Link";
//import Card from "@material-ui/core/Card";
//import CardHeader from "@material-ui/core/CardHeader";

//import CardFooter from "@material-ui/core/CardFooter";
import "./myprojects.css";

const MyProjectsReverse = () => {
  return (
    <div className="container-row">
      <div className="flex-lfthalf cor">
        <div className="row">
          <Link
            color="inherit"
            href="https://relaxed-wozniak-18557b.netlify.com/movies"
          >
            Movie App
          </Link>
        </div>
      </div>
      <div className="lt-blue flex-rthalf">
        <div className="row">
          <Link color="inherit" href="https://pheedme.netlify.com/">
            Drum Machine
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjectsReverse;
