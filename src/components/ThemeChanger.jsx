import React, { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon width={16} height={16} />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <MoonIcon width={16} height={16} />
        </button>
      )}
    </>
  );
}
