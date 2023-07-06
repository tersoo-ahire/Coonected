import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BooksNav() {
  const [activeLink, setActiveLink] = useState("ebooks");

  useEffect(() => {
    setActiveLink("ebooks");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="books-links-container">
      <Link
        to="./all"
        className={activeLink === "all" ? "active" : ""}
        onClick={() => handleLinkClick("all")}
      >
        All
      </Link>
      <Link
        to="./ebooks"
        className={activeLink === "ebooks" ? "active" : ""}
        onClick={() => handleLinkClick("ebooks")}
      >
        eBooks
      </Link>
      <Link
        to="./audiobooks"
        className={activeLink === "audiobooks" ? "active" : ""}
        onClick={() => handleLinkClick("audiobooks")}
      >
        Audiobooks
      </Link>
    </div>
  );
}
