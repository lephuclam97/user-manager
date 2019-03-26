/* eslint-disable react/prop-types */
import React, { Component } from "react";

class ManagerList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-primary mt-10">
          <div className="panel-heading">
            <h3 className="panel-title">User Manager List</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>Action</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>{this.props.children}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerList;
