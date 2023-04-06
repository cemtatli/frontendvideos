import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-5 w-10 items-center justify-center rounded-full  bg-white transition-all duration-300 focus:outline-none "
    >
      <span className="sr-only">Switch Theme</span>
      <span
        className={`focus:ring-2transition-all absolute inset-y-0 left-0 flex h-5 w-5 transform items-center justify-center rounded-full shadow-lg duration-300 ${
          theme === "light" ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? <MoonIcon width={14} className=" text-blue-900" /> : <SunIcon width={14} className=" text-yellow-500" />}
      </span>
    </button>
  );
}
