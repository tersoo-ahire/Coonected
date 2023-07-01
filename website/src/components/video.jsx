import React from "react";

export default function Video(props){
    return (
        <video src={props.video} controls></video>
    )
}