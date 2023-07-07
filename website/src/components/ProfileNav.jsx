import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ProfileNav() {
  const location = useLocation();

  return (
    <div className="profile-links-container">
      <Link to="/profile/posts" className={location.pathname === "/profile/posts" ? "active" : ""}>
        Posts
      </Link>
      <Link to="/profile/about" className={location.pathname === "/profile/about" ? "active" : ""}>
        About
      </Link>
      <Link to="/profile/photos" className={location.pathname === "/profile/photos" ? "active" : ""}>
        Photos
      </Link>
      <Link to="/profile/videos" className={location.pathname === "/profile/videos" ? "active" : ""}>
        Videos
      </Link>
      <Link to="/profile/nfts" className={location.pathname === "/profile/nfts" ? "active" : ""}>
        NFTs
      </Link>
      <Link to="/profile/wallet" className={location.pathname === "/profile/wallet" ? "active" : ""}>
        Wallet
      </Link>
      <Link to="/profile/products" className={location.pathname === "/profile/products" ? "active" : ""}>
        Products
      </Link>
    </div>
  );
}
