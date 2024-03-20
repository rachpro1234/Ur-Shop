import React from "react";
import "./about.css";
import img from "../img/about/a6.jpg";
import VideoComponent from "./VideoComponent";
import { motion } from "framer-motion";



const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="about-info">
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
          >#knowUsBetter</motion.h1>
          <p>know who are we, what we do and how we do</p>
        </div>
      </div>
      <div className="about-us">
        <div className="about-us-img">
          <img src={img} alt="photo" />
        </div>
        <div className="about-us-desc">
          <h1>
            who we <span>are</span> ?
          </h1>
          <p>
            at ur-shop, we are passionate about fashion and believe that
            clothing is an experience of ones individuality. Our mission is to
            empower individuals to embrace thier unique style and feel confident
            in what they wear. We curate a diverse rang of clothing that
            combines comfort, quality, and the latest trends.Whether you are
            seeking casual everyday wear, elegant evening outfit, or sporty
            active wear, we have got you covered.We aspire to make fashion
            accessible to all while promoting self-expression.inclusivty and
            environmental responsibility. Join us in celebrating the art of
            self-fashioning with ur-Shop. 
            inventore aspernatur asperiores quam odit ipsum quis
            dolores laborum illum nobis perspiciatis in nam quasi itaque. Culpa
            officia nobis, obcaecati eligendi quae, corrupti nostrum dignissimos
            iure impedit, voluptatibus architecto voluptas ipsum minima
            necessitatibus soluta quaerat veritatis earum. Odit provident eum
            ratione natus harum? Omnis dolores, doloribus quis assumenda dolorum 
          </p>
        </div>
      </div>
      <div className="our-app">
        <h1>
          download our <span>app</span>
        </h1>
            <VideoComponent />
      </div>
    </div>
  );
}

export default About;
