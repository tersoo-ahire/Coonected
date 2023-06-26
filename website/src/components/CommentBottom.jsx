import React from "react";
import paul from "../assets/group/paul.png";
import send from "../assets/feed/send.svg";
import gif from "../assets/feed/gif.svg";
import media from "../assets/post/photo.svg";
import feeling from "../assets/post/feeling.svg";

export default function CommentBottom() {
    return (
        <div class="bottom-area">
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
    )
}