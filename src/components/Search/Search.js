import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search here..."
            />
            <span className="input-group-addon">
              <i className="material-icons">&#xE8B6;</i>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
