import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./TodoList.css";
import { UpdateTodo } from "./UpdateTodo";

import { FiTrash2, FiEdit } from "react-icons/fi";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const token = localStorage.getItem("AccessToken");
    const baseURL = "http://127.0.0.1:8000/api/todo/";
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(baseURL, header);
      setList(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const OnClickDelete = async (id) => {
    const token = localStorage.getItem("AccessToken");
    const baseURL = `http://127.0.0.1:8000/api/todo/deleteTodo/${id}`;
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(baseURL, header);
      if (response) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const OnClickEdit = (id) => {
    setId(id);
    setEdit(true);
  };

  return (
    <div className="CreateMain">
      <div className="Navbar">
        <div className="title">
          <h4>Title</h4>
        </div>
        <div className="desc">
          <h4>Description</h4>
        </div>
        <div className="status">
          <h4>status</h4>
        </div>
        <div className="edit">
          <h4>Edit</h4>
        </div>
        <div className="remove">
          <h4>Remove</h4>
        </div>
      </div>
      <hr className="hr"></hr>
      {edit ? (
        <UpdateTodo name={id} />
      ) : (
        <div>
          {list.map((item) => {
            return (
              <div key={item.id} className="mainbar">
                <div className="title">
                  <h4>{item.title}</h4>
                </div>
                <div className="desc">
                  <h4>{item.description}</h4>
                </div>
                <div className="status_1">
                  <h4>{item.status.value}</h4>
                </div>
                <div className="ButEdit">
                  <button onClick={() => OnClickEdit(item.id)}>
                    <FiEdit />
                  </button>
                </div>
                <div className="ButRemove">
                  <button onClick={() => OnClickDelete(item.id)}>
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
