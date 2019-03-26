/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actGetUsersRequest } from "./../../actions/index";
import { connect } from "react-redux";
class UserActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtAge: "",
      txtRole: "",
      txtDate: "",
      txtPhone: "",
      checkAction: ""
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;

      this.props.onEditUsers(id);
      callApi(`users/${id}`, "GET", null).then(res => {
        let data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtAge: data.age,
          txtRole: data.role,
          txtDate: data.date,
          txtPhone: data.phone,
          checkAction: data.action
        });
      });
    }
  }
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    let { history } = this.props;
    let {
      id,
      txtAge,
      txtDate,
      txtName,
      txtRole,
      txtPhone,
      checkAction
    } = this.state;

    e.preventDefault();

    if (id) {
      callApi(`users/${id}`, "PUT", {
        name: txtName,
        age: txtAge,
        date: txtDate,
        role: txtRole,
        phone: txtPhone,
        action: checkAction
      }).then(res => {
        history.push("/staff-manager");
      });
    }
  };

  render() {
    let {
      txtAge,
      txtDate,
      txtName,
      txtRole,
      txtPhone,
      checkAction
    } = this.state;

    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ml-50">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              name="txtAge"
              value={txtAge}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              className="form-control"
              name="txtRole"
              value={txtRole}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Joining date</label>
            <input
              type="text"
              className="form-control"
              name="txtDate"
              value={txtDate}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              name="txtPhone"
              value={txtPhone}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Action</label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="checkAction"
                value={checkAction}
                onChange={this.onChange}
              />
              Active
            </label>
          </div>
          <Link to="/user-manager" className="btn btn-danger mr-10">
            Back
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
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
)(UserActionPage);
