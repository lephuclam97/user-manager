/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class ManagerListUser extends Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    let { user, index } = this.props;
    return (
      <Link exact to={`/profile/${user.id}/edit`}>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 backgroundSet">
          <div className="user-list">
            <div className="user-avatar">
              <div className="user-avatar-circle">
                <span id="user-spanName">
                  <p>{user.name[0]}</p>
                </span>
              </div>
            </div>
            <div className="user-name">
              <b>
                <center>{user.name}</center>
              </b>
            </div>
            <div className="user-role">
              <center>{user.role},Sensitive data</center>
            </div>
            <center>
              <b id="user-date-span">Joining date</b>
            </center>
            <div className="user-time">
              <center> March 21, 2019 6:06 PM</center>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ManagerListUser;
