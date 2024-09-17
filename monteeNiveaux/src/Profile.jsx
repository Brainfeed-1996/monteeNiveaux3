import React from "react";
import "./App.css";

function Profile() {
  return (
    <section className="profile">
      <h2>Profil</h2>
      <p>
        <strong>Niveau :</strong> <span id="user-level">1</span>
      </p>
      <p>
        <strong>Expérience :</strong> <span id="user-xp">0</span> /{" "}
        <span id="xp-needed">100</span>
      </p>
    </section>
  );
}

export default Profile;
