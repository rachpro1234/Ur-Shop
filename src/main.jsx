import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./home/Home.jsx"
// import Header from "./header/Header.jsx"
// import Blog from "./blog/Blog.jsx"
// import Cart from "./cart/Cart.jsx"
// import About from "./about/About.jsx"
// import Contact from "./contact/Contact.jsx"
// import Shop from "./shop/Shop.jsx"
// import Signup from "./signup/Signup.jsx"
// import Login from "./login/Login.jsx"
// import Signout from "./signout/Signout.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "react-use-cart";



// code splitting
const LazyHeader = React.lazy(() => import("./header/Header.jsx"))
const LazyBlog= React.lazy(() => import("./blog/Blog.jsx"))
const LazyCart = React.lazy(() => import("./cart/Cart.jsx"))
const LazyAbout = React.lazy(() => import("./about/About.jsx"))
const LazyContact = React.lazy(() => import("./contact/Contact.jsx")) 
const LazyShop = React.lazy(() => import("./shop/Shop.jsx")) 
const LazySignup = React.lazy(() => import("./signup/Signup.jsx")) 
const LazyLogin = React.lazy(() => import("./login/Login.jsx")) 
const LazySignout = React.lazy(() => import("./signout/Signout.jsx")) 










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
          element: <LazyHeader />,
        },
        {
          path: "/blog",
          element: <LazyBlog />,
        },
        {
          path: "/cart",
          element: <LazyCart />,
        },
        {
          path: "/contact",
          element: <LazyContact />,
        },
        {
          path: "/shop",
          element: <LazyShop />,
        },
        {
          path: "/about",
          element: <LazyAbout />,
        },
        {
          path: "/signup",
          element: <LazySignup />,
        },
        {
          path: "/login",
          element: <LazyLogin />,
        },
        {
          path: "/signout",
          element: <LazySignout />,
        },
      ],
    },
  ],
  // { basename: import.meta.env.BASE_URL }
  // basename={process.env.PUBLIC_URL}
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </React.Suspense>
  </CartProvider>
);




