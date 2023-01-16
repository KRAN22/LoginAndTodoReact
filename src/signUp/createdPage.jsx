import React from "react";
import { Link } from "react-router-dom";

export const CreatedPage = () => {
  return (
    <div
      style={{
        paddingTop: "200px",
        backgroundColor: "#fff",
      }}
    >
      <center>
        <h1 style={{ color: "#636363" }}>Successfully Created User Account </h1>
        <h3 style={{ color: "#999" }}>
          Go to <Link to={"/"}>Login</Link>
        </h3>
      </center>
    </div>
  );
};
