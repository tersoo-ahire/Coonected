import React, { useState } from "react";
import tick from "../assets/interests/tick.svg";

export default function Topic(props){
    const [isSelected,setIsSelected] = useState(false);

    function handleClick(){
        setIsSelected(!isSelected);
    }

    return (
        <div className={`topic ${isSelected ? "selected" : ""}`} onClick={handleClick}>
            <div className="image-container">
                <img src={props.image} alt={props.topic} />
                <div className="tick-container" >
                    {isSelected && <img src={tick} className="tick-icon" alt="Tick Icon" />}
                </div>
            </div>
            <span>{props.topic}</span>
        </div>
    )
}