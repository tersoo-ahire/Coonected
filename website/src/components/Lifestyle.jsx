import React from "react"
import LifestyleImage from "./LifestyleImage"
import lifestyledata from "../data/lifestyledata"

export default function Lifestyle(){
    const lifestylelist = lifestyledata.map(item => (<LifestyleImage key={item.id} {...item} />))

    return (
        <div className="media-container">
            {lifestylelist}
        </div>
    )
}