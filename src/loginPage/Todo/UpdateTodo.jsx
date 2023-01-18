import React from "react";
import axios from "axios";
import { useState } from "react";

export const UpdateTodo = (props) => {
  const id = props.name;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();

  const OnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const OnChangeDesc = (e) => {
    setDescription(e.target.value);
  };
  const OnChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const OnClickUpdate = async () => {
    const token = localStorage.getItem("AccessToken");
    const baseURL = `http://127.0.0.1:8000/api/todo/updateTodo/${id}`;
    const body = { title, description, status };
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
      <h4>Status</h4>
      <select className="status_options" onChange={OnChangeStatus}>
        <option value={"CREATED"}>CREATED</option>
        <option value={"IN-PROGRESS"}>IN-PROGRESS</option>
        <option value={"COMPLETED"}>COMPLETED</option>
      </select>
      <div>
        <button onClick={OnClickUpdate}>Upgrade</button>
      </div>
    </div>
  );
};
