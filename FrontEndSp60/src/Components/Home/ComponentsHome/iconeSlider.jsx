import React, { useEffect, useRef } from "react";
import { FaCar, FaChargingStation, FaWifi, FaLock, FaTools, FaLightbulb } from "react-icons/fa"; // Exemple d'icônes

export default function IconSlider() {
  const sliderRef = useRef(null); // Référence pour le conteneur du slider

  // Défilement automatique
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideWidth = slider.scrollWidth / slider.childElementCount; // Largeur d'un slide

    const autoScroll = setInterval(() => {
      scrollAmount += slideWidth;
      if (scrollAmount >= slider.scrollWidth) {
        scrollAmount = 0; // Réinitialise le scroll à zéro quand on arrive à la fin
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2000); // Défilement toutes les 2 secondes

    return () => clearInterval(autoScroll); // Nettoie l'intervalle lors du démontage du composant
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white flex justify-center items-center">
      {/* Conteneur du slider */}
      <div
        ref={sliderRef}
        className="flex space-x-8 overflow-x-auto p-4 scroll-smooth snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Icône 1 */}
        <div className="flex-shrink-0 snap-center">
          <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center">
            <FaCar className="text-4xl text-orange-600 mb-4" />
            <p className="text-gray-700 text-center">Voitures Électriques</p>
          </div>
        </div>

        {/* Icône 2 */}
        <div className="flex-shrink-0 snap-center">
          <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center">
            <FaChargingStation className="text-4xl text-orange-600 mb-4" />
            <p className="text-gray-700 text-center">Stations de Recharge</p>
          </div>
        </div>

        {/* Icône 3 */}
        <div className="flex-shrink-0 snap-center">
          <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center">
            <FaWifi className="text-4xl text-orange-600 mb-4" />
            <p className="text-gray-700 text-center">Connexions Wifi</p>
          </div>
        </div>

        {/* Icône 4 */}
        <div className="flex-shrink-0 snap-center">
          <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center">
            <FaLock className="text-4xl text-orange-600 mb-4" />
            <p className="text-gray-700 text-center">Sécurité</p>
          </div>
        </div>

        {/* Icône 5 */}
        <div className="flex-shrink-0 snap-center">
          <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center">
            <FaTools className="text-4xl text-orange-600 mb-4" />
            <p className="text-gray-700 text-center">Outils Techniques</p>
          </div>
        </div>

        {/* Icône 6 */}
        <div className="flex-shrink-0 snap-center">
          <div className="bg-orange-100 p-6 rounded-lg flex flex-col items-center">
            <FaLightbulb className="text-4xl text-orange-600 mb-4" />
            <p className="text-gray-700 text-center">Solutions d'Éclairage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
