import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/Home/HomePage";
import ProductsPage from "../Pages/Products/ProductsPage";
import About from "../Pages/About/About";
import ShopPage from "../Pages/Products/ShopPage";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";

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
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
