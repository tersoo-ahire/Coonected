import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BooksNav() {
  const [activeLink, setActiveLink] = useState("ebooks");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname.substring(1));
  }, [location.pathname]);

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
