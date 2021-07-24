import { Component } from "react";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="alert alert-danger fw-bold py-5" role="alert">
          404 - NOT FOUND
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
