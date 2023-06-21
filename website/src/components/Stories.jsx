import React from "react";
import { Link } from "react-router-dom";

export default function Story(props){
    return (
        <Link className="story" to={props.user_id}>
            <img src={props.image} alt={props.username} />
            <span>{props.username}</span>
        </Link>
    )
}