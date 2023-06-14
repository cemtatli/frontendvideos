import { Search } from "lucide-react";
import React from "react";

export default function SearchBox({ setSearchTerm, filteredVideos }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={` ${filteredVideos.length} video arasından arama yapabilirsin. `}
        className="h-12 w-full truncate rounded-md border border-gray-400 px-4 py-2 pl-10 text-sm placeholder-stone-600 placeholder:text-xs focus:border-transparent focus:outline-none
         focus:ring-2 focus:ring-zinc-800 dark:border-zinc-700 dark:bg-transparent dark:text-stone-200 dark:placeholder-zinc-300 md:placeholder:text-sm"
        onChange={handleSearch}
      />
      <div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
        <Search width={20} height={20} className="text-zinc-800 dark:text-zinc-300" />
      </div>
    </div>
  );
}
