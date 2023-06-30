import React from "react";
import { Link } from "react-router-dom";
import settings from "../assets/feed/settings.svg";
import like from "../assets/feed/like.svg";
import comment from "../assets/feed/comment.svg";
import share from "../assets/feed/share.svg";
import CommentList from "./CommentList";
import commentdata from "../data/commentdata.js";
import CommentBottom from "./CommentBottom";


export default function Feed(props){
    const totalInteractions = props.comment_count + props.share_count;
    const commentlist = commentdata.map(item => <CommentList key={item.id} {...item} />)

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const modalRef = React.useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleModalClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };
      

    return (
        <div className="feed-container">
            <div className="top-container-feed">
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
                        <Link onClick={openModal}>{props.comment_count} comments</Link>
                        <Link>{props.share_count} shares</Link>
                    </div>
                </div>
            </div>
            <div className="bottom-container-feed">
                <div className="top-area">
                    <div className="icon-container">
                        <img src={like} alt="Like" />
                        <span>Like</span>
                    </div>
                    <div className="icon-container" onClick={openModal}>
                        <img src={comment} alt="Comments" />
                        <span>Comments</span>
                    </div>
                    <div className="icon-container">
                        <img src={share} alt="Share" />
                        <span>Share</span>
                    </div>
                </div>
                <CommentBottom/>
            </div>
            {isModalOpen &&         
            <div className="modal-container" onClick={handleModalClick}>
                <div className="modal-content-sub" ref={modalRef}>
                    {commentlist}
                </div>
            </div>}
        </div>
    )
}