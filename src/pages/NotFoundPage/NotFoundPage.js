import React, { Component } from "react";
import "./../../App.css";
class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
              <h2>Page not found</h2>
            </div>
            <a>Homepage</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
