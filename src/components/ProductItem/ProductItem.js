import { Component } from "react";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    console.log(product.status);
    var statusName = product.status ? "stocking" : "out of stocking";
    console.log(statusName);
    var statusClass = product.status ? "danger" : "secondary";
    console.log(statusClass);

    return (
      <tr>
        <th>{index + 1}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span class={`badge bg-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          {" "}
          <button type="button" className="btn btn-sm btn-outline-danger">
            <i className="far fa-user-edit me-2"></i>Update
          </button>
          &nbsp;
          <button type="button" className="btn btn-sm btn-danger">
            <i className="far fa-trash me-2"></i>Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
