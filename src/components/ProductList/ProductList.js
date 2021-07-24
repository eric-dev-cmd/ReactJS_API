import { Component } from "react";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductList extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="card-header text-center bg-danger text-uppercase text-white fw-bold">
          Product Management
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Controls</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
