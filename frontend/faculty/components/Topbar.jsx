import { useEffect, useState } from "react";

const SearchIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
  </svg>
);
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 21a2 2 0 0 0 4 0" />
  </svg>
);
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export default function Topbar() {
  const fullName = localStorage.getItem("fullName") || "Faculty";
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 px-6 sm:px-8 py-4 bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="flex-1 max-w-xl">
        <div className="flex items-center gap-3 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-5 py-3 transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-lg focus-within:shadow-blue-500/10">
          <span className="text-slate-500 dark:text-slate-400"><SearchIcon /></span>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        aria-label="Notifications"
        className="relative rounded-full p-3 text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300"
      >
        <BellIcon />
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white animate-pulse shadow-lg shadow-red-500/50">
          3
        </span>
      </button>

      {/* Profile chip — swap the icon circle below for <img src="/avatar.jpg" .../> once you have a real photo */}
      <button
        type="button"
        className="flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 pl-2 pr-4 py-2 hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white ring-2 ring-blue-400/40 shadow-lg shadow-blue-600/30">
          <UserIcon />
        </span>
        <span className="text-left leading-tight">
          <span className="flex items-center gap-1 text-sm font-semibold text-slate-900 dark:text-white">
            {fullName}
            <ChevronDownIcon />
          </span>
          <span className="flex items-center gap-1 text-xs text-emerald-500 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Online
          </span>
        </span>
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="rounded-full p-3 text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:rotate-12 hover:scale-105 transition-all duration-300"
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 overflow-hidden shrink-0 ring-2 ring-white/10 shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform duration-300">
        <img src="/logo.png" alt="College logo" className="h-6 w-6 object-contain" />
      </span>
    </header>
  );
}