/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actGetUsersRequest } from "./../../actions/index";
import { connect } from "react-redux";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtAge: "",
      txtRole: "",
      txtPhone: ""
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      console.log(id + "day la id ne");
      this.props.onEditUsers(id);
      callApi(`users/${id}`, "GET", null).then(res => {
        let data = res.data;
        console.log(data);
        this.setState({
          id: data.id,
          txtFullname: data.name,
          txtAge: data.age,
          txtRole: data.role,
          txtPhone: data.phone
        });
      });
    }
  }
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    e.preventDefault();
    let { history } = this.props;
    let { txtUsername, txtPassword, txtCurrentPassword } = this.state;
  };

  render() {
    let { txtFullname, txtAge, txtPhone, txtRole } = this.state;
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <a className="navbar-brand">
            My<b>Profile</b>
          </a>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ml-50">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>FullName</label>
              <input
                type="text"
                className="form-control"
                name="txtFullname"
                onChange={this.onChange}
                value={txtFullname}
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                name="txtAge"
                onChange={this.onChange}
                value={txtAge}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                className="form-control"
                name="txtRole"
                onChange={this.onChange}
                value={txtRole}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="txtPhone"
                onChange={this.onChange}
                value={txtPhone}
              />
            </div>

            <button
              type="submit"
              onClick={this.onClick}
              exact
              className="btn btn-success mr-10 clear "
            >
              Save
            </button>
            <Link to="/user" className="btn btn-danger mr-10 clear ">
              Back
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditUsers: id => {
      dispatch(actGetUsersRequest(id));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ProfilePage);
