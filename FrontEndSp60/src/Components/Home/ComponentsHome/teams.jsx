import React from "react";

export default function TeamPresentation() {
  const team = [
    {
      name: "Youcef A",
      role: "President",
      description: "Avec 15 ans d'expérience dans la fibre optique et les installations électriques, ainsi qu'un bac professionnel dans le domaine, Smart Power Technologie propose des solutions fiables et durables, répondant aux exigences de chaque projet tout en garantissant sécurité et performance.",
      image: "https://via.placeholder.com/150", // Remplacez par le lien de l'image réelle
    },
    {
      name: "Lydia D",
      role: "Commercial",
      description: "Lydia a 10 ans d'expérience en tant que commerciale, avec une expertise acquise auprès des plus grands groupes mondiaux. Elle est reconnue pour son savoir-faire et sa capacité à développer des relations commerciales solides.",
      image: "https://via.placeholder.com/150", // Remplacez par le lien de l'image réelle
    },
    {
      name: "Amir B",
      role: "Associé",
      description: "Amir, informaticien de formation, s'est lancé très jeune dans le commerce. Il a fondé et revendu avec succès plusieurs entreprises dans divers secteurs, faisant de lui un entrepreneur.",
      image: "https://via.placeholder.com/150", // Remplacez par le lien de l'image réelle
    },
  ];

  return (
    <div className="bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conteneur du titre et sous-titre, centré */}
        <div className="text-center">
          <h2 className="text-center pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-3xl">
            Notre Équipe
          </h2>
          <p className="text-center mb-6 text-base font-normal text-gray-500 md:text-lg lg:text-xl">
            Découvrez les experts derrière Smart Power Technologie.
          </p>
        </div>

        {/* Grille responsive pour l'affichage des membres de l'équipe */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((person, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                /*src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mb-4 object-cover shadow-md"*/
              />
              <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
              <p className="text-orange-600 font-medium">{person.role}</p>
              <p className="text-gray-600 text-center mt-4">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
