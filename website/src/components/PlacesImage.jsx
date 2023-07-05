import React from "react";
import add from "../assets/media/add.svg";

export default function PlacesImage(props){
    return (
        <div className="media-sub">
            <img src={props.image} alt={props.username} />
            <div class="overlay"></div>
            <div className="content">
                <div className="left">
                    <span>{props.viewcount}k</span>
                    <span>Viewed users</span>
                </div>
                <img src={add} alt="Add Icon" id="add-icon"/>
            </div>
        </div>
    )
}