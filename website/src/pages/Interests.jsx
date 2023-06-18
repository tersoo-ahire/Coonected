import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import Topic from "../components/InterestTopic";
import topicsdata from "../data/interests";
import arrow from "../assets/interests/rightarrow.svg";

export default function InterestSection(){
    const topics = topicsdata.map(item  => {return (<Topic key={item.id} {...item} />)})

    return (
        <section className="interests">
            <img src={logo} alt="Coonected Logo" id="logo"/>
            <div className="sub">
                <h1>Interests</h1>
                <p>
                    By choosing your interests below, we are able to <span style={{color: "#3377FF", fontWeight: "bold"}}> recommend </span>
                    the suitable experience for you and notify you when new ones are updated.  
                    Pick as many as you wish.
                </p>
            </div>
            <div className="topics-container">
                {topics}
            </div>
            <Link to={"/invitation"}>
                <button>
                    Next
                    <img src={arrow} alt="Right Arrow" />
                </button>
            </Link>
        </section>
    )
}