import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProfileNav() {
  const [activeLink, setActiveLink] = useState("posts");

  useEffect(() => {
    setActiveLink("posts");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="profile-links-container">
      <Link
        to="./posts"
        className={activeLink === "posts" ? "active" : ""}
        onClick={() => handleLinkClick("posts")}
      >
        Posts
      </Link>
      <Link
        to="./about"
        className={activeLink === "about" ? "active" : ""}
        onClick={() => handleLinkClick("about")}
      >
        About
      </Link>
      <Link
        to="./photos"
        className={activeLink === "photos" ? "active" : ""}
        onClick={() => handleLinkClick("photos")}
      >
        Photos
      </Link>
      <Link
        to="./videos"
        className={activeLink === "videos" ? "active" : ""}
        onClick={() => handleLinkClick("videos")}
      >
        Videos
      </Link>
      <Link
        to="./nfts"
        className={activeLink === "nfts" ? "active" : ""}
        onClick={() => handleLinkClick("nfts")}
      >
        NFTs
      </Link>
      <Link
        to="./wallet"
        className={activeLink === "wallet" ? "active" : ""}
        onClick={() => handleLinkClick("wallet")}
      >
        Wallet
      </Link>
      <Link
        to="./products"
        className={activeLink === "products" ? "active" : ""}
        onClick={() => handleLinkClick("products")}
      >
        Products
      </Link>
    </div>
  );
}
