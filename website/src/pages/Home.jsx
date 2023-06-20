import React from "react";
import Search from "../components/Search";
import Group from "../components/Group";
import groupdata from "../data/group";
import Connections from "../components/Coonections";
import connectiondata from "../data/connections";
import Navigation from "../components/Navigation";

export default function Home(){
    const grouplist = groupdata.map(item => (<Group key={item.id} {...item} />))
    const connectionlist = connectiondata.map(item => (<Connections key={item.id} {...item}/>))

    return (
        // HOME PAGE SECTION
        <section className="home-page">
            <div className="left">
                <Search/>
                <div className="group-container">
                    <h2>YOUR GROUP</h2>
                    {grouplist}
                </div>
                <div className="connection-container">
                    <h2>COONECTIONS</h2>
                    <div className="connection-sub-container">
                        {connectionlist}
                    </div>
                </div>
            </div>
            <div className="center">
                <Navigation/>
            </div>
            <div className="right">
Right
            </div>
        </section>
    )
}