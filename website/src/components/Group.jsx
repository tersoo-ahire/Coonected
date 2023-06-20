import React from "react";
import { Link } from "react-router-dom";

export default function Group(props){
    return (    
        <div className="group-list">
            <img src={props.icon} alt={props.group_name} />
            <Link to="#">{props.group_name}</Link>
        </div>
    )
}