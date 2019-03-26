/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React, { Component } from "react";
import Search from "./Search";
import { Route, Link } from "react-router-dom";

const menus = [
  { name: "Home", icon: "home", exact: "false", to: "/" },

  { name: "Login", icon: "sign-in", exact: "false", to: "/login" }
];

const MenuLink = ({ label, to, icon, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">
              <i className={`fa fa-${icon}`} />
              <span>{label}</span>
            </Link>
          </li>
        );
      }}
    />
  );
};

class MenuHeader extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-expand-xl navbar-dark">
          <div className="navbar-header d-flex col">
            <Link to="/">
              <a className="navbar-brand">
                <i className="fa fa-cube" />
                The<b>Coffee</b>
              </a>
            </Link>
            <button
              type="button"
              data-target="#navbarCollapse"
              data-toggle="collapse"
              className="navbar-toggle navbar-toggler ml-auto"
            >
              <span className="navbar-toggler-icon" />
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          <div
            id="navbarCollapse"
            className="collapse navbar-collapse justify-content-start"
          >
            <ul className="nav navbar-nav navbar-right ml-auto">
              <li className="nav-item">
                <Search />
              </li>
              {this.showMenu(menus)}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            exact={menu.exact}
            label={menu.name}
            to={menu.to}
            icon={menu.icon}
          />
        );
      });
    }
    return result;
  };
}

export default MenuHeader;
