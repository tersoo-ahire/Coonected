import React from "react";
import { Link } from "react-router-dom";
import success from "../assets/invitation/success.svg";

export default function Success(){
    return (
        // INVITATION SUCCESS PAGE
        <div className="invitation-page">
            <div className="sub2">
                <h1>Success</h1>
                <p>Invitation successfully sent!</p>
                <img src={success} alt="Success Image" />
                <Link to="/home">
                    Return to Homepage
                </Link>
            </div>
        </div>
    )
}