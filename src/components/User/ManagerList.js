import React, { Component } from "react";

class ManagerList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="row">{this.props.children}</div>
      </div>
    );
  }
}

export default ManagerList;
