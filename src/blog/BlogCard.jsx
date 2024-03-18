import React from "react";

const BlogCard = (props) => {
  return (
      <div className="blog-elements">
        <div className="left-side">
          <span>{props.num}</span>
          <img src={props.img} alt="img" />
        </div>
        <div className="right-side">
          <h1>{props.title}</h1>
          <p>
            {props.desc}
          </p>
          <span>{props.text}</span>
        </div>
      </div>
  );
};

export default BlogCard;
