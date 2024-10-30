/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import imageSrc from "../../../assets/images/service.jpg";

export default function AutreService() {
  return (
    <div className="bg-orange-100 p-6 rounded-lg overflow-hidden">
      {/* Conteneur principal pour gérer la disposition en ligne ou en colonne */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8 m-10">
        
        {/* Image à gauche sur les grands écrans, en haut sur les petits */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={imageSrc}
            alt="Smart Power Technologie"
            className="h-64 md:h-full w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Texte à droite sur les grands écrans, en dessous sur les petits */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
          <h2 className="text-start pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-3xl">
            Smart Power Technologie Votre Partenaire en Solutions Innovantes et Durables
          </h2>
          <p className="mb-6 text-base font-normal text-gray-500 md:text-lg lg:text-xl">
          Chez Smart Power Technologie, nous mettons à votre disposition notre expertise dans le déploiement de solutions technologiques innovantes et fiables. Spécialisés dans la fibre optique, les installations électriques, et les systèmes de sécurité, nous avons bâti une réputation solide fondée sur la qualité de nos services et la satisfaction de nos clients. En respectant les normes les plus strictes et en proposant des solutions sur mesure, nous sommes un partenaire de confiance pour tous vos projets. Ensemble, nous créons des infrastructures durables, performantes et adaptées à vos besoins. Faites confiance à notre expertise pour vous accompagner dans vos projets les plus ambitieux.
          </p>
        </div>
      </div>
    </div>
  );
}
