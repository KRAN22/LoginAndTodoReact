import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userError, setUserError] = useState();
  const [passwordError, setPasswordError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (token) {
      navigate("/todo");
    }
  }, []);

  const onChangeUsername = (e) => {
    setError();
    setUserError();
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setError();
    setPasswordError();
    setPassword(e.target.value);
  };

  const SubmitHandler = async () => {
    if ((password.length > 0) & (username.length > 0)) {
      const baseURL = "http://127.0.0.1:8000/api/auth/Login";
      const body = { username, password };
      try {
        const response = await axios.post(baseURL, body);
        navigate("/todo");
        window.localStorage.setItem("AccessToken", response.data.access);
      } catch (e) {
        setError(e.response.data.detail);
      }
    }
    setPasswordError(password.length === 0);
    setUserError(username.length === 0);
  };

  return (
    <div className="Main">
      <div className="login">
        <div className="header">
          <h1>Welcome Back</h1>
          <h4>Please enter your details.</h4>
        </div>
        <div className="loginMain">
          <div>
            <h5>User name & Email</h5>
            <input
              type={"text"}
              placeholder={"Enter Your UserName & Email"}
              name="username"
              onChange={onChangeUsername}
            ></input>
            {userError && <p style={{ color: "red" }}>*username is Required</p>}
          </div>
          <div>
            <h5>Password</h5>
            <input
              type={"password"}
              placeholder={"Enter Your Password"}
              name="password"
              onChange={onChangePassword}
            ></input>
            {passwordError && (
              <p style={{ color: "red" }}>*Password is Required</p>
            )}
          </div>
          <center style={{ color: "red" }}>{error}</center>
          <div className="Btn">
            <button onClick={SubmitHandler}>SignIn</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4>
          Don't have a account? <Link to={"/signUp"}>SignUp</Link>
        </h4>
      </div>
    </div>
  );
};
