import { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkStatus: false,
    };
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onHandleSubmit = (event) => {
    var { txtName, txtPrice, chkStatus } = this.state;
    var { history } = this.props;
    event.preventDefault();
    callApi("products", "POST", {
      name: txtName,
      price: txtPrice,
      chkStatus: chkStatus,
    }).then((res) => {
      console.log(res.data);
      history.goBack();
    });
  };
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then((res) => {
        console.log(res.data);
        var { data } = res;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkStatus: data.chkStatus,
        });
      });
    }
  }
  render() {
    var { txtName, txtPrice, chkStatus } = this.state;

    return (
      <div className="row my-3">
        <div className="col-12">
          <h3 className="fw-bold text-uppercase my-3">Form Add</h3>
        </div>
        <div className="col-3"></div>
        <div className="col-6 border py-4 px-3 my-3">
          <form onSubmit={this.onHandleSubmit}>
            <div className="group">
              <input
                type="text"
                name="txtName"
                value={txtName}
                onChange={this.onHandleChange}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="fs-14">Name</label>
            </div>

            <div className="group">
              <input
                type="number"
                name="txtPrice"
                value={txtPrice}
                onChange={this.onHandleChange}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="fs-14">Price</label>
            </div>
            <div className="group">
              <input
                type="checkbox"
                name="chkStatus"
                className="wskCheckbox status-add "
                value={chkStatus}
                onChange={this.onHandleChange}
                checked={chkStatus}
              />
              <span className="badge bg-danger status-span">stock</span>
              <label className="wskLabel" style={{ color: "#999" }}>
                Status
              </label>
            </div>
            <div className="row">
              <div className="col-6">
                {" "}
                <Link
                  to="/products"
                  className="btn btn-success form-control form-control-sm"
                >
                  Back
                </Link>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="btn btn-danger form-control form-control-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default ProductActionPage;
