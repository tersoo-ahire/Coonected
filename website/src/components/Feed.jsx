import React from "react";
import { Link } from "react-router-dom";
import settings from "../assets/feed/settings.svg";

export default function Feed(props){
    const totalInteractions = props.comment_count + props.share_count;

    return (
        <div className="feed-container">
            <div className="top">
                <div className="image-container">
                    <img src={props.profile_picture} alt="Post" />
                </div>
                <div className="details-container">
                    <span className="username">{props.username}</span>
                    <span className="lastposted">{props.lastposted} | {props.visibility}</span>
                </div>
                <div className="settings-container">
                    <Link to="#">
                        <img src={settings} alt="Settings Icon" />
                    </Link>
                </div>
            </div>
            <div className="center">
                <p>{props.caption}</p>
                <div className="images-container">
                    <img className={(props.media1) === null ? "hide" : "show"} src={props.media1} alt="Media" />
                    <img className={(props.media2) === null ? "hide" : "show"} src={props.media2} alt="Media" />
                    <img className={(props.media3) === null ? "hide" : "show"} src={props.media3} alt="Media" />
                </div>
                <div className="bottom">
                    <div className="interaction-container">
                        <span className="value">{totalInteractions}</span>
                        <span>Participants</span>
                    </div>
                    <div className="comments-share-container">
                        <span>{props.comment_count} comments</span>
                        <span>{props.share_count} shares</span>
                    </div>
                </div>
            </div>
            <div className="bottom">

            </div>
        </div>
    )
}