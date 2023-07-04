import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/navigation/home.svg";
import group from "../assets/navigation/group.svg";
import message from "../assets/navigation/message.svg";
import explore from "../assets/navigation/explore.svg";
import notification from "../assets/navigation/notification.svg";
import setting from "../assets/navigation/setting.svg";

export default function Navigation(){
    return (
        <div className="navigation-container">
            <Link to={"/home"} style={{backgroundColor: "#3377FF"}} title="Home">
                <img src={home} alt="Home Icon" />
            </Link>
            <Link to={"/group"}>
                <img src={group} alt="Group Icon" title="Group" />
            </Link>
            <Link to={"/message"}>
                <img src={message} alt="Message Icon" title="Message" />
            </Link>
            <Link to={"/explore"}>
                <img src={explore} alt="Explore Icon" title="Explore" />
            </Link>
            <Link to={"/notifications"}>
                <img src={notification} alt="Notification Icon" title="Notifications" />
            </Link>
            <Link to={"/settings"}>
                <img src={setting} alt="Setting Icon" title="Settings" />
            </Link>
        </div>
    )
}