import React from "react";
import { useNavigate } from "react-router-dom";

export const Todo = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    window.localStorage.removeItem("AccessToken");
    return navigate("/");
  };

  return (
    <div>
      <h1>Welcome to Todo</h1>
      <button onClick={onClickHandler}>LogOut</button>
    </div>
  );
};
