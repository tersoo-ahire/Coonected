import React from "react";
import { Link } from "react-router-dom";
import settings from "../assets/feed/settings.svg";
import like from "../assets/feed/like.svg";
import comment from "../assets/feed/comment.svg";
import share from "../assets/feed/share.svg";
import paul from "../assets/group/paul.png";
import send from "../assets/feed/send.svg";
import gif from "../assets/feed/gif.svg";
import media from "../assets/post/photo.svg";
import feeling from "../assets/post/feeling.svg";


export default function Feed(props){
    const totalInteractions = props.comment_count + props.share_count;

    return (
        <div className="feed-container">
            <div className="top-container">
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
            <div className="center-container">
                <p>{props.caption}</p>
                <div className="images-container">
                    <img className={(props.media1) === null ? "hide" : "show"} 
                        src={props.media1} alt="Media" 
                    />
                    <img className={(props.media2) === null ? "hide" : "show"} 
                        src={props.media2} alt="Media" 
                    />
                    <img className={(props.media3) === null ? "hide" : "show"} 
                        src={props.media3} alt="Media" 
                    />
                </div>
                <div className="bottom">
                    <Link className="interaction-container">
                        <span className="value">{totalInteractions}</span>
                        <span>Participants</span>
                    </Link>
                    <div className="comments-share-container">
                        <Link>{props.comment_count} comments</Link>
                        <Link>{props.share_count} shares</Link>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <div className="top-area">
                    <Link className="icon-container">
                        <img src={like} alt="Like" />
                        <span>Like</span>
                    </Link>
                    <Link className="icon-container">
                        <img src={comment} alt="Comments" />
                        <span>Comments</span>
                    </Link>
                    <Link className="icon-container">
                        <img src={share} alt="Share" />
                        <span>Share</span>
                    </Link>
                </div>
                <div className="bottom-area">
                    <div className="left-con">
                        <img src={paul} alt="Paul" />
                    </div>
                    <div className="center-con">
                        <input type="text" placeholder="Write a comment" />
                        <div className="image-container">
                            <img src={gif} alt="GIF" />
                            <img src={media} alt="Media" />
                            <img src={feeling} alt="Feeling" />
                        </div>
                    </div>
                    <div className="right-con">
                        <img src={send} alt="Send Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}