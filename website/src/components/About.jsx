import React from "react";
import Story from "../components/Stories";
import storiesdata from "../data/stories";

export default function About(){
    const storieslist = storiesdata.map(item => (<Story key={item.id} {...item}/>))

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
            <div className="family-container">
                <h2>Family Members</h2>
                <div className="stories-container">
                    <div className="stories-sub-container">
                        {storieslist}
                    </div>
                </div>
            </div>
        </div>
    )
}