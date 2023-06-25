import React from "react";

export default function Activity(props) {
    return (
        <div className="like-activities-container">
            {props.activity_name === "like" ? (
                <div className="likes">
                    <img src={props.image} alt="Paul" />
                    <div>
                        <span>{props.like1}, {props.like2}</span> and{" "}
                        <span>{props.likeCount} others</span> liked your post. {props.notified}
                    </div>
                </div>
            ) : (
                <div className="follow">
                    <img src={props.follower} alt="Paul" />
                    <div className="sub">
                        <div><span>{props.name1}</span> started following you. {props.notified}</div>
                        <div className="buttons-container">
                            <button className="btn-1">Discard</button>
                            <button className="btn-2">Follow back</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}