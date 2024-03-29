import "./App.css";
import ReactH5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
} from "lucide-react";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-tr from-zinc-950 to-green-950 text-zinc-50">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon></HomeIcon>
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search></Search>
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library></Library>
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 2
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 3
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 4
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 5
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 6
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 7
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist 8
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album1.jpg" alt="" width={104} height={104} />
              <strong>Origins</strong>
              <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album1.jpg" alt="" width={104} height={104} />
              <strong>Origins</strong>
              <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album1.jpg" alt="" width={104} height={104} />
              <strong>Origins</strong>
              <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album1.jpg" alt="" width={104} height={104} />
              <strong>Origins</strong>
              <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album1.jpg" alt="" width={104} height={104} />
              <strong>Origins</strong>
              <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img src="/album1.jpg" alt="" width={104} height={104} />
              <strong>Origins</strong>
              <button className="pl-1 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/album1.jpg" alt="" width={56} height={56} />
          <div className="flex flex-col">
            <strong className="font-normal">Natural</strong>
            <span className="text-xs text-zinc-400">Imagina Dragons</span>
          </div>
        </div>
        <div className="flex flex-col items-center bg-black w-full h-full">
          <div className="flex items-center gap-2 w-full">
            <AudioPlayer
              autoPlay={false}
              src="Raridade.mp3"
              onPlay={(e) => console.log("onPlay")}
              // className="bg-zinc-800"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
