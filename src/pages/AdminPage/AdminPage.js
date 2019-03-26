/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ManagerList from "./../../components/AdminManager/ManagerList";
import ManagerListUser from "./../../components/AdminManager/ManagerListUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchUsersRequest,
  actDeleteUsersRequest
} from "./../../actions/index";

class AdminPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  onDelete = id => {
    this.props.onDeleteUser(id);
  };

  render() {
    let { users } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" />
          <Link to="/user-managers/add" exact className="btn btn-info">
            Add New User
          </Link>
          <ManagerList>{this.showListUser(users)}</ManagerList>
        </div>
      </div>
    );
  }

  showListUser(users) {
    let result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return (
          <ManagerListUser
            key={index}
            user={user}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllUsers: () => {
      dispatch(actFetchUsersRequest());
    },
    onDeleteUser: id => {
      dispatch(actDeleteUsersRequest(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
