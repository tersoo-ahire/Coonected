import React from "react";
import Search from "../components/Search";
import Userprofile from "../components/Userprofile";
import Activities from "../components/Activities";
import Navigation from "../components/Navigation";

export default function Explore() {
    // EXPLORE PAGE SECTION
    return (
        <section className="explore-page">
            <div className="left-section">
                <div className="top-area">
                    <Search/>
                    <Navigation/>
                </div>
                <div className="bottom-area">

                </div>
            </div>
            <div className="right-section">
                <Userprofile/>
                <Activities/>
            </div>
        </section>
    )
}