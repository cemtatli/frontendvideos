import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Tooltip() {
  return (
    <div className="tooltip group relative flex flex-col items-start justify-center gap-2.5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-200 p-4 dark:bg-gradient-to-r dark:from-yellow-200 dark:via-yellow-300 dark:to-yellow-400 sm:items-center md:flex-row md:gap-4 ">
      <span className="text-xs md:text-sm">
        Başta Junior Frontend developerlar olmak üzere tüm geliştiricilerin sektöre girişinde yardımcı olabilecek en
        yararlı ve öğretici YouTube videolarını derleyip sunmaktadır.
      </span>
      <a
        target="_blank"
        href="https://github.com/cemtatli/frontendvideos"
        className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
      >
        Repo'ya git
      </a>
    </div>
  );
}
