import { useState, useEffect } from "react";
import axios from "axios";
import { Transition } from "@headlessui/react";
import Search from "./Search";
import { ChevronDownIcon } from "lucide-react";

function List() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const initialResponse = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          playlistId: import.meta.env.VITE_REACT_APP_PLAYLIST_ID,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          maxResults: 50,
        },
      });
      const initialVideos = initialResponse.data.items;
      setVideos(initialVideos);

      const nextPageToken = initialResponse.data.nextPageToken;
      if (nextPageToken) {
        // Fetch remaining videos using nextPageToken for pagination {thx chatgpt💠}
        const remainingResponse = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
          params: {
            part: "snippet",
            playlistId: import.meta.env.VITE_REACT_APP_PLAYLIST_ID,
            key: import.meta.env.VITE_REACT_APP_API_KEY,
            maxResults: 50,
            pageToken: nextPageToken,
          },
        });
        const remainingVideos = remainingResponse.data.items;
        setVideos((prevVideos) => [...prevVideos, ...remainingVideos]);
      }
    };

    fetchVideos();
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
    <main className="container mx-auto  h-full max-w-5xl p-4 px-8 md:px-4">
      <Search setSearchTerm={setSearchTerm} filteredVideos={filteredVideos} />
      <div className="mt-4 flex flex-col gap-4">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="overflow-hidden rounded-md bg-white shadow transition-all duration-150 dark:border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            <div
              className="flex cursor-pointer items-center justify-between rounded-md p-3"
              onClick={() => handleAccordionTitle(video)}
            >
              <h3 className="truncate pr-5 text-xs font-medium capitalize leading-relaxed md:text-sm">
                {video.snippet.title.toLowerCase()}
              </h3>
              <ChevronDownIcon
                width={20}
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
                  className="my-2.5 rounded-md border border-zinc-700 bg-zinc-800  px-4 py-2 text-xs font-semibold text-stone-200 transition-all hover:scale-110 md:hidden md:text-sm"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`)}
                >
                  Youtube'da izle 🖐️
                </button>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </main>
  );
}
export default List;
