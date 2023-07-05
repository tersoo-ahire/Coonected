import React from "react"
import PlacesImage from "./PlacesImage"
import placesdata from "../data/placesdata"

export default function Places(){
    const placeslist = placesdata.map(item => (<PlacesImage key={item.id} {...item} />))

    return (
        <div className="media-container">
            {placeslist}
        </div>
    )
}