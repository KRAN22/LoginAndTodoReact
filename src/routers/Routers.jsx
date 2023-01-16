import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "../loginPage/login";
import { ProtectedRoute } from "../loginPage/protectedRouter";
import { Todo } from "../loginPage/Todo/Todo";
import { CreatedPage } from "../signUp/createdPage";
import { SignUp } from "../signUp/signUp";

export const Routers = () => {
  const token = window.localStorage.getItem("AccessToken");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />;
        <Route element={<ProtectedRoute />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />;
        <Route path="/created" element={<CreatedPage />} />;
      </Routes>
    </BrowserRouter>
  );
};
