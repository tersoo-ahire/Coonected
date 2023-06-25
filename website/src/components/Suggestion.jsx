import React from "react";
import baller from "../assets/baller.png"
import { Link } from "react-router-dom";

export default function Suggestion(){
    return (
        <div className="suggestion-container">
            <div className="top-area">
                <h2>You Might Like</h2>
                <Link>See All</Link>
            </div>
            <div className="center-area">
                <img src={baller} alt="Baller" />
                <div className="details">
                    <span className="one">J.D LINCOLN</span>
                    <span className="two">Basketball Scout</span>
                </div>
            </div>
            <div className="bottom-area">
                <Link className="btn-1">Ignore</Link>
                <Link className="btn-2">Follow</Link>
            </div>
        </div>
    )
}