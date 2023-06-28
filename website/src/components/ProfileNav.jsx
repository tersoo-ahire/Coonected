import React from "react";
import { Link } from "react-router-dom";

export default function ProfileNav() {
  return (
    <div className="profile-links-container">
      <Link to="#">Posts</Link>
      <Link to="#">Feed</Link>
      <Link to="#">About</Link>
      <Link to="#">Photos</Link>
      <Link to="#">Videos</Link>
      <Link to="#">NFTs</Link>
      <Link to="#">Wallet</Link>
      <Link to="#">Products</Link>
    </div>
  );
}
