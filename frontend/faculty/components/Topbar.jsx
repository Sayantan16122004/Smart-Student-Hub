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

export default function Topbar() {
  const fullName = localStorage.getItem("fullName") || "Faculty";

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 px-4 sm:px-6 py-3 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
      <div className="flex-1 max-w-xl">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
          <span className="text-slate-400"><SearchIcon /></span>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        aria-label="Notifications"
        className="relative rounded-full p-2 text-slate-300 hover:bg-white/5 transition-colors"
      >
        <BellIcon />
      </button>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-2 pr-3 py-1.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-slate-300">
          <UserIcon />
        </span>
        <span className="text-sm font-medium text-white">{fullName}</span>
      </div>
    </header>
  );
}