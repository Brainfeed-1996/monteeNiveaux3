import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import jwt_decode from "jwt-decode";
import "./App.css"; // Correction du chemin
import Profile from "./Profile";
import Tasks from "./Tasks";
import Auth from "./Auth";
import { API_URL, TOKEN_KEY } from "./constants";
import axios from "axios";

function App() {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setUserId(decoded.id);
    }
  }, [token]);

  useEffect(() => {
    // Code à exécuter lorsque le DOM est complètement chargé
    console.log("DOM complètement chargé");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/endpoint`);
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
          <header className="header">Défis Informatique</header>
          <Routes>
            {!token ? (
              <>
                <Route
                  path="/login"
                  element={<Login setToken={setToken} setUserId={setUserId} />}
                />
                <Route
                  path="/register"
                  element={
                    <Register setToken={setToken} setUserId={setUserId} />
                  }
                />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={<Dashboard token={token} userId={userId} />}
                />
                <Route path="/profile" element={<Profile userId={userId} />} />
                <Route path="/tasks" element={<Tasks userId={userId} />} />
                <Route path="/auth" element={<Auth token={token} />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
