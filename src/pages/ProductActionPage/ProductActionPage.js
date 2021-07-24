import { Component } from "react";

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductActionPage extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="col-12">
          <h3 className="fw-bold text-uppercase my-3">Form Add</h3>
        </div>
        <div className="col-3"></div>
        <div className="col-6 border py-4 px-3 my-3">
          <form>
            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="fs-14">Name</label>
            </div>

            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="fs-14">Price</label>
            </div>
            <div className="group">
              <input type="checkbox" className="wskCheckbox status-add " />
              <span className="badge bg-danger status-span">stock</span>
              <label className="wskLabel" style={{ color: "#999" }}>
                Status
              </label>
            </div>
            <div className="group">
              <button
                type="button"
                class="btn btn-dark form-control form-control-sm"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default ProductActionPage;
