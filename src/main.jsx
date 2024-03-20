import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./home/Home.jsx";
// import Header from "./header/Header.jsx";
// import Blog from "./blog/Blog.jsx";
// import Cart from "./cart/Cart.jsx";
// import About from "./about/About.jsx";
// import Contact from "./contact/Contact.jsx";
// import Shop from "./shop/Shop.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Signup from "./signup/Signup.jsx";
// import Login from "./login/Login.jsx";
import { CartProvider } from "react-use-cart";
// import Signout from "./signout/Signout.jsx";

// code splitting
const Header = lazy(() => import("./header/Header.jsx"));
const Blog = lazy(() => import("./blog/Blog.jsx"));
const Cart = lazy(() => import("./cart/Cart.jsx"));
const About = lazy(() => import("./about/About.jsx"));
const Contact = lazy(() => import("./contact/Contact.jsx"));
const Shop = lazy(() => import("./shop/Shop.jsx"));
const Signup = lazy(() => import("./Signup/Signup.jsx"));
const Login = lazy(() => import("./login/Login.jsx"));
const Signout = lazy(() => import("./signout/Signout.jsx"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/header",
          element: <Header />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signout",
          element: <Signout />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
  // basename={process.env.PUBLIC_URL}
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
      <RouterProvider router={router} />
  </CartProvider>
);




