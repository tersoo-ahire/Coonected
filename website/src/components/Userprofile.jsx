import React from "react";
import paul from "../assets/group/paul.png"
import downarrow from "../assets/downarrow.svg";

export default function UserProfile(){
    return (
        <div className="user-profile-container">
            <img src={paul} alt="John Clark" />
            <span>John Clark</span>
            <img src={downarrow} alt="Down Arrow" />
        </div>
    )
}