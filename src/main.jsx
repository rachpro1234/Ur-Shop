import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Blog from "./components/blog/Blog.jsx";
import Cart from "./components/cart/Cart.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Shop from "./components/shop/Shop.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";
import Signout from "./components/signout/Signout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "react-use-cart";

// code splitting

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
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
      <RouterProvider router={router} />
  </CartProvider>
);
