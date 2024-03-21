import React from "react";
import bannerImg from "../img/banner/b2.jpg"

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <img src={bannerImg} alt="" />
      <div className="banner-info">
        <h4>repair services</h4>
        <h2>
          up to <span>70% off</span> all t-shirt & accessories
        </h2>
        <button className="normal">explore more</button>
      </div>
    </section>
  );
};

export default Banner;
