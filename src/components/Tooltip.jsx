import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Tooltip() {
  return (
    <div className="tooltip group relative flex w-full flex-col items-start justify-center gap-2.5 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-200 px-4 py-2.5 dark:bg-gradient-to-r dark:from-yellow-200 dark:via-yellow-300 dark:to-yellow-400 sm:items-center md:flex-row md:gap-4">
      <span className="pr-5 text-xs sm:text-sm md:pr-0">
        Başta Frontend developerlar olmak üzere tüm developerlar için en yararlı ve öğretici YouTube videoları bir araya getirir ve sunar.
      </span>
      <a target="_blank" href="https://github.com/cemtatli/frontendvideos">
        <span
          aria-hidden="true"
          className="mr-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
        >
          Repo'ya git
        </span>
      </a>
      <XMarkIcon
        onClick={() => {
          document.querySelector(".tooltip").classList.toggle("hidden");
        }}
        aria-hidden="true"
        className="absolute right-2.5 bottom-2.5 h-4 w-4 shrink-0 cursor-pointer rounded-full text-gray-700 transition duration-100 hover:scale-110 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 hover:ring-offset-gray-900 md:bottom-3.5"
      />
    </div>
  );
}
