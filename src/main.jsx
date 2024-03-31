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
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  createRoutesFromElements,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";

// code splitting

// const router = createBrowserRouter(
  // createRoutesFromElement
//   createRoutesFromChildren(
//     <Route path="/" element={<App />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/header" element={<Header />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/about"element={<About />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signout" element={<Signout />} />
//     </Route>
//   )
// );

const router = createHashRouter(
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
    { basename: import.meta.env.BASE_URL }
  ],
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
