import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./todo.css";
import axios from "axios";
import TodoList from "./TodoList";
import { BiLogOut } from "react-icons/bi";

export const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState();
  const [descError, setDescError] = useState();
  const [error, setError] = useState();

  const onChangeTitle = (e) => {
    setTitleError();
    setTitle(e.target.value);
  };
  const onChangeDesc = (e) => {
    setDescError();
    setDescription(e.target.value);
  };

  const SubmitHandler = async () => {
    const token = window.localStorage.getItem("AccessToken");
    const user_id = jwt_decode(token).id;

    if ((title.length > 0) & (description.length > 0) & (user_id > 0)) {
      const baseURL = "http://127.0.0.1:8000/api/todo/";
      const body = { title, description, user_id };
      try {
        const response = await axios.post(baseURL, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response) {
          window.location.reload();
        }
      } catch (e) {
        setError(e.response.data.detail);
      }
    }
    setTitleError(title.length === 0);
    setDescError(description.length === 0);
    setTitle("");
    setDescription("");
  };

  const navigate = useNavigate();

  const onClickHandler = () => {
    window.localStorage.removeItem("AccessToken");
    return navigate("/");
  };

  return (
    <div className="main">
      <div className="todoCreate">
        <div className="todo">
          <div className="header">
            <h1>Create Your Todo</h1>
          </div>
          <div className="loginMain">
            <div>
              <h4>Title</h4>
              <input
                type={"text"}
                value={title}
                onChange={onChangeTitle}
              ></input>
              {titleError && <p style={{ color: "red" }}>*title is Required</p>}
            </div>
            <div>
              <h4>description</h4>
              <input
                type={"text"}
                value={description}
                onChange={onChangeDesc}
              ></input>
              {descError && (
                <p style={{ color: "red" }}>*description is Required</p>
              )}
            </div>
            <div className="Btn">
              <button onClick={SubmitHandler}>Submit</button>
            </div>
          </div>
        </div>
        <div className="DelBtn">
          <button onClick={onClickHandler}>
            <BiLogOut />
          </button>
        </div>
      </div>
      <div className="todoUpdate">
        <TodoList />
      </div>
    </div>
  );
};
