import { useEffect, useState } from "react";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white border border-slate-300"
      }`}
    >
      <span
        className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-6 bg-white text-black" : "translate-x-0 bg-black text-white"
        }`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

export default function Topbar() {
  const fullName = localStorage.getItem("fullName") || "Faculty";
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 px-4 sm:px-6 py-3 bg-white dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="flex-1 max-w-xl">
        <div className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-4 py-2 transition-colors">
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
        className="relative rounded-full p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
      >
        <BellIcon />
      </button>

      <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 pl-2 pr-3 py-1.5 transition-colors">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
          <UserIcon />
        </span>
        <span className="text-sm font-medium text-slate-900 dark:text-white">{fullName}</span>
      </div>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </header>
  );
}