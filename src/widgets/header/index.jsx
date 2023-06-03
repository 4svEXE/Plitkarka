import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "/Logo.png";

const navigation = [
  {
    path: "#FirstScreen",
    title: "Програма",
  },
  {
    path: "#Tarifs",
    title: "Ціни",
  },
  {
    path: "#message",
    title: "Написати Каті",
  },
];

export default function Header({ toggleTheme }) {
  const navigate = useNavigate();

  const linkNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white text-black w-full z-20 px-4 lg:px-6 py-2.5 sticky top-0 border-custom border-x-0 border-t-0">
      <nav className="container mx-auto max-w-7xl flex-col lg:flex-row flex items-center justify-center px-6 py-2 lg:px-8 lg:justify-between">
        <div className="flex flex-wrap items-center max-w-screen-xl">
          <div className="hidden lg:flex ">
            <a
              href="/"
              className="flex items-center"
              onClick={(e) => linkNav(e, "/")}
            >
              <img
                src={Logo}
                className="w-[200px] brightness-0"
                alt="logo plitkarka"
              />

              <span className="sr-only">Plitkarka</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap">
          {navigation.map((n) => (
            <a
              key={n.title}
              href={n.path}
              className="md:text-md sm:text-sm text-black font-semibold leading-6 p-2 py-1 "
            >
              {n.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
