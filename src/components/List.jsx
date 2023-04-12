import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import Search from "./Search";

function List() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          playlistId: import.meta.env.VITE_REACT_APP_PLAYLIST_ID,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          maxResults: 100,
        },
      })
      .then((res) => {
        setVideos(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().trim("").includes(searchTerm.toLowerCase().trim(""))
  );

  const handleAccordionTitle = (video) => {
    setActiveVideo(video.id);
    setIsOpen((prevState) => (prevState === video.id ? null : video.id));
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="container mx-auto max-w-5xl p-4 px-8 md:px-4">
      <Search setSearchTerm={setSearchTerm} filteredVideos={filteredVideos} />
      <div className="mt-4 flex w-full items-center text-xs  font-semibold text-blue-500 dark:text-white md:justify-center md:text-sm">
        Faydalı olabilecek {filteredVideos.length} video listelenmiştir.
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="overflow-hidden rounded-md bg-white shadow-md dark:bg-slate-800 dark:text-white"
          >
            <div
              className="flex cursor-pointer items-center justify-between rounded-md p-4"
              onClick={() => handleAccordionTitle(video)}
            >
              <h3 className="truncate pr-5 text-xs font-medium capitalize leading-relaxed md:text-sm">
                {video.snippet.title.toLowerCase()}
              </h3>
              <ChevronDownIcon
                width={16}
                className={`flex shrink-0 transform transition-transform ${
                  isOpen && activeVideo === video.id ? "-rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </div>
            <Transition
              show={isOpen && activeVideo === video.id}
              enter="transition duration-300 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-200 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex flex-col items-center justify-center gap-2 p-2">
                <iframe
                  className="h-96 w-full rounded-md"
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  title={video.snippet.title}
                ></iframe>
                <button
                  className="my-2.5 rounded-md bg-red-100 px-4 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-200 dark:bg-blue-100 dark:text-blue-700 dark:hover:bg-blue-200 md:hidden md:text-sm"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`)}
                >
                  Youtube'da izle 🖐️
                </button>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
}
export default List;
