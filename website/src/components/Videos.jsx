import React from "react";
import Video from "./video";
import videosdata from "../data/videos";

export default function Videos(){
    const videoslist = videosdata.map(item => (<Video key={item.id} {...item} />))

    return (
        <div className="videos-container">
            {videoslist}
        </div>
    )
}