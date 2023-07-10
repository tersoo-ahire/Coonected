import React from "react";
import { Link, useParams } from "react-router-dom";
import starImage from "../assets/books/star.svg";
import bookopen from "../assets/books/book_open_text.svg";

export default function BookPage({ books }) {
    const { id } = useParams();
    const selectedBook = books.find((item) => item.id === parseInt(id, 10));


    if (!selectedBook) {
        return <h1>Book not found</h1>;
    }

    const ratings = () => {
        const stars = [];
        for (let i = 1; i <= selectedBook.rating; i++) {
            stars.push(<img key={i} src={starImage} alt="Stars" />);
        }
        return stars;
    };

    return (
        <section className="book-content-container">
            <div className="top-section">
                <div className="image-container">
                    <img src={selectedBook.book_image} alt={selectedBook.book_title} />
                </div>
                <div className="details-container">
                    <div className="item">
                        <h1>{selectedBook.book_title}</h1>
                        <h3>{selectedBook.writer}</h3>
                    </div>
                    <div className="item">
                        <div className="ratings">{ratings()}</div>
                        <span>{selectedBook.read_count} read this book</span>
                    </div>
                    <div className="item2">
                        <div className="buttons-container">
                            <button>{selectedBook.tag1}</button>
                            <button>{selectedBook.tag2}</button>
                            <button>{selectedBook.tag3}</button>
                        </div>
                        <div className="information">
                            <div className="detail">
                                <h4>Pages</h4>
                                <span>{selectedBook.pages}</span>
                            </div>
                            <div className="detail">
                                <h4>The Year</h4>
                                <span>{selectedBook.year_published}</span>
                            </div>
                            <div className="detail">
                                <h4>Quotes</h4>
                                <span>{selectedBook.quotes}</span>
                            </div>
                            <div className="detail">
                                <h4>Reviews</h4>
                                <span>{selectedBook.reviews}</span>
                            </div>
                        </div>

                    </div>
                    <div className="end">
                        <span>
                            <img src={bookopen} alt="Book Open" />
                        </span>
                        <Link>Read now</Link>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <h2>About the book</h2>
                <p>{selectedBook.book_snippet}</p>
            </div>
        </section>
    );
}
