/* eslint-disable react/prop-types */
import React from "react";
import "./shop.css";
import ShopProducts from "./ShopProducts";
import { motion } from 'framer-motion';

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="top-banner">
        <div className="banner-info">
          <motion.h2
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{opacity: 0, scale: 0.5}}
          whileHover={{scale: 1.2}}
          >#stay at home</motion.h2>
          <p>shop more with exciting offers on curated brand</p>
        </div>
      </div>
      <ShopProducts />
    </div>
  );
};

export default Shop;
