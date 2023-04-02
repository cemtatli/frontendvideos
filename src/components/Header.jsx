import React from "react";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-12 w-full items-center justify-center gap-5 bg-blue-200 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 ">
      <div className="">frontendvideos.</div> <ThemeChanger />
    </header>
  );
}
