import React from "react";
import Search from "../components/Search";
import UserProfile from "../components/Userprofile";
import Activities from "../components/Activities";
import BooksNav from "../components/BooksNav";

export default function Books(){
    return (
        <section className="books-page">
            <div className="left-section">
                <Search/>
                <BooksNav/>
                <h1>Recommended</h1>
            </div>
            <div className="right-section">
                <UserProfile/>
                <Activities/>
            </div>
        </section>
    )
}