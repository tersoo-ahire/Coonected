import React from "react";
import Group from "../components/Group";
import groupdata from "../data/group";
import Connections from "../components/Coonections";
import connectiondata from "../data/connections";
import Story from "../components/Stories";
import storiesdata from "../data/stories";
import Post from "../components/Post";
import Feed from "../components/Feed";
import feeddata from "../data/feed";
import Suggestion from "../components/Suggestion";
import Activities from "../components/Activities";
import Navbar from "../components/Navbar";


export default function Home(){
    const grouplist = groupdata.map(item => (<Group key={item.id} {...item}/>))
    const connectionlist = connectiondata.map(item => (<Connections key={item.id} {...item}/>))
    const storieslist = storiesdata.map(item => (<Story key={item.id} {...item}/>))
    const personalfeed = feeddata.map(item => (<Feed key={item.id} {...item}/>))

    return (
        // HOME PAGE SECTION
        <>
            <Navbar/>
            <section className="home-page">
                <div className="left">
                    <div className="group-container">
                        <h2>Groups</h2>
                        {grouplist}
                    </div>
                    <div className="connection-container">
                        <h2>Coonections</h2>
                        <div className="connection-sub-container">
                            {connectionlist}
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="stories-container">
                        <div className="stories-sub-container">
                            {storieslist}
                        </div>
                    </div>
                    <Post/>
                    {personalfeed}
                </div>
                <div className="right">
                    <Suggestion/>
                    <Activities/>
                </div>
            </section>
        </>
    )
}