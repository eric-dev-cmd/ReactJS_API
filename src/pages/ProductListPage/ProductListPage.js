import { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "./../../components/ProductList/ProductList";
import { connect } from "react-redux";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actFetchProducts } from "./../../actions/index";
import products from "../../reducers/products";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  // Lifecycle goi ngay khi component render lan dau tien
  componentDidMount() {
    var { fetchAllProducts } = this.props;
    callApi("products", "GET", null).then((res) => {
      fetchAllProducts(res.data);
    });
  }
  onHandleDelete = (id) => {
    var { products } = this.state;
    console.log(id);
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      console.log(res);
      if (res.status === 200) {
        var index = this.findIndexById(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products,
          });
        }
      }
    });
  };
  findIndexById = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };
  render() {
    var { products } = this.props;
    console.log(products);
    // console.log("render");
    // var { products } = this.props;

    return (
      <div>
        <div className="row my-3 py-2">
          <div className="col-6">
            <Link
              to="product/add"
              type="button"
              className="btn btn-danger btn-sm float-start fw-bold"
              style={{ width: "160px" }}
            >
              <i className="far fa-user-plus"></i> Add product
            </Link>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row my-2 py-2">
          <div className="col-12">
            {/* PRODUCT LIST */}
            <ProductList>
              {/* Take ProductItem */}
              {this.showProductItems(products)}
            </ProductList>
          </div>
        </div>
      </div>
    );
  }
  showProductItems = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            index={index}
            key={index}
            product={product}
            onHandleDelete={this.onHandleDelete}
          ></ProductItem>
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
//Save on store
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
