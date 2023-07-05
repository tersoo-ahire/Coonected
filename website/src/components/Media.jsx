import React from "react"
import MediaImage from "./MediaImage"
import mediadata from "../data/mediadata"

export default function Media(){
    const medialist = mediadata.map(item => (<MediaImage key={item.id} {...item} />))

    return (
        <div className="media-container">
            {medialist}
        </div>
    )
}