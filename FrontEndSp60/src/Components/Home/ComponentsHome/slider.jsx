/* eslint-disable react/no-unescaped-entities */

import imgSlider from "../../../assets/images/bgHome.png"; // Importer directement l'image



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  dark:bg-gray-950">
      

      <div className="text-center px-4">
  <h1 className="mt-3 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-5xl dark:text-white max-w-4xl">
    Smart Power Technologie L'Excellence en Fibre Optique et Solutions Électriques
  </h1>
  <p className="mb-6 text-base font-normal text-gray-500 md:text-lg lg:text-xl sm:px-8 lg:px-20 xl:px-32 dark:text-gray-400 max-w-4xl mx-auto">
    Spécialistes de la fibre optique et des infrastructures électriques, nous vous accompagnons dans l'installation de systèmes performants, durables et innovants, incluant bornes de recharge électrique.
  </p>
</div>


      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Image Slider */}
        <div className="slider">
          <img
            src={imgSlider}
            alt="Slider"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
