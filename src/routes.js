import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: () => <ProductActionPage />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
