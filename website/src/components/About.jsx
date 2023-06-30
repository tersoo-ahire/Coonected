import React from "react";

export default function About(){
    return (
        <div className="about-container">
            <p>
                I make the whole game different with my approach and 
                make real gamers understand this game!
            </p>
            <div className="details-container">
                <div className="left-container">
                    <span>Fullname:</span>
                    <span>The other detail:</span>
                    <span>Ranking Level:</span>
                    <span>Email:</span>
                    <span>Location:</span>
                </div>
                <div className="right-container">
                    <span>John Clark</span>
                    <span>John Clark</span>
                    <span>Grandmaster</span>
                    <span>Johnclark@gmail.com</span>
                    <span>Freetown</span>
                </div>
            </div>
        </div>
    )
}