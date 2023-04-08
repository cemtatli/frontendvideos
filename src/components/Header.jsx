import React from "react";
import ThemeChanger from "./ThemeChanger";
import { BsTwitter } from "react-icons/bs";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-12 w-full items-center justify-center gap-4 bg-blue-200 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      <a href="https://www.twitter.com/vaycem" target="_blank">
        <BsTwitter className="h-4 w-4" />
      </a>
      <div>frontendvideos✨</div> <ThemeChanger />
    </header>
  );
}
