import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PROFILE_PATH = "/faculty/profile";
const NOTIFICATIONS_PATH = "/faculty/notifications";

// same keys as Profile.jsx
const AVATAR_KEY = "profileAvatar";
const AVATAR_REMOVED = "none";
const AVATAR_EVENT = "profile-avatar-change";

const readAvatar = () => {
  const saved = localStorage.getItem(AVATAR_KEY);
  return saved === AVATAR_REMOVED ? null : saved || "/avatar.jpg";
};

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
  </svg>
);
const BellIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 21a2 2 0 0 0 4 0" fill="none" />
  </svg>
);
const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);
const SunIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const MoonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M10.3 2h3.4l.5 2.6a8 8 0 0 1 1.9 1.1l2.5-.9 1.7 3-2 1.7a8 8 0 0 1 0 2.2l2 1.7-1.7 3-2.5-.9a8 8 0 0 1-1.9 1.1l-.5 2.6h-3.4l-.5-2.6a8 8 0 0 1-1.9-1.1l-2.5.9-1.7-3 2-1.7a8 8 0 0 1 0-2.2l-2-1.7 1.7-3 2.5.9a8 8 0 0 1 1.9-1.1z" />
    <circle cx="12" cy="12" r="3" fill="#0a1436" />
  </svg>
);

const noFocus = "outline-none focus:outline-none focus-visible:outline-none focus:ring-0";
const circleBtn =
  `${noFocus} relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/20 bg-white/70 dark:bg-[#0a1a55]/30 text-blue-500 dark:text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_14px_rgba(59,130,246,0.2)] backdrop-blur-[6px] hover:bg-blue-500/25 hover:scale-105 hover:-translate-y-0.5 hover:border-blue-300/40 transition-all duration-300`;

export default function Topbar() {
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullName") || "Faculty";
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [imgError, setImgError] = useState(false);
  const [avatar, setAvatar] = useState(readAvatar);

  /* keep the topbar photo in sync with the Profile page (same tab + other tabs) */
  useEffect(() => {
    const sync = () => {
      setAvatar(readAvatar());
      setImgError(false);
    };
    window.addEventListener(AVATAR_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(AVATAR_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="anim-drop-in relative z-20 flex items-center gap-4 px-4 sm:px-6 pt-3 pb-1">
      {/* Search */}
      <div className="flex-1 max-w-3xl">
        <div className="flex items-center gap-4 rounded-full border border-blue-400/40 bg-white/70 dark:bg-[#0a1a55]/30 px-6 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_16px_rgba(59,130,246,0.18)] backdrop-blur-[6px] transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-[0_0_25px_rgba(59,130,246,0.35)]">
          <span className="text-blue-500 dark:text-blue-300"><SearchIcon /></span>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-[15px] text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-300 outline-none"
          />
        </div>
      </div>

      <div className="flex-1" />

      {/* Notifications → opens Notifications page */}
      <button
        type="button"
        aria-label="Notifications"
        onClick={() => navigate(NOTIFICATIONS_PATH)}
        className={circleBtn}
      >
        <BellIcon />
      </button>

      {/* Profile chip → opens Profile page */}
      <button
        type="button"
        aria-label="Open profile"
        onClick={() => navigate(PROFILE_PATH)}
        className={`${noFocus} flex items-center gap-3 rounded-full border border-blue-300/20 bg-white/70 dark:bg-[#0a1a55]/30 pl-2 pr-5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_14px_rgba(59,130,246,0.2)] backdrop-blur-[6px] hover:bg-blue-500/25 active:scale-95 transition-all duration-300`}
      >
        {imgError || !avatar ? (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white ring-2 ring-blue-400/50">
            <UserIcon />
          </span>
        ) : (
          <img
            key={avatar}
            src={avatar}
            alt={fullName}
            onError={() => setImgError(true)}
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-blue-400/50"
          />
        )}

        {/* Name + status (takes remaining space so the arrow sits at the far right) */}
        <span className="flex-1 text-left leading-tight">
          <span className="block text-[15px] font-semibold text-slate-900 dark:text-white">
            {fullName}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Online
          </span>
        </span>
      </button>

      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className={circleBtn}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>

      {/* Settings */}
      <button type="button" aria-label="Settings" className={circleBtn}>
        <SettingsIcon />
      </button>
    </header>
  );
}