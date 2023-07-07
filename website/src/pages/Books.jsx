import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "../components/Search";
import UserProfile from "../components/Userprofile";
import Activities from "../components/Activities";
import BooksNav from "../components/BooksNav";
// EXPLORE PAGE SUB COMPONENTS
import Ebooks from "../components/Ebooks";
import Audiobooks from "../components/Audiobooks";

export default function Books(){
    return (
        <section className="books-page">
            <div className="left-section">
                <Search/>
                <BooksNav/>
                <div className="bottom-area">
                    <Routes>
                        <Route path="/" element={<Navigate to="ebooks" replace/> } />
                        <Route path="/all" element={<Ebooks />} />
                        <Route path="/ebooks" element={<Ebooks />} />
                        <Route path="/audiobooks" element={<Audiobooks />} />
                    </Routes>
                </div>
            </div>
            <div className="right-section">
                <UserProfile/>
                <Activities/>
            </div>
        </section>
    )
}