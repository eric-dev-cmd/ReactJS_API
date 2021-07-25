import { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "./../../components/ProductList/ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actDeleteProductRequestAPI,
  actFetchProductsRequestAPI,
} from "./../../actions/index";

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
    fetchAllProducts();
  }
  onHandleDelete = (id) => {
    this.props.fetchDeleteProduct(id);
  };
  fetchUpdateStatus = () => {
    this.props.fetchUpdateStatus();
  };
  render() {
    var { products } = this.props;
    // console.log(products);
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
    status: state.status,
  };
};
//Save on store
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequestAPI());
    },
    fetchDeleteProduct: (id) => {
      dispatch(actDeleteProductRequestAPI(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
