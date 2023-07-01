import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "../components/Search";
import Group from "../components/Group";
import groupdata from "../data/group";
import Connections from "../components/Coonections";
import connectiondata from "../data/connections";
import Navigation from "../components/Navigation";
import UserProfile from "../components/Userprofile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileNav from "../components/ProfileNav";
import Activities from "../components/Activities";
// PROFILE COMPONENTS or PAGES used for Profile Navigation Routes
import Posts from "../components/Posts"; 
import About from "../components/About"; 
import Photos from "../components/Photos";
import Videos from "../components/Videos";
import NFTs from "../components/NFTs";
import Wallet from "../components/Wallet";
import Products from "../components/Products";

export default function Profile() {
  const grouplist = groupdata.map((item) => <Group key={item.id} {...item} />);
  const connectionlist = connectiondata.map((item) => (<Connections key={item.id} {...item} /> ));

  return (
    // PROFILE PAGE SECTION
    <section className="profile-page">
      <div className="left-section">
        <Search />
        <div className="group-container">
          <h2>Groups</h2>
          {grouplist}
        </div>
        <div className="connection-container">
          <h2>Coonections</h2>
          <div className="connection-sub-container">{connectionlist}</div>
        </div>
      </div>
      <div className="right-section">
        <div className="top-container">
          <div className="first-area">
            <Navigation />
            <UserProfile />
          </div>
          <div className="second-area">
            <ProfileHeader />
            <ProfileNav />
          </div>
        </div>
        <div className="bottom-container">
          <div className="left-area">
            <Routes>
              <Route path="/" element={<Navigate to="posts" replace />} />
              <Route path="posts" element={<Posts />} />
              <Route path="about" element={<About />} />
              <Route path="photos" element={<Photos />} />
              <Route path="videos" element={<Videos />} />
              <Route path="nfts" element={<NFTs />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="products" element={<Products />} />
            </Routes>
          </div>
          <div className="right-area">
            <Activities />
          </div>
        </div>
      </div>
    </section>
  );
}
