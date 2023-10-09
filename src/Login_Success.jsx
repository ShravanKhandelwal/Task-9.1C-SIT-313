// import Input from "./Input";
// import Button from "./Button";
import ContactPage from "./Login_Success";
import "./Header.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import {
//   signInWithGooglePopup,
//   createuserdocfromAuth,
//   userDocRef,
//   signinAuthUserWithEmailAndPassword,
// } from "./utils/firebase";

function Login_Success() {
  const nav = useNavigate();

  const handleSignout = () => {
    try {
      // nav("/");
      nav("/");
    } catch (error) {
      console.error("Error during signout:", error);
    }
  };

  return (
    <div className="header">
      <h1>Login Succesfully</h1>
      <button onClick={handleSignout}>Logout</button>
    </div>
  );
}
export default Login_Success;
