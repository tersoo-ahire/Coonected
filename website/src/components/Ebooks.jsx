import React from "react";
import Ebook from "./Ebook";
import ebooksdata from "../data/ebooksdata";

export default function Ebooks(){
    const ebookslist = ebooksdata.map(item => (<Ebook key={item.id} {...item} />))
    
    return (
        <>
            <h1>Recommended</h1>
            <div className="ebooks-container">
                {ebookslist}
            </div>
        </>
    )
}