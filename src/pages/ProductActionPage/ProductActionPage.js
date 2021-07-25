import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequestAPI,
  actGetProductRequestAPI,
  actUpdateProductRequestAPI,
} from "./../../actions/index";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "Test 1",
      txtPrice: "123",
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
    var { id, txtName, txtPrice, chkStatus } = this.state;
    var { history, fetchAddProduct, fetchUpdateProduct } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkStatus,
    };
    event.preventDefault();
    if (id) {
      console.log("update ban oi!");
      fetchUpdateProduct(product);
    } else {
      fetchAddProduct(product);
      console.log(product);
    }
    history.goBack();
  };
  componentDidMount() {
    console.log("componentDidMount");

    var { match, fetchEditProduct } = this.props;
    if (match) {
      var id = match.params.id;
      fetchEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (nextProps && nextProps.itemEditing) {
      console.log(nextProps);
      var { itemEditing } = nextProps;
      console.log(itemEditing);
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkStatus: itemEditing.status,
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
                value={txtName || ""}
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
                value={txtPrice || ""}
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
                value={chkStatus || ""}
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

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
//Save on store
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAddProduct: (product) => {
      dispatch(actAddProductRequestAPI(product));
    },
    fetchEditProduct: (id) => {
      dispatch(actGetProductRequestAPI(id));
    },
    fetchUpdateProduct: (product) => {
      dispatch(actUpdateProductRequestAPI(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
