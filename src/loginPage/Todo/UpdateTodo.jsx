import React from "react";
import axios from "axios";
import { useState } from "react";

export const UpdateTodo = (props) => {
  const id = props.name;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const OnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const OnChangeDesc = (e) => {
    setDescription(e.target.value);
  };

  const OnClickUpdate = async () => {
    const token = localStorage.getItem("AccessToken");
    const baseURL = `http://127.0.0.1:8000/api/todo/updateTodo/${id}`;
    const body = { title, description };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.put(baseURL, body, header);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="updateTodo">
      <h2>Update Our Todo</h2>
      <h4>Title</h4>
      <input type={"text"} onChange={OnChangeTitle}></input>
      <h4>Description</h4>
      <input type={"text"} onChange={OnChangeDesc}></input>
      <div>
        <button onClick={OnClickUpdate}>Upgrade</button>
      </div>
    </div>
  );
};
