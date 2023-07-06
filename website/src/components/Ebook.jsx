import React from "react";
import { Link } from "react-router-dom";
import stars from "../assets/books/stars.svg";

export default function Ebook(props){
    return (
        <div className="ebooks-sub">
            <div className="image-container">
                <img src={props.book_image} alt={props.book_title} />
                <div class="overlay"></div>
            </div>
            <h2>{props.book_title}</h2>
            <div className="details-container">
                <div className="left">
                    <img src={stars} alt="Stars" />
                    <span>
                        {props.read_count} read this book
                    </span> 
                </div>
                <div className="right">
                    <Link>Read now</Link>
                </div>
            </div>
        </div>
    )
}