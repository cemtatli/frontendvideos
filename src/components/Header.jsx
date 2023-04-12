import React from "react";
import ThemeChanger from "./ThemeChanger";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 ">
      <div className="flex w-full flex-col items-center justify-between gap-x-5 bg-blue-200 p-4 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
        <nav className="flex flex-1 items-center justify-center gap-4">
          <Link to={"/"}> frontendvideos ✨</Link>
          <ThemeChanger />
        </nav>
      </div>
      <div className="w-full bg-blue-900 py-1 text-center text-sm font-medium text-white dark:bg-blue-200 dark:text-blue-800  ">
        <Link to={"/channel"}>Kanallara göz at!</Link>
      </div>
    </header>
  );
}
