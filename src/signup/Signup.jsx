import React, { useState, useId } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "./signup.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../firebase";

const Signup = () => {
  const [signUpFormData, setsignUpFormData] = useState({
    username: "",
    email: "",
    password: "",
    isClicked: false,
    showPassword: false,
  });

  // to navigate the signed in users authomatically to the home page
  const navigate = useNavigate();

  // connect users signup to firebase
  // const submit = async (e) => {
  //   e.preventDefault()
  //    await createUserWithEmailAndPassword(auth, signUpFormData.email, signUpFormData.password)
  //     .then((userCredential) => {
  //        const user = userCredential.user;
  //        navigate("/login")
  //        console.log(user)
  //        alert("successfully created account")
  //     }) 
  //   .catch ((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message
  //     console.log(errorCode, errorMessage)
  //     alert(errorMessage)
  //   })
  // }


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setsignUpFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(IoEyeOff)
  const [isVisible, setIsVisible] = useState(false);

  // toggle the password visibility when clicking on the eye icon
  const togglePasswordVisibility = () => {
    if (!isVisible) {
      setIsVisible(true)
      setType('text')
      setIcon(IoEye)
    } else {
      setIsVisible(false)
      setType('password')
      setIcon(IoEyeOff)
    }
  }

  // to give specific id to every input field
  const signUpId = useId();

  // submitting the form data to server side with firebase
  const formSignUpSubmit = (e) => {
    e.preventDefault();
    // console.log(signUpFormData);
     createUserWithEmailAndPassword(auth, signUpFormData.email, signUpFormData.password)
      .then((userCredential) => {
         const user = userCredential.user;
         navigate("/login")
         console.log(user)
         alert("successfully created account")
      }) 
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      alert(errorMessage)
    })
  };

  // if the terms box isn't checked don't validate the form
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={formSignUpSubmit}>
        <div className="form-title">
          <h1>sign-up</h1>
        </div>
        <label htmlFor={signUpId + "-username"}>
          <FaUser className="form-icon" />
          <div className="input-info">
            <input
              type="text"
              id={signUpId + "-username"}
              placeholder="Full-Name..."
              value={signUpFormData.username}
              onChange={handleChange}
              name="username"
              required
            />
          </div>
        </label>
        <label htmlFor={signUpId + "-email"}>
          <MdEmail className="form-icon" />
          <div className="input-info">
            <input
              type="email"
              id={signUpId + "-email"}
              placeholder="email..."
              value={signUpFormData.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </label>
        <label htmlFor={signUpId + "-password"}>
          <RiLockPasswordFill className="form-icon" />
          <div className="input-info">
            <input
              type={type}
              id={signUpId + "-password"}
              placeholder="password..."
              value={signUpFormData.password}
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          <p 
          className="show-password"
          onClick={togglePasswordVisibility}
          >
            {icon}
          </p>
        </label>
        <div className="terms">
          <input
            // onClick={() => setsignUpFormData(!signUpFormData.isClicked)}
            onChange={handleChange}
            id={signUpId + "-isclicked"}
            type="checkbox"
            checked={signUpFormData.isClicked}
            name="isClicked"
          />
          <label htmlFor="isClicked">I want to join the newsletter</label>
        </div>
        <button className="submit-btn">sign-up</button>
        <div className="signin-link">
          <p>already have an account ?</p>
          <Link to="/login" className="signin">
            sign-In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
