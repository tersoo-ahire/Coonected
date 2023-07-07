import React from "react";
import Audiobook from "../components/Audiobook"
import audiobookdata from "../data/audiobookdata";

export default function Audiobooks(){
    const audiobookslist = audiobookdata.map(item => (<Audiobook key={item.id} {...item} />))
    
    return (
        <>
            <h1>Audiobooks</h1>
            <div className="ebooks-container">
                {audiobookslist}
            </div>
        </>
    )
}