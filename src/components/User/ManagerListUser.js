import React, { Component } from "react";

class ManagerListUser extends Component {
  render() {
    let { user, index } = this.props;
    return (
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 backgroundSet">
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
            <b>Joining date</b>
          </center>
          <div className="user-time">
            <center> March 21, 2019 6:06 PM</center>
          </div>
        </div>
      </div>
    );
  }
}

export default ManagerListUser;
