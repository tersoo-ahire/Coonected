import React from "react";
import { Link } from "react-router-dom";
import CopyLink from "../components/CopyLink";

export default function Invitation() {
  return (
    <section className="invitation-page">
      <div className="sub">
        <h1>Invite People</h1>
        <p>All invited people will be granted access to.......</p>
        <div className="invite">
          Invite with email
          <Link to="/invitation/success">Invite with Link</Link>
        </div>
        <b>Add to Connections</b>
        <CopyLink />
        <p>People with the link can.....</p>
      </div>
    </section>
  );
}
