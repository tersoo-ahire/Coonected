import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Signin from "./pages/Sign_In";
import Signup from "./pages/Sign_Up";
import ForgetPassword from "./pages/ForgetPassword";
import InterestSection from "./pages/Interests";
import Invitation from "./pages/Invitation";
import Success from "./pages/InvitationSuccess";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Books from "./pages/Books";
import BookPage from "./components/BookPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/sign-in/interests" element={<InterestSection />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/invitation/success" element={<Success />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/explore/*" element={<Explore />} />
        <Route path="/books/*" element={<Books/>} />
      </Routes>
    </>
  );
}
