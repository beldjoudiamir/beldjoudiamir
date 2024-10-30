/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid"; // Heroicons v2
import contactJpg from "../../assets/images/contact.jpg";

export default function Contact() {
  // États pour les champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fonction de validation de l'email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation des champs
    if (!name || !email || !message) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Veuillez fournir une adresse e-mail valide.");
      return;
    }

    if (message.length < 10) {
      setError("Le message doit contenir au moins 10 caractères.");
      return;
    }

    // Envoyer les données à l'API backend
    try {
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess("Email envoyé avec succès.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Une erreur est survenue lors de l'envoi de l'email.");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Erreur lors de la connexion au serveur.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:h-full">
        {/* Formulaire de contact */}
        <div className="w-full lg:w-1/2 bg-orange-100 p-8 rounded-l-lg shadow-lg flex flex-col justify-between h-full">
          <h2 className="text-start pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-2xl">
            Contactez-nous
          </h2>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="flex-grow">
            <div className="mb-4">
              <label
                className="block mb-2 text-base font-normal text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mx-auto"
                htmlFor="name"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                aria-label="Nom complet"
                className="w-full px-3 py-2 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Entrez votre nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-base font-normal text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mx-auto"
                htmlFor="email"
              >
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                aria-label="Adresse e-mail"
                className="w-full px-3 py-2 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Entrez votre adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-base font-normal text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mx-auto"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                aria-label="Message"
                className="w-full px-3 py-2 border border-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300"
                rows="5"
                placeholder="Entrez votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 font-semibold hover:bg-orange-600 transition duration-300"
            >
              Envoyer
            </button>
          </form>

          {/* Message de succès ou d'erreur */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={contactJpg}
            alt="Image de contact"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>

      {/* Informations de contact */}
      <div className="w-full max-w-7xl mx-auto px-4 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:space-x-8">
          {/* Carte 1: Adresse */}
          <div className="bg-orange-100 shadow-lg p-6 flex flex-col items-center text-center w-full lg:w-1/3 mb-8 lg:mb-0 h-70">
            <MapPinIcon className="h-16 w-16 text-orange-600 mb-4" />
            <h3 className="text-center pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-2xl">
              Adresse
            </h3>
            <p className="text-gray-600 text-base">101 - 103 AVENUE DE L'EUROPE</p>
            <p className="text-gray-600 text-base">Centre commercial Auchan - bureau 1</p>
            <p className="text-gray-600 text-base">60180 NOGENT SUR OISE</p>
          </div>

          {/* Carte 2: Téléphone */}
          <div className="bg-orange-100 shadow-lg p-6 flex flex-col items-center text-center w-full lg:w-1/3 mb-8 lg:mb-0 h-70">
            <PhoneIcon className="h-16 w-16 text-orange-600 mb-4" />
            <h3 className="text-center pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-2xl">
              Téléphone
            </h3>
            <p className="text-gray-600 text-base">+33 3 74 47 18 57</p>
          </div>

          {/* Carte 3: Email */}
          <div className="bg-orange-100 shadow-lg p-6 flex flex-col items-center text-center w-full lg:w-1/3 h-70">
            <EnvelopeIcon className="h-16 w-16 text-orange-600 mb-4" />
            <h3 className="text-center pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-2xl">
              Email
            </h3>
            <p className="text-gray-600 text-base">contact@sp60.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
