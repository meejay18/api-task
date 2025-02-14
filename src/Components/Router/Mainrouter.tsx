import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/Home/HomePage";
import ProductsPage from "../Pages/Products/ProductsPage";
import About from "../Pages/About/About";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
