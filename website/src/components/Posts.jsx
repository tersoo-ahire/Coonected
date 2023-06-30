import React from "react";
import Post from "../components/Post.jsx";
import Feed from "../components/Feed.jsx";
import feeddata from "../data/feed.js";


export default function Posts(){
    const personalfeed = feeddata.map(item => (<Feed key={item.id} {...item}/>))

    return (
        <>
            <Post/>
            {personalfeed}
        </>
    )
}