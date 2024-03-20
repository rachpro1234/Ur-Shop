import React from "react";
import "./contact.css";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
// ICONS
import { GrLocationPin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
// IMAGES
import person1 from "../img/people/1.png";
import person2 from "../img/people/2.png";
import person3 from "../img/people/3.png";

const Location = {
  address: "Konstantin - Furstenwalde/Spree",
  lat: 52.360438,
  lng: 14.059511,
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-banner">
        <div className="banner-info">
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
          >#connectWithUs</motion.h1>
          <p>leave a message. we love to hear from you</p>
        </div>
      </div>
      <div className="contact-info">
        <div className="our-info">
          <div className="top-info">
            <p>get in touch</p>
            <h2>visit one of our agency locations or contact us today</h2>
          </div>
          <div className="bottom-info">
            <span>head office</span>
            <ul>
              <li>
                <GrLocationPin className="icon locate" />
                Fürstenwalde | Spree
              </li>
              <li>
                <MdEmail className="icon" /> Fürstenwalde@gmail.de
              </li>
              <li>
                <BsFillTelephoneFill className="icon" /> +49322382916
              </li>
              <li>
                <FaClock className="icon" /> monday to saturday 9:00 to 16:00
              </li>
            </ul>
          </div>
        </div>
        <div className="our-location">
          <GoogleMap location={Location} zoomLevel={11} />
        </div>
      </div>

      <div className="contact-field">
        <div className="contact-input">
          <p>leave a message</p>
          <h4>
            we love to hear from you{" "}
            <FaRegFaceSmileBeam className="face-smile" />
          </h4>
          <ContactForm />
        </div>
        <div className="contact-personal">
              <div className="contact-per">
                <img src={person1} alt="image" width="70px" height="70px" />
                <div className="person-info">
                  <h3>thomas meier</h3>
                  <p>senior product manager</p>
                  <p><small>phone :</small> +4936737724</p>
                  <p><small>email :</small> thomasmeier@gmail.de</p>
                </div>
              </div>
              <div className="contact-per">
                <img src={person2} alt="image" width="70px" height="70px" />
                <div className="person-info">
                  <h3>albert schmidt</h3>
                  <p>senior marketing manager</p>
                  <p><small>phone :</small> +4936722912</p>
                  <p><small>email :</small> albertschmidt@gmail.de</p>
                </div>
              </div>
              <div className="contact-per">
                <img src={person3} alt="image" width="70px" height="70px" />
                <div className="person-info">
                  <h3>anatalia dorla</h3>
                  <p>senior export manager</p>
                  <p><small>phone :</small> +49367236723</p>
                  <p><small>email :</small> anataliadorla@gmail.de</p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
