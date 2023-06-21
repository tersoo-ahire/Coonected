import React from "react";
import { Link } from "react-router-dom";
import paul from "../assets/group/paul.png";
import video from "../assets/post/video.svg";
import photo from "../assets/post/photo.svg";
import feeling from "../assets/post/feeling.svg";


export default function Post(){
    return (
        <div className="post-container">
            <div className="top">
                <img src={paul} alt="Paul" />
                <input type="text" placeholder="Speak to the world" />
            </div>
            <div className="bottom">
                <Link className="media-container">
                    <img src={video} alt="Video Icon" />
                    Live Video
                </Link>
                <Link className="media-container">
                    <img src={photo} alt="Photo Icon" />
                    Photo/Video
                </Link>
                <Link className="media-container">
                    <img src={feeling} alt="Feeling Icon" />
                    Feeling
                </Link>
                <button>Post</button>
            </div>
        </div>
    )
}