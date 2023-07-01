import React from "react";
import Image from "./Image";
import photosdata from "../data/photos";

export default function Photos(props){
    const photoslist = photosdata.map(item => (<Image key={item.id} {...item} />))

    return (
        <div className="photos-container">
            {photoslist}
        </div>
    )
}