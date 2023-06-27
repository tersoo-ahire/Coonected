import React from "react";
import { Link } from "react-router-dom";
import paul from "../assets/group/paul.png"
import downarrow from "../assets/downarrow.svg";

export default function UserProfile(){
    return (
        <Link to="/profile" className="user-profile-container">
            <img src={paul} alt="John Clark" />
            <span>John Clark</span>
            <img src={downarrow} alt="Down Arrow" />
        </Link>
    )
}