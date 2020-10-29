import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "components/Card/skillscard.css";
import { render } from "react-snapshot";

// import "views/Components/Sections/sectionmapcontact.css";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var hist = createBrowserHistory();

render(
  <Router history={hist}>
    <Switch>
      <Route path='/landing-page' component={LandingPage} />
      <Route path='/profile-page' component={ProfilePage} />
      <Route path='/login-page' component={LoginPage} />
      <Route path='/' component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
