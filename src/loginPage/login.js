import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    const baseURL = "http://127.0.0.1:8000/api/auth/Login";
    const body = { username, password };
    try {
      const response = await axios.post(baseURL, body);
      navigate("/todo");
      window.localStorage.setItem("AccessToken", response.data.access);
    } catch (err) {
      setError(err.response.data.detail);
    }
    setPasswordError(password.length === 0);
    setUserError(username.length === 0);
  };

  return (
    <div className="login">
      <center>
        <div className="loginHeader">
          <h1>LogIn Model</h1>
        </div>
        <div className="loginMain">
          <div>
            <label>User name : </label>
            <input
              type={"text"}
              name="username"
              onChange={onChangeUsername}
            ></input>
            {userError && (
              <h6 style={{ color: "red" }}>*username is Required</h6>
            )}
          </div>
          <div>
            <label>Password : </label>
            <input
              type={"password"}
              name="password"
              onChange={onChangePassword}
            ></input>
            {passwordError && (
              <h6 style={{ color: "red" }}>*Password is Required</h6>
            )}
          </div>
          <div>
            <button onClick={SubmitHandler}>SignIn</button>
          </div>
          {error}
        </div>
      </center>
    </div>
  );
};
