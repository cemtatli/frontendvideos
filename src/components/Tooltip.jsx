import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Tooltip() {
  const handleTooltipClose = () => {
    document.querySelector(".tooltip").classList.add("hidden");
  };

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
      <button
        onClick={handleTooltipClose}
        aria-label="Kapat"
        className="absolute right-2.5 bottom-5 h-4 w-4 shrink-0 cursor-pointer rounded-full text-gray-900 transition duration-100 hover:scale-110 hover:text-gray-900 hover:ring-1 hover:ring-gray-900 hover:ring-offset-gray-900 md:top-1/2 md:-translate-y-1/2  "
      >
        <XMarkIcon className="h-full w-full" />
      </button>
    </div>
  );
}
