import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function ExploreNav() {
    const location = useLocation();

    return (
        <div className="explore-links-container">
            <Link to="/explore/media" className={ location.pathname === "/explore/media" ? "active" : ""}>
                Media
            </Link>
            <Link to="/explore/places" className={ location.pathname === "/explore/places" ? "active" : ""}>
                Places
            </Link>
            <Link to="/explore/products" className={ location.pathname === "/explore/products" ? "active" : ""}>
                Products
            </Link>
            <Link to="/explore/lifestyle" className={ location.pathname === "/explore/lifestyle" ? "active" : ""}>
                Lifestyle
            </Link>
            <Link to="/explore/events" className={ location.pathname === "/explore/events" ? "active" : ""}>
                Events
            </Link>
        </div>
    )
}