import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import axios from "axios";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [userError, setUserError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const onChangeUsername = (e) => {
    setUserError();
    setUsername(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmailError();
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordError();
    setPassword(e.target.value);
  };
  const SubmitHandler = async () => {
    if ((username.length > 0) & (email.length > 0) & (password.length > 0)) {
      const baseURL = "http://127.0.0.1:8000/api/user/signIn";
      const body = { username, email, password };
      try {
        const response = await axios.post(baseURL, body);
        console.log(response);
      } catch (e) {
        setError(e.response.data.detail);
      }
    }
    setEmailError(email.length === 0);
    setPasswordError(password.length === 0);
    setUserError(username.length === 0);
  };
  return (
    <div className="Main">
      <div className="signUp">
        <div className="header">
          <h1>Register</h1>
          <h5>Create your account. It's free and only takes a minute.</h5>
        </div>
        <div className="signUpMain">
          <div>
            <h5>username</h5>
            <input type={"text"} onChange={onChangeUsername}></input>
          </div>
          {userError && <p style={{ color: "red" }}>*username is Required</p>}
          <div>
            <h5>Email</h5>
            <input type={"text"} onChange={onChangeEmail}></input>
          </div>
          {emailError && <p style={{ color: "red" }}>*Email is Required</p>}
          <div>
            <h5>Password</h5>
            <input type={"password"} onChange={onChangePassword}></input>
          </div>
          {passwordError && (
            <p style={{ color: "red" }}>*password is Required</p>
          )}
          <center style={{ color: "red" }}>{error}</center>
          <div className="Btn">
            <button onClick={SubmitHandler}>Register Now</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <h5>
          Already have an account? <Link to={"/"}>Sign in</Link>
        </h5>
      </div>
    </div>
  );
};
