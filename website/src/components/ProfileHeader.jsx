import React from "react";
import { Link } from "react-router-dom";
import profileimage from "../assets/profile/profilepic.png";
import coverimage from "../assets/profile/coverimage.png";
import img1 from "../assets/profile/img1.png";
import img2 from "../assets/profile/img2.png";
import img3 from "../assets/profile/img3.png";
import img4 from "../assets/profile/img4.png";
import img5 from "../assets/profile/img5.png";

export default function ProfileHeader() {
    // PROFILE HEADER COMPONENT
    return (
        <div className="profile-header-container">
            <div className="profile-image-container">
                <img src={profileimage} alt="Profile Image" />
            </div>
            <div className="cover-image-container">
                <button className="edit-cover">
                    <Link to={""}>Edit Cover</Link>
                </button>
                <div className="name-container">
                    <h1>John Clark</h1>
                    <span>@badmangamer</span>
                </div>
                <img src={coverimage} alt="Cover image" />
            </div>
            <div className="bottom-area">
                <div className="friend-count-container">
                    <p>3.5k friends</p>
                    <div className="image-mask-container">
                        <img src={img1} alt="Friend 1" id="pos1" />
                        <img src={img2} alt="Friend 2" />
                        <img src={img3} alt="Friend 3" />
                        <img src={img4} alt="Friend 4" />
                        <img src={img5} alt="Friend 5" />
                    </div>
                </div>
                <div className="buttons-container">
                    <button className="submit3">
                        <Link to={""}>Add to story</Link>
                    </button>
                    <button className="submit3-alt">
                        <Link to={""}>Edit Profile</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}