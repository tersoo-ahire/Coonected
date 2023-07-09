import React from "react";
import { Link } from "react-router-dom"
import book1 from "../assets/books/bookimg1.png";
import star from "../assets/books/star.svg";
import bookopen from "../assets/books/book_open_text.svg"

export default function BookPage() {
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
                <p>In 1952, six-year-old Catherine Danielle Clark (nicknamed "Kya") watches her mother abandon her and her family due to violent abuse from her husband, Kya's father. While Kya waits in vain for her mother's return, she witnesses her older siblings, Missy, Murph, Mandy, and Jodie, all leave as well, due to their father's drinking and physical abuse.
                    Alone with her father—who temporarily stops drinking—Kya learns to fish. Her father gives her his knapsack to hold her collections of shells and feathers. The illiterate Kya paints these shells and feathers, as well as the marsh's creatures and shorelines, with watercolors her mother left behind.

                    One day, Kya finds a letter in the mailbox. Her father snatches the letter from her hands as she ran from the mailbox squealing with delight that they had finally received a letter from her mother. After reading the letter he becomes infuriated and burns the letter along with most of her mother's wardrobe and canvases. He returns to drinking and takes long, frequent trips away to gamble. Eventually, he does not return at all, and Kya assumes he is dead, making him the last of the family to leave her alone in the marsh. Without money and family, she survives by gardening and trading fresh mussels and smoked fish for money and gas from Jumpin', a Black man who owns a gasoline station at the boat dock. Jumpin' and his wife Mabel become lifelong friends to Kya, and Mabel collects donated clothing for her.

                    As Kya grows up, she faces prejudice from the townspeople of Barkley Cove, North Carolina, who nickname her "The Marsh Girl". She is laughed at by the schoolchildren the only day she goes to school and is called "nasty" and "filthy" by the pastor's wife. However, she becomes friendly with Tate Walker, an old friend of Jodie's who sometimes fishes in the marsh. When Kya loses her bearings one day, Tate leads her home in his boat. Years later, he leaves her feathers from rare birds, then teaches her how to read and write. The two form a romantic relationship until Tate leaves for college at the University of North Carolina at Chapel Hill. He promises to return, yet later realizes Kya cannot live in his more civilized world because of how wild and independent she is, and leaves her without saying goodbye.</p>
            </div>
        </section>
    )
}