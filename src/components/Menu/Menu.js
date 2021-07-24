import { Component } from "react";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Link, Route } from "react-router-dom";
const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product Management",
    to: "/products",
    exact: false,
  },
];
// console.log(menus);

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        // console.log(active);
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className={`nav-link ${active}`} aria-current="page">
              {label}
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};

class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand text-danger fw-bold">API</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a> */}
                {/* <Link to="/" className="nav-link active"> 
                    Home
                  </Link>*/}
                {/* </li> */}
                {/* <li className="nav-item"> */}
                {/* <Link to="/products" className="nav-link">
                    Product Management
                  </Link> */}

                {/* <a className="nav-link">Product Management</a>
                </li> */}
                {this.showMenuLinks(menus)}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  showMenuLinks = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}

export default Menu;
