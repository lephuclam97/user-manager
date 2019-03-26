/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      checkcorrect: ""
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
    let { txtUsername, txtPassword } = this.state;

    callApi("login-admin", "GET", null).then(res => {
      let data = res.data;
      if (this.findAccountAdmin(data) === true) {
        history.push("/user-manager");
      }
    });

    callApi("users", "GET", null).then(res => {
      let users = res.data;
      if (this.findAccountUser(users) === true) {
        history.push("/user");
      }
    });
  };
  onClick = e => {
    this.setState({
      checkcorrect: "-login"
    });
  };

  findAccountAdmin = accounts => {
    let { txtUsername, txtPassword } = this.state;
    let result = false;

    if (
      accounts[0].username === txtUsername &&
      accounts[0].password === txtPassword
    ) {
      result = true;
      return result;
    }
  };

  findAccountUser = accounts => {
    let { txtUsername, txtPassword } = this.state;
    let result = false;
    accounts.forEach(account => {
      if (
        account.username === txtUsername &&
        account.password === txtPassword &&
        account.role === "User"
      ) {
        result = true;
        return result;
      }
    });
    return result;
  };

  render() {
    let { txtUsername, txtPassword, checkcorrect } = this.state;
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <a className="navbar-brand">
            Login<b>Now</b>
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
            <div className={`correct${checkcorrect}`}>
              <p>Username or password is not correct</p>
            </div>
            <button
              type="submit"
              onClick={this.onClick}
              exact
              className="btn btn-danger mr-10 clear "
            >
              Login
            </button>
            <Link to="/register" exact>
              <div className="div-register">
                <p>Not registered yet. Register Now</p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
