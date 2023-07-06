import React from "react";
import UserProfile from "../components/Userprofile";
import Activities from "../components/Activities";

export default function Books(){
    return (
        <section className="books-page">
            <div className="left-section">

            </div>
            <div className="right-section">
                <UserProfile/>
                <Activities/>
            </div>
        </section>
    )
}