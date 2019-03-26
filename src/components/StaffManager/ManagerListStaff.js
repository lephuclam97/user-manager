/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

import { Link } from "react-router-dom";

class ManagerListStaff extends Component {
  render() {
    let { user, index } = this.props;
    let statusActive = user.action ? "activated" : "not activated";
    let classStatusActive = user.action ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.role}</td>
        <td>{user.phone}</td>
        <td>
          <span className={`label label-${classStatusActive}`}>
            {statusActive}
          </span>
        </td>
        <td>
          <Link to={`staff/${user.id}/edit`} className="btn btn-success mr-10">
            Edit
          </Link>
          <button className="btn btn-danger ">Attendance</button>
        </td>
      </tr>
    );
  }
}

export default ManagerListStaff;
