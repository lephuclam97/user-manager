/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ManagerList from "./../../components/StaffManager/ManagerList";
import ManagerListStaff from "./../../components/StaffManager/ManagerListStaff";
import { connect } from "react-redux";
import { actFetchOnlyStaffRequest } from "./../../actions/index";

class StaffPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllOnlyStaff();
  }

  render() {
    let { users } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a className="navbar-brand">
              Attendance<b>Manager</b>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ManagerList>{this.showListUser(users)}</ManagerList>
          </div>
        </div>
      </div>
    );
  }

  showListUser(users) {
    let result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return (
          <ManagerListStaff
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
    fetchAllOnlyStaff: () => {
      dispatch(actFetchOnlyStaffRequest());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffPage);
