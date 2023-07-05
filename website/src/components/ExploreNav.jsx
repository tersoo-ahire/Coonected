import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function ExploreNav() {
    const [activeLink, setActiveLink] = useState("media");

    useEffect(() => {
      setActiveLink("media");
    }, []);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

    return (
        <div className="explore-links-container">
            <Link
                to="./media"
                className={activeLink === "media" ? "active" : ""}
                onClick={() => handleLinkClick("media")}
            >
                Media
            </Link>
            <Link
                to="./places"
                className={activeLink === "places" ? "active" : ""}
                onClick={() => handleLinkClick("places")}
            >
                Places
            </Link>
            <Link
                to="./products"
                className={activeLink === "products" ? "active" : ""}
                onClick={() => handleLinkClick("products")}
            >
                Products
            </Link>
            <Link
                to="./lifestyle"
                className={activeLink === "lifestyle" ? "active" : ""}
                onClick={() => handleLinkClick("lifestyle")}
            >
                Lifestyle
            </Link>
            <Link
                to="./events"
                className={activeLink === "events" ? "active" : ""}
                onClick={() => handleLinkClick("events")}
            >
                Events
            </Link>
        </div>
    )
}