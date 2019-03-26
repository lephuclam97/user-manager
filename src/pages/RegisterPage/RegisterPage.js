/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtCurrentPassword: "",
      checkPassword: "",
      checkUsername: ""
    };
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

    callApi("users", "GET", null).then(res => {
      let data = res.data;
      if (
        this.findAccountSame(data) === false &&
        txtCurrentPassword === txtPassword
      ) {
        callApi("users", "POST", {
          name: "",
          age: "",
          date: "",
          role: "Customer",
          action: "",
          username: txtUsername,
          password: txtPassword
        }).then(res => {
          history.push("/congratulation");
        });
      } else if (this.findAccountSame(data) === true) {
        this.setState({
          checkUsername: "username"
        });
      }
    });
  };
  onClick = e => {
    let { txtUsername, txtPassword, txtCurrentPassword } = this.state;
    if (txtPassword !== txtCurrentPassword) {
      this.setState({
        checkPassword: "current"
      });
    } else {
      this.setState({
        checkPassword: ""
      });
    }
  };

  findAccountSame = accounts => {
    let { txtUsername } = this.state;
    let result = false;
    accounts.forEach(account => {
      if (account.username === txtUsername) {
        result = true;
        return result;
      }
    });

    return result;
  };

  render() {
    let { checkPassword, checkUsername } = this.state;
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <a className="navbar-brand">
            Register<b>Now</b>
          </a>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ml-50">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                name="txtUsername"
                onChange={this.onChange}
              />
              <p id={`p-${checkUsername}`}>This usename already exists</p>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="txtPassword"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="text"
                className="form-control"
                name="txtCurrentPassword"
                onChange={this.onChange}
              />
              <p id={`p-${checkPassword}`}>Current Password incorrect</p>
            </div>

            <button
              type="submit"
              onClick={this.onClick}
              exact
              className="btn btn-danger mr-10 clear "
            >
              Register
            </button>
            <Link to="/login" exact>
              <div className="div-register">
                <p>Already registered. Go to Login</p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
