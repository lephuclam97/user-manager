/* eslint-disable react/prop-types */
import React, { Component } from "react";

class ManagerList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}

export default ManagerList;
