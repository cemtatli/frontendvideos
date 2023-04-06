import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox({ videos, setFilteredVideos, filteredVideos }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = videos.filter((video) => video.title.toLowerCase().includes(query));
    setFilteredVideos(filtered);
    setSearchTerm(query);
  };

  return (
    <div className="relative">
      <div className="flex items-center overflow-hidden rounded-md bg-white shadow-sm">
        <div className="flex items-center justify-center p-2">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={`Listelenen ${filteredVideos.length} video arasından arama yapabilirsin. ✨`}
          className="w-full rounded-md py-2 px-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:outline-none focus:ring-0"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchTerm.length > 0 && (
        <ul className="absolute mt-1 max-h-48 w-full overflow-y-auto rounded-md bg-white shadow-md">
          {filteredVideos.map((video) => (
            <li key={video.id} className="cursor-pointer px-4 py-2 hover:bg-blue-100">
              {video.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
