import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/Design sans titre (21).png";
import "./Style.scss";

export default function Navbar() {
  const leftmenu = [
    { label: "ACCUEIL", href: "/" },
    { label: "QUI SOMMES-NOUS ?", href: "/quiSommesNous" },
    { label: "NOS REALISATIONS", href: "/realisations" },
  ];

  const rightmenu = [
    { label: "DEVIS", href: "/devis" },
    { label: "CONTACTEZ-NOUS", href: "/contact" },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-50">
      <Disclosure>
        {({ open }) => (
          <>
            {/* Menu Desktop */}
            <div className="flex flex-wrap justify-between items-center md:flex-nowrap md:gap-10 px-4 md:px-8 ">
              {/* Menu Gauche */}
              <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                {leftmenu.map((item, index) => (
                  <Fragment key={`${item.label}${index}`}>
                    <Link
                      to={item.href}
                      className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-slate-800 dark:text-gray-400"
                    >
                      {item.label}
                    </Link>
                  </Fragment>
                ))}
              </div>

              {/* Logo */}
              <div className="LogoNav flex w-full items-center justify-center md:w-auto">
                <Link to="/" className="w-28 dark:hidden">
                  <img
                    src={Image}
                    alt="Logo"
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 740px) 100vw, 200px"
                  />
                </Link>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-slate-800 focus:outline-none dark:text-gray-300 md:hidden"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>

              {/* Menu Droit */}
              <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                {rightmenu.map((item, index) => (
                  <Fragment key={`${item.label}${index}`}>
                    <Link
                      to={item.href}
                      className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-slate-800 dark:text-gray-400"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Menu Mobile */}
            <Disclosure.Panel className="md:hidden">
              <div className="flex flex-col items-center justify-start px-4 py-4 space-y-2">
                {mobilemenu.map((item, index) => (
                  <Fragment key={`${item.label}${index}`}>
                    <Link
                      to={item.href}
                      className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-slate-800 dark:text-gray-400"
                      onClick={() => setOpen(false)} 
                    >
                      {item.label}
                    </Link>
                  </Fragment>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
}
