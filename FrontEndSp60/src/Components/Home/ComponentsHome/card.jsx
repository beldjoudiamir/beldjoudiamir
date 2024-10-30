/* eslint-disable react/no-unescaped-entities */
import iconeFibre from "../../../assets/images/DALL1.jpg";
import iconeSolutions from "../../../assets/images/network_maintenance_icon.png";
import iconeCamera from "../../../assets/images/cameraIcone.png";
import iconeTechnique from "../../../assets/images/DALL2.png";
import iconeElec from "../../../assets/images/elec.png";

export default function Specialities() {
  const cards = [
    {
      id: 1,
      imgSrc: iconeFibre,
      imgAlt: "Installation de fibre D1 et D2",
      title: "Fibre D1, D2, D3 et transport",
      description: "Chez Smart Power Technologie, nous sommes spécialisés dans l’installation et le déploiement des réseaux de fibre optique à toutes les étapes critiques du processus, de la conception à la réalisation."
    },
    {
      id: 2,
      imgSrc: iconeSolutions,
      imgAlt: "Solutions de branchement complexes",
      title: "Solutions de Branchement Complexes",
      description: "Nous sommes spécialisés dans les solutions de branchement complexes, notamment dans les environnements difficiles ou les zones rurales."
    },
    {
      id: 3,
      imgSrc: iconeElec,
      imgAlt: "Installations électriques",
      title: "Installations Électriques",
      description: "Nous offrons des installations électriques complètes pour tous types de locaux, incluant la maintenance et l'installation de bornes de recharge, tout en respectant les normes de sécurité et d'efficacité énergétique."
    },
    {
      id: 4,
      imgSrc: iconeCamera,
      imgAlt: "Caméras de surveillance",
      title: "Caméras de Surveillance",
      description: "Nous installons des systèmes de caméras de surveillance adaptés à vos besoins pour garantir la sécurité de vos locaux, qu'ils soient résidentiels, commerciaux ou industriels."
    },
    {
      id: 5,
      imgSrc: iconeTechnique,
      imgAlt: "Études techniques et projets",
      title: "Études Techniques",
      description: "Nous effectuons des études techniques pour assurer la réussite de vos projets électriques et fibre optique, en proposant des solutions sur mesure conformes aux normes les plus strictes."
    }
  ];

  return (
    <section className="text-gray-700 body-font bg-orange-100">
      <div className="text-center pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-3xl dark:text-white max-w-4xl mx-auto">
        Nos Solutions Innovantes
      </div>
      <p className="mb-6 text-center text-base font-normal text-gray-500 md:text-lg lg:text-xl sm:px-8 lg:px-20 xl:px-32 dark:text-gray-400 max-w-4xl mx-auto">
        Spécialistes de la fibre optique et des infrastructures électriques, nous vous accompagnons dans l'installation de systèmes performants, durables et innovants, incluant bornes de recharge électrique.
      </p>

      <div className="container px-5 py-12 mx-auto max-w-7xl">
        <div className="flex flex-wrap text-center justify-center">
          {cards.map((card) => (
            <div key={card.id} className="p-4 md:w-1/3 sm:w-1/2">
              <div className="h-96 w-full bg-amber-50 shadow-lg px-4 py-6 flex flex-col justify-between transform transition duration-500 hover:scale-105">
                <div className="flex justify-center">
                  <img src={card.imgSrc} className="w-32 mb-3" alt={card.imgAlt} />
                </div>
                <h2 className="title-font font-regular text-2xl text-gray-900">
                  {card.title}
                </h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
