import React from "react";
import "./mytools.css";

const MyTools = () => {
  return (
    <React.Fragment>
      <div className="resources-two red">
        <h3>My Tools.</h3>
      </div>
      <div className="resources red">
        <div className="icon">
          <i className="fab fa-html5"></i>
        </div>
        <div className="icon">
          <i className="fab fa-react"></i>
        </div>
        <div className="icon">
          <i className="fab fa-js-square"></i>
        </div>
        <div className="icon">
          <i className="fab fa-gulp"></i>
        </div>
        <div className="icon">
          <i className="fab fa-github-square"></i>
        </div>
        <div className="icon">
          <i className="fab fa-node"></i>
        </div>
        <div className="icon">
          <i className="fab fa-css3-alt"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyTools;
