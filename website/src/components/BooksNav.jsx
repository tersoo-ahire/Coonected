import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BooksNav() {
  const location = useLocation();

  return (
    <div className="books-links-container">
      <Link to="/books/all" className={ location.pathname === "/books/all" ? "active" : ""}>
        All
      </Link>
      <Link to="/books/ebooks" className={ location.pathname === "/books/ebooks" ? "active" : ""}>
        eBooks
      </Link>
      <Link to="/books/audiobooks" className={ location.pathname === "/books/audiobooks" ? "active" : ""}>
        Audiobooks
      </Link>
    </div>
  );
}
