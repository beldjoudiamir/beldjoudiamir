/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import Sel1 from "../../../assets/images/sel1.jpg";
import Sel2 from "../../../assets/images/sel2.jpg";
import Sel3 from "../../../assets/images/sel3.jpg";
import Sel4 from "../../../assets/images/sel4.jpg";
import Sel5 from "../../../assets/images/sel5.jpg";
import Sel6 from "../../../assets/images/sel6.jpg";
import Sel7 from "../../../assets/images/sel6.jpg";





export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-amber-50 pt-14">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-start pt-10 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-700 md:text-4xl lg:text-3xl dark:text-white max-w-4xl mx-auto">
            L'Innovation au Service de vos Projets
            </h1>
            <p className="mb-6 text-base font-normal text-gray-500 md:text-lg lg:text-xl  dark:text-gray-400  mx-auto">
            Chez Smart Power Technologie, nous offrons des solutions technologiques complètes et innovantes, adaptées aux besoins de nos clients. Nous sommes experts dans le déploiement de la fibre optique à travers les phases clés : le transport (D1), la distribution (D2) et le raccordement final (D3). Nos services garantissent des installations fiables et conformes aux normes, assurant la performance des réseaux. Nous excellons également dans les solutions de branchement complexes, permettant d’adapter nos techniques dans des environnements contraignants, tels que les zones densément peuplées, les bâtiments anciens ou les régions rurales. En parallèle, nous fournissons des installations électriques complètes pour tout type de locaux, en intégrant des bornes de recharge pour véhicules électriques et en assurant la maintenance des systèmes, tout en respectant les standards de sécurité et d’efficacité énergétique les plus rigoureux.
            </p>
            <p className="mb-6 text-base font-normal text-gray-500 md:text-lg lg:text-xl  dark:text-gray-400  mx-auto">
            Concernant la sécurité, nous installons des systèmes de caméras de surveillance modernes et personnalisés, garantissant une protection continue des biens et des personnes dans les environnements résidentiels, commerciaux ou industriels. Enfin, notre expertise s’étend aux études techniques, où nos équipes, en collaboration avec des partenaires spécialisés, analysent les besoins de chaque projet pour proposer des solutions sur mesure, optimisées et conformes aux normes en vigueur, que ce soit pour des installations électriques ou des réseaux de fibre optique.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={Sel1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Sel2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Sel3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Sel4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Sel5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Sel6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Sel7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
