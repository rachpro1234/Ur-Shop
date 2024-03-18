import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import "./scrolltop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setVisible(true) : setVisible(false)
  })


  // extract pathname property(key) from an object
  const { pathname } = useLocation();

  // the scrollbar will scroll authomatically to the page top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // smooth scroll to the top when the btn is clicked
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrolltop">
      <a href="#" className={`${visible ? "scroll-inline" : "scroll-none"}`}>
        <FaChevronUp className="scroll-icon" onClick={bottomToTop} />
      </a>
    </div>
  );
};

export default ScrollToTop;
