// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,  faLinkedinIn,  } from "@fortawesome/free-brands-svg-icons"; // Correction pour Twitter

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white"></h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-300">
              
            </h5>
            <div className="mt-6 flex space-x-4">
              <button
                className="bg-amber-50 text-gray-700 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
              <button
                className="bg-amber-50 text-gray-700 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </button>
              
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-amber-50 text-sm font-semibold mb-2">
                  {/* Ajouter des liens ou des contenus ici */}
                </span>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  {/* Ajouter des informations de contact ici */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-stone-50" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-stone-50 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Smartpower Technologie{" "}
              <a href="/" className="text-amber-50">- Tous droits réservés</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
