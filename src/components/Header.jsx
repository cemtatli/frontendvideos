import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "@headlessui/react";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 flex w-full flex-col items-center justify-between gap-x-5 border-zinc-800 bg-zinc-900 p-4 text-sm font-medium text-white dark:border-b dark:text-stone-200">
      <nav className="container mx-auto ml-auto flex max-w-5xl flex-1 justify-center gap-4 md:justify-end md:gap-6 md:px-4">
        <NavLink to={"/"} className="shrink-0 transition-colors duration-200 ease-in-out hover:text-red-400">
          Ana Sayfa
        </NavLink>
        <NavLink to={"/channel"} className="shrink-0 transition-colors duration-200 ease-in-out hover:text-red-400">
          Kaynak
        </NavLink>

        <Menu as="div" className="relative">
          <Menu.Button onClick={handleMenuOpen} className="flex items-center hover:text-red-400">
            Diğer Projeler
          </Menu.Button>
          {isMenuOpen && (
            <Menu.Items className="absolute right-0 mt-2 w-fit  overflow-hidden rounded border border-zinc-800 bg-zinc-900 shadow-lg">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://roadmap.sh/frontend"
                    target="_blank"
                    className={`block px-4 py-2 text-sm ${active ? "bg-zinc-800 " : ""}`}
                  >
                    Yol Haritası
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="http://lugat.website/"
                    target="_blank"
                    className={`block px-4 py-2 text-sm ${active ? "bg-zinc-800 " : ""}`}
                  >
                    Terim Sözlüğü
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="http://lugat.website/"
                    target="_blank"
                    className={`block px-4 py-2 text-sm ${active ? "bg-zinc-800 " : ""}`}
                  >
                    Mülakat Soruları
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </Menu>
        <ThemeChanger />
      </nav>
    </header>
  );
}
