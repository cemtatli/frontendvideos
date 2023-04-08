import React from "react";

export default function Search({ filteredVideos, setSearchTerm }) {
  return (
    <>
      <input
        type="text"
        placeholder={`Listelenen ${filteredVideos.length} video arasından arama yapabilirsin. ✨`}
        className="h-10 w-full rounded border border-gray-400 px-4 py-2 text-xs outline-none placeholder:text-xs dark:border-blue-200  md:text-sm md:placeholder:text-sm"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </>
  );
}
