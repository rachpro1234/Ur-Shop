import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./login.css";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import signinCover from "../img/others/signin-cover.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
    isClicked: false,
  });

  // to navigate the signed in users authomatically to the home page
  const navigate = useNavigate();

  // tracking the changes in every input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignInFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  };

  const [icon, setIcon] = useState(IoEyeOff);
  const [type, setType] = useState("password");
  const [isVisible, setIsVisible] = useState(false);

  const togglePasswordVisibility = () => {
    if (!isVisible) {
      setIsVisible(true);
      setType("text");
      setIcon(IoEye);
    } else {
      setIsVisible(false);
      setType("password");
      setIcon(IoEyeOff);
    }
  };

  const signInId = useId();

  // submitting the form
  const formSignInSubmit = (e) => {
    e.preventDefault();
    // console.log(signInFormData);
    signInWithEmailAndPassword(
      auth,
      signInFormData.email,
      signInFormData.password
    )
      .then((userCredential) => {
        const user = userCredential.user; // signed in
        navigate("/");
        // console.log(user);
        alert("successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "account not found";
        // console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="signin-container">
      <img src={signinCover} alt="" />
      <form className="signin-form" onSubmit={formSignInSubmit}>
        <div className="form-title">
          <h1>sign-in</h1>
        </div>
        <label htmlFor={signInId + "-username"}>
          <FaUser className="form-icon" />
          <div className="input-info">
            <input
              type="text"
              id={signInId + "-email"}
              placeholder="email..."
              value={signInFormData.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </label>
        <label htmlFor={signInId + "-password"}>
          <RiLockPasswordFill className="form-icon" />
          <div className="input-info">
            <input
              type={type}
              id={signInId + "-password"}
              placeholder="password..."
              value={signInFormData.passcode}
              onChange={handleChange}
              name="password"
              required
            />
          </div>
          <p className="show-password" onClick={togglePasswordVisibility}>
            {icon}
          </p>
        </label>
        <div className="terms">
          <input
            onChange={handleChange}
            id={signInId + "-isclicked"}
            type="checkbox"
            checked={signInFormData.isClicked}
            name="isClicked"
          />
          <label htmlFor="isClicked">remember me!</label>
        </div>
        <button className="submit-btn">login</button>
        <div className="signup-link">
          <p>still have no account ?</p>
          <Link to="/signup" className="signup">
            sign-up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
