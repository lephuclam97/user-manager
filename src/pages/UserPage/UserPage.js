/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import ManagerList from "./../../components/UserManager/ManagerList";
import ManagerListUser from "./../../components/UserManager/ManagerListUser";
import { Link } from "react-router-dom";
import { actFetchOnlyUsersRequest } from "./../../actions/index";
class UserPage extends Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  render() {
    let { users } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" />
          <Link to="/staff-manager" className="btn btn-info userColor">
            Attendance
          </Link>
          <h4 className="mt-30">
            <b>Users({users.length})</b>
          </h4>

          {/* test user list */}

          <ManagerList>{this.showListUser(users)}</ManagerList>
        </div>
      </div>
    );
  }

  showListUser(users) {
    let result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return <ManagerListUser key={index} user={user} index={index} />;
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
      dispatch(actFetchOnlyUsersRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
