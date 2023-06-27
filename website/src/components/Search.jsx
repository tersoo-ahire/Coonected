import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import magnifyingglass from "../assets/magnifyingglass.svg";

export default function Search(){
    return (
        <div className="search-container">
            <Link to="/home">
                <img src={logo} alt="Coonected Logo" />
            </Link>
            <div className="input-container">
                <img src={magnifyingglass} alt="Search Icon" />
                <input type="search" placeholder="Search" />
            </div>
        </div>
    )
}