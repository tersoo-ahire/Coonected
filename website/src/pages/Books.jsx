import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Activities from "../components/Activities";
import BooksNav from "../components/BooksNav";
// EXPLORE PAGE SUB COMPONENTS
import Ebooks from "../components/Ebooks";
import Audiobooks from "../components/Audiobooks";
import BookPage from "../components/BookPage";
import ebooksData from "../data/ebooksdata";
import Navbar from "../components/Navbar";

export default function Books(){
    return (
        <>
            <Navbar/>
            <section className="books-page">
                <div className="left-section">
                    <BooksNav/>
                    <div className="bottom-area">
                        <Routes>
                            <Route path="/" element={<Navigate to="ebooks" replace/> } />
                            <Route path="/all" element={<Ebooks />} />
                            <Route path="/ebooks" element={<Ebooks />} />
                            <Route path="/ebooks/:id" element={<BookPage books={ebooksData} />} />
                            <Route path="/audiobooks" element={<Audiobooks />} />
                        </Routes>
                    </div>
                </div>
                <div className="right-section">
                    <Activities/>
                </div>
            </section>
        </>
    )
}