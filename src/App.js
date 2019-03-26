import React, { Component } from "react";
import "./App.css";
import MenuHeader from "./components/MenuHeader";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuHeader />
          {this.showContentMenu(routes)}
          {/* <Manager /> */}
        </div>
      </Router>
    );
  }
  showContentMenu = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((routes, index) => {
        return <Route key={index} path={routes.path} component={routes.main} />;
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
