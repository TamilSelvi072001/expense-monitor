import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";

const Login = React.lazy(() => import("./LoginPage/Login"));
const Signup = React.lazy(() => import("./LoginPage/Signup"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" name="Login" element={<Login />} />
          <Route path="/signup" name="Signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
