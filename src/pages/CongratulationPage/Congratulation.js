/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Congratulation extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <a className="navbar-brand">
            <Link to="/login">
              <b>Congratulations on successful login, Press to login</b>
            </Link>
          </a>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ml-50" />
      </div>
    );
  }
}

export default Congratulation;
