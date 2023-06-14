import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { MoonStar, Sun } from "lucide-react";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-5 w-10 items-center justify-center rounded-full
    bg-zinc-700 ring-2 ring-zinc-800 transition-all duration-300 focus:outline-none"
    >
      <span
        className={`absolute inset-y-0 left-0 flex h-5 w-5 transform items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 ${
          theme === "light" ? "translate-x-5 rotate-45" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <MoonStar size={14} className="text-zinc-100" />
        ) : (
          <Sun size={14} className="text-zinc-100" />
        )}
      </span>
    </button>
  );
}
