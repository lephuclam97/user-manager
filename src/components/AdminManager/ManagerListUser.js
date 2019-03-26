/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ManagerListUser extends Component {
  onDelete = id => {
    if (confirm("Are you sure delete this user!!")) {
      this.props.onDelete(id);
    }
  };
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
        <td>{user.date}</td>
        <td>
          <span className={`label label-${classStatusActive}`}>
            {statusActive}
          </span>
        </td>
        <td>
          <button
            onClick={() => this.onDelete(user.id)}
            className="btn btn-danger mr-10"
          >
            Delete
          </button>

          <Link to={`users/${user.id}/edit`} className="btn btn-success">
            Edit
          </Link>
        </td>
      </tr>
    );
  }
}

export default ManagerListUser;
