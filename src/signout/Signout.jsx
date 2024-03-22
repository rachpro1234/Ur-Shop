import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./signout.css";

const Signout = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        // signed out
        setAuthenticatedUser(null);
      }
    });
  }, []);

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signup");
        // alert("user signed out")
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      {authenticatedUser === null ? (
        <div className="sign-btns">
          <button>
            <NavLink className="sign-up" to="/signup">
              create account
            </NavLink>
          </button>
          <NavLink to="/login" className="login">
            login
          </NavLink>
        </div>
      ) : (
        <NavLink to="/home" className="login" onClick={userSignout}>
          sign-out
        </NavLink>
      )}
    </div>
  );
};

export default Signout;
