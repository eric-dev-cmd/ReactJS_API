import { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
// import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* MENU */}
          <Menu />
          <div className="container">
            {/* CONTENT */}
            <Switch>{this.showContentMenus(routes)}</Switch>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    console.log(routes);
    var result = "";
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
