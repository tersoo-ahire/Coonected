import React from "react";
import book1 from "../assets/books/bookimg1.png";
import star from "../assets/books/star.svg";

export default function BookPage(){
    return (
        <section className="book-content-container">
            <div className="top-section">
                <div className="image-container">
                    <img src={book1} alt="Book" />
                </div>
                <div className="details-container">
                    <h1>One Last Stop</h1>
                    <h3>Linda Krux</h3>
                    <img src={star} alt="Star" />
                    <span>156k read this book</span>
                    <div className="buttons-container">
                        <button>Romance</button>
                        <button>Social Fiction</button>
                        <button>Live Fiction</button>
                    </div>
                    <div className="information">
                        <div className="detail">
                            <h4>Pages</h4>
                            <span>5898</span>
                        </div>
                        <div className="detail">
                            <h4>The Year</h4>
                            <span>2019</span>
                        </div>
                        <div className="detail">
                            <h4>Quotes</h4>
                            <span>99</span>
                        </div>
                        <div className="detail">
                            <h4>Reviews</h4>
                            <span>198</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-section">

            </div>
        </section>
    )
}