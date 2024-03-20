/* eslint-disable no-unused-vars */
import React from "react";
import data from "../data/data";
import "./blog.css";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";



const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-banner">
        <div className="blog-info">
          <motion.h1
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
          >#readMore</motion.h1>
          <p>read all case studies about our products</p>
        </div>
      </div>
      <div className="blog-content">
        {data.blogData.map((item, index) => {
          return (
            <BlogCard
              num={item.num}
              img={item.img}
              title={item.title}
              desc={item.desc}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
