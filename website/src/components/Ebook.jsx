import React from "react";
import { Link } from "react-router-dom";
import starImage from "../assets/books/star.svg";

export default function Ebook(props){

    const ratings = () => {
        const stars = [];
        for (let i = 1; i <= props.rating; i++) {
          stars.push(<img key={i} src={starImage} alt="Stars" />);
        }
        return stars;
    };

    return (
        <div className="ebooks-sub">
            <div className="image-container">
                <img src={props.book_image} alt={props.book_title} />
                <div className="overlay"></div>
            </div>
            <h2>{props.book_title}</h2>
            <div className="details-container">
                <div className="left">
                    <div className="ratings">
                        {ratings()}
                    </div>
                    <span>
                        {props.read_count} read this book
                    </span> 
                </div>
                <div className="right">
                    <Link to={`/books/ebooks/${props.id}`}>Read now</Link>
                </div>
            </div>
        </div>
    )
}