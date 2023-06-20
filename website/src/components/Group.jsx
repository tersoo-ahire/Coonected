import React from "react";

export default function Group(props){
    return (    
        <div className="group-list">
            <img src={props.icon} alt={props.group_name} />
            <p>{props.group_name}</p>
        </div>
    )
}