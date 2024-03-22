import React from "react";
import { motion } from "framer-motion";

const TopSection = () => {
  
  return (
    <section id="home">
      <div className="home-content">
        <div className="home-elements">
          <h4 className="select-none">trade-in-offer</h4>
          <h2 className="select-none">
            super values <span>deals</span>
          </h2>
          <motion.h1
            className="select-none"
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 5,
              delay: 1,
              ease: [0.5, 0.71, 1, 1.5],
              yoyo: Infinity,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            on all products
          </motion.h1>
          <p className="select-none">
            save more with coupons & up to <span>70% off!</span>
          </p>
          <button>shop now</button>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
