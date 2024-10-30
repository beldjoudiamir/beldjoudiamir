require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ajouter le module cors pour les requêtes cross-origin
const multer = require('multer'); // Importation de multer pour gérer les fichiers
const path = require('path'); // Importation de path pour les chemins de fichiers


const app = express();
const port = process.env.PORT || 3000;

// Utiliser cors pour autoriser les requêtes venant de 'http://localhost:5173'
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middleware pour parser les requêtes en JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurer multer pour le téléchargement de fichiers
const upload = multer({ storage: multer.memoryStorage() });

// Configurer Nodemailer avec votre service de messagerie
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // ou tout autre SMTP que vous utilisez
  port: 465, // Port pour SSL
  secure: true, // Utilisez SSL
  auth: {
    user: process.env.EMAIL_USER, // Utilisation de variables d'environnement
    pass: process.env.EMAIL_PASS // Utilisation de variables d'environnement
  }
});

// Fonction pour valider les adresses email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}


// Servir les fichiers statiques de React
app.use(express.static(path.join(__dirname, "build")));

// Rediriger toutes les requêtes vers le fichier index.html de React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Route pour la page d'accueil (optionnel si vous avez une application front-end séparée)
app.get('/', (req, res) => {
  res.send('<p>... start</p>');
});

// API POST pour recevoir et envoyer l'email simple
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Valider que les champs requis sont bien présents
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Veuillez remplir tous les champs requis (nom, email, message).' });
  }

  // Valider l'adresse email
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Veuillez fournir une adresse email valide.' });
  }

  // Options de l'email avec votre propre adresse dans le champ "from"
  const mailOptions = {
    from: 'email@sp60.fr', // Utilisez votre propre adresse comme expéditeur
    replyTo: email, // L'adresse de l'utilisateur pour la réponse
    to: 'email@sp60.fr', // Votre adresse de réception
    subject: `Nouveau message de ${name}`, 
    text: `De: ${name} <${email}>\n\n${message}` // Inclure les détails de l'utilisateur dans le message
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email.' });
    }
    res.status(200).json({ message: 'Email envoyé avec succès' });
  });
});

// API POST pour recevoir les données de devis et envoyer l'email avec pièce jointe
app.post('/api/send-devis', upload.single('planFile'), (req, res) => {
  const { name, companyName, email, phone, projectType, region, details } = req.body;
  const planFile = req.file; // Fichier PDF envoyé en pièce jointe

  // Valider les champs requis
  if (!name || !email || !phone || !projectType || !region) {
    return res.status(400).json({ error: 'Veuillez remplir tous les champs requis.' });
  }

  // Valider l'adresse email
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Veuillez fournir une adresse email valide.' });
  }

  // Configuration de l'email
  const mailOptions = {
    from: 'email@sp60.fr',
    replyTo: email,
    to: 'email@sp60.fr',
    subject: `Nouvelle demande de devis de ${name}`,
    text: `
      Nom: ${name}
      Société: ${companyName || 'Non spécifiée'}
      Email: ${email}
      Téléphone: ${phone}
      Type de projet: ${projectType}
      Région: ${region}
      Détails supplémentaires: ${details || 'Aucun détail supplémentaire'}
    `,
    attachments: planFile ? [
      {
        filename: planFile.originalname,
        content: planFile.buffer,
        contentType: 'application/pdf'
      }
    ] : [] // Ajouter la pièce jointe seulement si elle existe
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
    }
    res.status(200).json({ message: 'Demande de devis envoyée avec succès' });
  });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur tourne sur http://localhost:${port}`);
});
