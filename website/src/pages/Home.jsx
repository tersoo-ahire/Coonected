import React from "react";
import Search from "../components/Search";
import Group from "../components/Group";
import groupdata from "../data/group";

export default function Home(){
    const grouplist = groupdata.map(item => (<Group key={item.id} {...item} />))

    return (
        // HOME PAGE SECTION
        <section className="home-page">
            <div className="left">
                <Search/>
                <div className="group-container">
                    <h2>YOUR GROUP</h2>
                    {grouplist}
                </div>
            </div>
            <div className="center">
Center
            </div>
            <div className="right">
Right
            </div>
        </section>
    )
}