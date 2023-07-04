import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "../components/Search";
import Userprofile from "../components/Userprofile";
import Activities from "../components/Activities";
import Navigation from "../components/Navigation";
import ExploreNav from "../components/ExploreNav";
// EXPLORE SUB COMPONENTS
import Media from "../components/Media";
import Places from "../components/Places";
import ProductsExplore from "../components/ProductsExplore";
import Lifestyle from "../components/Lifestyle";
import EventsExplore from "../components/EventsExplore";

export default function Explore() {
    // EXPLORE PAGE SECTION
    return (
        <section className="explore-page">
            <div className="left-section">
                <div className="top-area">
                    <div className="search-nav">
                        <Search/>
                        <Navigation/>
                    </div>
                    <ExploreNav/>
                </div>
                <div className="bottom-area">
                    <Routes>
                        <Route path="/" element={<Navigate to="media" replace />} />
                        <Route path="/media" element={<Media/>} />
                        <Route path="/places" element={<Places/>} />
                        <Route path="/products" element={<ProductsExplore/>} />
                        <Route path="/lifestyle" element={<Lifestyle/>} />
                        <Route path="/events" element={<EventsExplore/>} />                        
                    </Routes>
                </div>
            </div>
            <div className="right-section">
                <Userprofile/>
                <Activities/>
            </div>
        </section>
    )
}