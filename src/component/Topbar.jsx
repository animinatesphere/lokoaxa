import { Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <nav className="flex items-center justify-between gap-4 bg-[white] px-6 h-16">
      {/* Logo */}

      {/* Welcome */}
      <span className=" inter text-[13px] whitespace-nowrap shrink-0 text-[#4F4A52]">
        Welcome Adeyemo Aduke
      </span>

      {/* Search */}
      <div className="relative flex-1 max-w-xl">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search for dresses, accessories, shoes..."
          className="w-full h-9.5 text-[20px] border border-[#333] rounded-lg pl-10 pr-4  text-[#4F4A52] placeholder-[#555] outline-none border-none transition-colors"
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        {" "}
        <Bell className="w-6.25 h-6.25" />{" "}
        <Settings className="w-6.25 h-6.25" /> {/* Avatar */}
        <div className="w-9.5 h-9.5 rounded-full bg-[#2a2a2a] border border-[#444] flex items-center justify-center text-[#ccc] text-[13px] font-medium shrink-0">
          AA
        </div>
      </div>
    </nav>
  );
}
