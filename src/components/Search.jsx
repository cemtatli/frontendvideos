import React from "react";

export default function Search({ setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={`Arama Yapabilirsin ✨`}
        className="md: h-10 w-full rounded-md border border-gray-300 px-4 py-2 pl-10 text-sm placeholder-gray-400 placeholder:text-xs focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-blue-500  dark:bg-transparent dark:text-gray-200 dark:placeholder-gray-500 md:placeholder:text-sm"
        onChange={handleSearch}
      />
      <div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
          <path d="M15.5 15.5L20.5 20.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10.5" cy="10.5" r="7.5" stroke="currentColor" />
        </svg>
      </div>
    </div>
  );
}
