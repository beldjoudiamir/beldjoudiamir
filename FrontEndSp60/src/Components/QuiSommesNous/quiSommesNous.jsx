// import React from 'react';
import photoFibre from "../../assets/images/bgq1.jpg";  
// eslint-disable-next-line quotes
import photoElectric from "../../assets/images/bgq2.jpg";  

export default function CompanyPresentation() {
  const sections = [
    {
      image: photoFibre,
      imageAlt: "Installation de fibre optique",
      text: [
        `Chez Smart Power Technologie, nous mettons notre expertise au service de la réussite de vos projets technologiques. 
        Dirigée par Monsieur Azzi Youssef, expert reconnu avec plus de 15 ans d’expérience dans les télécommunications, 
        l’entreprise est spécialisée dans l’installation de réseaux de fibre optique (D1, D2, D3), les solutions de branchement complexes, 
        ainsi que les installations électriques pour tous types de bâtiments. Nous sommes engagés à offrir des solutions sur mesure, 
        alliant innovation, performance et durabilité.`,
        `Que vous soyez à la recherche d'une infrastructure réseau robuste ou d'une installation électrique optimisée, 
        nous assurons une qualité irréprochable à chaque étape du processus. Nos services incluent l'étude, la planification, 
        le creusage, la pose de câbles, le raccordement, ainsi que la mise en service et la maintenance des équipements. 
        En tant que partenaire de confiance, nous nous engageons à respecter les normes les plus strictes, tout en vous garantissant 
        une installation efficace et durable.`,
        `Notre savoir-faire dans les solutions de branchement complexes nous permet de surmonter les défis les plus exigeants, 
        qu’il s’agisse de zones densément peuplées, de bâtiments anciens ou de régions rurales. Nous fournissons également 
        des solutions complètes pour les bornes de recharge pour véhicules électriques, contribuant ainsi à la transition énergétique 
        de vos infrastructures.`
      ],
      reverse: false,
    },
    {
      image: photoElectric,
      imageAlt: "Installation électrique et bornes de recharge",
      text: [
        `La sécurité étant une priorité pour nous, nous installons des systèmes de caméras de surveillance modernes et performants, 
        adaptés à vos besoins, garantissant une protection continue des biens et des personnes dans tous types de locaux, 
        qu'ils soient résidentiels, commerciaux ou industriels.`,
        `Grâce à nos études techniques approfondies, en collaboration avec nos partenaires spécialisés, nous analysons minutieusement 
        vos besoins pour proposer des solutions optimisées, qui respectent les exigences techniques et les normes en vigueur. 
        Chaque projet est personnalisé et conçu pour maximiser la performance et la longévité des installations.`,
        `L’équipe de Smart Power Technologie est composée de professionnels chevronnés, comme Youcef A, un leader technique avec 15 ans d'expérience 
        dans la fibre optique et les installations électriques, Lydia D, une commerciale experte dans le développement de relations avec les plus grands 
        groupes mondiaux, et Amir B, un entrepreneur dynamique ayant lancé et revendu plusieurs entreprises avec succès. Ensemble, nous sommes à vos côtés 
        pour transformer vos idées en réalité, en vous offrant des solutions fiables, innovantes et durables.`,
        `Nous nous engageons à dépasser vos attentes et à vous accompagner dans vos projets les plus ambitieux, en vous assurant une excellence opérationnelle 
        et un service client irréprochable. Faites confiance à Smart Power Technologie pour construire des infrastructures qui répondent à vos besoins aujourd'hui, 
        tout en vous préparant aux défis de demain.`
      ],
      reverse: true,
    },
  ];

  return (
    <section className="bg-amber-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-center pt-10 m-10 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-3xl dark:text-white max-w-4xl mx-auto">
          QUI SOMMES NOUS ?
        </h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-12`}
          >
            <div className="md:w-1/2 p-4">
              <img src={section.image} alt={section.imageAlt} className=" shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              {section.text.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-6 text-base font-normal text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mx-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
