import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

function Channel() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChannels, setFilteredChannels] = useState([]);

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

  useEffect(() => {
    const filteredChannels = videos
      .filter((video) =>
        video.snippet.videoOwnerChannelTitle.toLowerCase().trim("").includes(searchTerm.toLowerCase().trim())
      )
      .reduce((acc, curr) => {
        const channelTitle = curr.snippet.videoOwnerChannelTitle.toLowerCase();
        if (!acc[channelTitle]) {
          acc[channelTitle] = true;
        }
        return acc;
      }, {});
    setFilteredChannels(Object.keys(filteredChannels));
  }, [videos, searchTerm]);

  const sortedChannels = filteredChannels.sort((a, b) => {
    const channelA = a.toLowerCase();
    const channelB = b.toLowerCase();
    if (channelA < channelB) return -1;
    if (channelA > channelB) return 1;
    return 0;
  });

  const channelNames = sortedChannels.map((channel) => channel.toLowerCase());
  const uniqueFirstLetters = [...new Set(channelNames.map((name) => name[0]))].sort();

  return (
    <div className="container mx-auto max-w-5xl p-4 px-8 md:px-4">
      <h2 className="mb-4 text-xl font-bold dark:text-white">Kanal Listesi</h2>
      <div className="mb-4">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="flex flex-col items-center gap-4 md:items-start">
        {uniqueFirstLetters.map((letter) => (
          <div key={letter} className="grid gap-2">
            <div className="mb-2 text-lg font-bold text-blue-500">{letter.toUpperCase()}</div>
            {sortedChannels
              .filter((channel) => channel.toLowerCase().startsWith(letter))
              .map((channel) => (
                <div
                  key={channel}
                  className="inline-flex w-64 overflow-hidden rounded-md bg-white shadow-md dark:bg-slate-800 dark:text-white"
                >
                  <div className="flex cursor-pointer items-center justify-center  rounded-md p-4">
                    <h3 className="text-xs font-medium capitalize leading-relaxed md:text-sm">{channel}</h3>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Channel;
