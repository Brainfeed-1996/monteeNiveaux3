const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const fs = require("fs");
const https = require("https");

app.use(express.json());

// Routes pour les utilisateurs et les tâches
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// Route pour la racine
app.get("/", (req, res) => {
  res.send("Bienvenue sur la page d'accueil !");
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Chemins vers les fichiers de certificat et de clé privée
const pathToPrivateKey =
  "D:/Documents/Téléchargements/OpenSSL-Win64/bin/private.key";
const pathToCertificate =
  "D:/Documents/Téléchargements/OpenSSL-Win64/bin/certificate.crt";

// Vérifiez si les fichiers existent
if (fs.existsSync(pathToPrivateKey) && fs.existsSync(pathToCertificate)) {
  const privateKey = fs.readFileSync(pathToPrivateKey, "utf8");
  const certificate = fs.readFileSync(pathToCertificate, "utf8");
  const credentials = { key: privateKey, cert: certificate };

  // Créer un serveur HTTPS
  const httpsServer = https.createServer(credentials, app);

  // Démarrer le serveur sur un port sécurisé (443 ou autre)
  httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });
} else {
  console.error(
    "Les fichiers de certificat ou de clé privée sont introuvables."
  );
}
