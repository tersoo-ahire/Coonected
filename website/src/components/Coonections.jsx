import React from "react";
import { Link } from "react-router-dom";

export default function Connections(props){
    return (    
        <div className="connection-list">
            <div className="image-container">
                <img src={props.profile_photo} alt={props.username} />
            </div>
            <Link to={props.user_id}>{props.username}</Link>
            <span>{props.last_seen}</span>
        </div>
    )
}
