import React from "react";
import Ebook from "./Ebook";
import ebooksdata from "../data/ebooksdata";

export default function Ebooks(){
    const ebookslist = ebooksdata.map(item => (<Ebook key={item.id} {...item} />))
    
    return (
        <div className="ebooks-container">
            {ebookslist}
        </div>
    )
}