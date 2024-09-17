import React, { useState } from "react";
import "./App.css";

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Inscription" : "Connexion"}</h2>
      {isRegistering ? (
        <form id="register-form">
          <label htmlFor="new-username">Nom d'utilisateur :</label>
          <input type="text" id="new-username" name="username" required />
          <label htmlFor="new-password">Mot de passe :</label>
          <input type="password" id="new-password" name="password" required />
          <button type="submit">S'inscrire</button>
        </form>
      ) : (
        <form id="login-form">
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Se connecter</button>
        </form>
      )}
      <p>
        {isRegistering ? "Déjà inscrit ?" : "Pas encore inscrit ?"}{" "}
        <a href="#" onClick={toggleForm}>
          {isRegistering ? "Se connecter" : "S'inscrire"}
        </a>
      </p>
      <button onClick={() => console.log("Déconnexion")}>Déconnexion</button>
    </div>
  );
}

export default Auth;
