import React from "react";
import ThemeChanger from "./ThemeChanger";
import { NavLink } from "react-router-dom";
import { InboxIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex  w-full flex-col items-center justify-between gap-x-5 bg-blue-200 p-4 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      <nav className="flex flex-1 items-center justify-center gap-4">
        <NavLink to={"/"}> frontendvideos ✨</NavLink>
        <ThemeChanger />
      </nav>
    </header>
  );
}
