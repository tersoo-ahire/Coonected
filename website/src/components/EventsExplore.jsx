import React from "react"
import EventsImage from "./EventsImage"
import eventsdata from "../data/eventsdata"

export default function EventsExplore(){
    const eventslist = eventsdata.map(item => (<EventsImage key={item.id} {...item} />))

    return (
        <div className="media-container">
            {eventslist}
        </div>
    )
}