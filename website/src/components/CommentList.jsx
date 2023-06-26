import React from "react";

export default function CommentList(props) {
    return (
        <div className="modal-content">
            <img src={props.image} alt="Profile Image" />
            <div className="right-modal-content">
                <div className="comment">
                    {props.comment}
                </div>
                <div className="actions">
                    <span>Like</span>
                    <span>Reply</span>
                    <span>{props.date_posted}</span>
                </div>
            </div>
        </div>
    )
}