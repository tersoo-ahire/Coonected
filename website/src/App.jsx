import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Signin from "./pages/Sign_In";
import Signup from "./pages/Sign_Up";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
      </Routes>
    </>
  );
}
