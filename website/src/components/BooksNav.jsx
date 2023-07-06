import React from "react";
import { Link } from "react-router-dom";

export default function BooksNav(){
    return (
        <div className="books-links-container">
            <Link>All</Link>
            <Link>eBooks</Link>
            <Link>Audiobooks</Link>
        </div>
    )
}