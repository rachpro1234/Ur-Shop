import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useCart } from "react-use-cart";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// Header icons | imgs
import lightLogo from "../../img/others/1.png"; // light-mode logo
import darkLogo from "../../img/others/2.png"; // dark-mode logo
import { FiHome } from "react-icons/fi"; // home-section-icon
import { LuShoppingBag } from "react-icons/lu"; // shop-section-icon
import { SiBloglovin } from "react-icons/si"; // blog-section-icon
import { MdRoundaboutRight } from "react-icons/md"; // about-section-icon
import { IoMdContacts } from "react-icons/io"; // contact-section-icon
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import Signout from "../signout/Signout";

const Header = ({ changeTheme, currentTheme }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // triggering the y scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const sideNavRef = useRef(null);
  // total products items
  const { totalItems } = useCart();

  // closing the sidebar on clicking outside of it
  useEffect(() => {
    function handleOutsideClick(e) {
      if (!sideNavRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    // cleaning up the event listener when the component unmounts
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  // toggle the active class on the navbar icons
  const linkActiveHandle = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  // hide the navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    // get the prev scroll y value
    const previous = scrollY.getPrevious();
    // console.log(latest, previous)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="header"
    >
      <div className="logo-section">
        {currentTheme === "light" ? (
          <img src={lightLogo} alt="logo" className="logo-img" />
        ) : (
          <img src={darkLogo} alt="logo" className="logo-img" />
        )}
        <h1 id="logo" className="logo">
          Ur-Shop
        </h1>
      </div>
      <div className="navbar" ref={sideNavRef}>
        <ul
          className={`links ${isNavOpen ? "links-active" : "links-inactive"}`}
        >
          <li>
            <NavLink to="/" className="link" onClick={linkActiveHandle}>
              <FiHome />
            </NavLink>
            <span>home</span>
          </li>
          <li>
            <NavLink to="/shop" className="link" onClick={linkActiveHandle}>
              <LuShoppingBag />
            </NavLink>
            <span>shop</span>
          </li>
          <li>
            <NavLink to="/blog" className="link" onClick={linkActiveHandle}>
              <SiBloglovin />
            </NavLink>
            <span>blog</span>
          </li>
          <li>
            <NavLink to="/about" className="link" onClick={linkActiveHandle}>
              <MdRoundaboutRight />
            </NavLink>
            <span>about</span>
          </li>
          <li>
            <NavLink to="/contact" className="link" onClick={linkActiveHandle}>
              <IoMdContacts />
            </NavLink>
            <span>contact</span>
          </li>
          <li className="cart-bag">
            <NavLink to="/cart" className="link" onClick={linkActiveHandle}>
              <p className="total-items">{totalItems}</p>
              <FaShoppingBag />
            </NavLink>
          </li>
          <li id="close">
            <IoMdClose onClick={() => setIsNavOpen(!isNavOpen)} />
          </li>
          <div className="signing">
            <Signout />
            <div className="mode" onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <MdOutlineWbSunny className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
        </ul>
      </div>

      <div className="mobile">
        <NavLink to="/cart" onClick={linkActiveHandle} className="mobile-bag">
          <p className="total-items">{totalItems}</p>
          <FaShoppingBag />
        </NavLink>
        <span>
          <FaBars onClick={() => setIsNavOpen(!isNavOpen)} />
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
