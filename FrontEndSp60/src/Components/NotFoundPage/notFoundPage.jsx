/* eslint-disable react/no-unescaped-entities */
// NotFoundPage.jsx

import { Link } from "react-router-dom"; // Utilisation de Link pour rediriger

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-amber-50 text-center p-6">
      <h1 className="text-9xl font-extrabold text-orange-500 mb-4">404</h1>
      <h2 className="text-4xl font-bold text-gray-700 mb-2">
        Oups! Page introuvable.
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/" // Retour à la page d'accueil
        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
