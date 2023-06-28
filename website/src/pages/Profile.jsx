import React from "react";
import Search from "../components/Search";
import Group from "../components/Group";
import groupdata from "../data/group";
import Connections from "../components/Coonections";
import connectiondata from "../data/connections";
import Navigation from "../components/Navigation";
import UserProfile from "../components/Userprofile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileNav from "../components/ProfileNav";
import Activities from "../components/Activities";


export default function Profile(){
    const grouplist = groupdata.map(item => (<Group key={item.id} {...item}/>))
    const connectionlist = connectiondata.map(item => (<Connections key={item.id} {...item}/>))
    return (
        // PROFILE PAGE SECTION
        <section className="profile-page">
            <div className="left-section">
                <Search/>
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
            <div className="right-section">
                <div className="top-container">
                    <div className="first-area">
                        <Navigation/>
                        <UserProfile/>
                    </div>
                    <div className="second-area">
                        <ProfileHeader/>
                        <ProfileNav/>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="left-area">
                        LEFT
                    </div>
                    <div className="right-area">
                        <Activities/>
                    </div>
                </div>
            </div>
        </section>
    )
}