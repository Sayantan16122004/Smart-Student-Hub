import { useState } from "react";

const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 };

const CalendarIcon = ({ size = 22 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" />
    <path d="M8 14h2M14 14h2M8 17.5h2" />
  </svg>
);
const UsersIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6z" />
    <circle cx="17" cy="8.5" r="2.6" opacity="0.85" /><path d="M16.5 14.3c2.7.5 4.5 2.6 4.5 5.7h-4.3c0-2-.7-3.9-2.2-5.2.6-.3 1.3-.5 2-.5z" opacity="0.85" />
  </svg>
);
const BookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M2 5.5c3-.8 6.5-.6 10 1.5v13c-3.5-2-7-2.3-10-1.5z" />
    <path d="M22 5.5c-3-.8-6.5-.6-10 1.5v13c3.5-2 7-2.3 10-1.5z" opacity="0.85" />
  </svg>
);
const ClipboardCheckIcon = ({ size = 24 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 3h6v3H9z" /><path d="M9 14l2 2 4-4" />
  </svg>
);
const StarIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M12 2l3 6.9 7.4.7-5.6 4.9 1.7 7.3L12 17.9 5.5 21.8l1.7-7.3L1.6 9.6 9 8.9z" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" {...svgProps}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
  </svg>
);
const UserPlusIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="8" r="4" /><path d="M2 20c0-3.9 3.1-7 7-7s7 3.1 7 7z" />
    <path d="M19 7v6M16 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CheckBadgeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.5l2.4 1.8 3-.2 1 2.8 2.5 1.7-.9 2.9.9 2.9-2.5 1.7-1 2.8-3-.2L12 22.5l-2.4-1.8-3 .2-1-2.8-2.5-1.7.9-2.9-.9-2.9 2.5-1.7 1-2.8 3 .2z" />
    <path d="M8 12l3 3 5-6" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const AwardIcon = ({ size = 22 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="12" cy="9" r="5" /><path d="M8 14l-2 7 6-3 6 3-2-7" /><circle cx="12" cy="9" r="1.6" fill="currentColor" />
  </svg>
);
const ChatIcon = ({ size = 22 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    <circle cx="9" cy="10.5" r="0.8" fill="currentColor" /><circle cx="13" cy="10.5" r="0.8" fill="currentColor" /><circle cx="17" cy="10.5" r="0.8" fill="currentColor" />
  </svg>
);
const FileIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M9 12h7M9 15h7M9 18h4" stroke="#0a1436" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const GradCapIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5l-6 3z" opacity="0.85" />
  </svg>
);
const GearIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M10.3 2h3.4l.5 2.6a8 8 0 0 1 1.9 1.1l2.5-.9 1.7 3-2 1.7a8 8 0 0 1 0 2.2l2 1.7-1.7 3-2.5-.9a8 8 0 0 1-1.9 1.1l-.5 2.6h-3.4l-.5-2.6a8 8 0 0 1-1.9-1.1l-2.5.9-1.7-3 2-1.7a8 8 0 0 1 0-2.2l-2-1.7 1.7-3 2.5.9a8 8 0 0 1 1.9-1.1z" />
    <circle cx="12" cy="12" r="3" fill="#0a1436" />
  </svg>
);
const BarsIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path d="M5 20v-8M12 20V4M19 20v-5" />
  </svg>
);
const MegaphoneIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M3 10v4a1 1 0 0 0 1 1h3l9 5V4L7 9H4a1 1 0 0 0-1 1z" />
    <path d="M19 9v6" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);
const ArrowRightIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ChevronRightIcon = ({ className = "" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

/* ---------- data ---------- */

const STATS = [
  { label: "Total Students", value: "248", change: "+12%", icon: UsersIcon, accent: "blue" },
  { label: "Total Courses", value: "12", change: "+2%", icon: BookIcon, accent: "purple" },
  { label: "Attendance Rate", value: "92%", change: "+5%", icon: ClipboardCheckIcon, accent: "emerald" },
  { label: "Achievements", value: "36", change: "+8%", icon: StarIcon, accent: "amber" },
];

const ACCENTS = {
  blue: {
    card: "border-blue-400/35 bg-blue-50 dark:bg-[#0a1a55]/40 dark:bg-gradient-to-br dark:from-[#1d5bff]/30 dark:to-[#0a1a5a]/40",
    box: "border-blue-400/50 bg-blue-500/25 text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.5)]",
    stroke: "#3b82f6",
    glow: "hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]",
  },
  purple: {
    card: "border-purple-400/35 bg-purple-50 dark:bg-[#1a1050]/40 dark:bg-gradient-to-br dark:from-[#8b3dff]/30 dark:to-[#221068]/40",
    box: "border-purple-400/50 bg-purple-500/25 text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.5)]",
    stroke: "#a855f7",
    glow: "hover:shadow-[0_0_32px_rgba(168,85,247,0.4)]",
  },
  emerald: {
    card: "border-emerald-400/35 bg-emerald-50 dark:bg-[#07303a]/40 dark:bg-gradient-to-br dark:from-[#10b981]/28 dark:to-[#063a47]/40",
    box: "border-emerald-400/50 bg-emerald-500/25 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.5)]",
    stroke: "#10b981",
    glow: "hover:shadow-[0_0_32px_rgba(16,185,129,0.4)]",
  },
  amber: {
    card: "border-amber-400/35 bg-amber-50 dark:bg-[#2a2030]/40 dark:bg-gradient-to-br dark:from-[#f59e0b]/25 dark:to-[#2a1f28]/40",
    box: "border-amber-400/50 bg-amber-500/25 text-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.5)]",
    stroke: "#f59e0b",
    glow: "hover:shadow-[0_0_32px_rgba(245,158,11,0.4)]",
  },
};

const ACTIVITIES = [
  { icon: UserPlusIcon, tone: "from-blue-400 to-blue-700 shadow-[0_0_18px_rgba(59,130,246,0.7)] ring-blue-300/40", title: "New student registered", detail: "Rahul Das (CSE-2023-24)", time: "2 hours ago" },
  { icon: CalendarIcon, tone: "from-emerald-400 to-emerald-700 shadow-[0_0_18px_rgba(16,185,129,0.7)] ring-emerald-300/40", title: "Attendance updated", detail: "CSE - 3rd Year (Section A)", time: "4 hours ago" },
  { icon: AwardIcon, tone: "from-violet-400 to-purple-700 shadow-[0_0_18px_rgba(139,92,246,0.7)] ring-violet-300/40", title: "Achievement verified", detail: "Riya Sharma (CSE-2022-23)", time: "6 hours ago" },
  { icon: ChatIcon, tone: "from-pink-400 to-rose-700 shadow-[0_0_18px_rgba(236,72,153,0.7)] ring-pink-300/40", title: "New message from student", detail: "Souvik Paul", time: "8 hours ago" },
];

const QUICK_ACTIONS = [
  { label: "View Students", icon: UserPlusIcon, card: "from-blue-500/35 via-blue-700/15 to-[#0a1a5a]/30 border-blue-400/40", ico: "from-blue-400 to-blue-700 shadow-[0_0_16px_rgba(59,130,246,0.7)]", arrow: "bg-blue-500/30 text-blue-200" },
  { label: "Academic Info", icon: GradCapIcon, card: "from-violet-500/35 via-violet-700/15 to-[#1a1050]/30 border-violet-400/40", ico: "from-violet-400 to-purple-700 shadow-[0_0_16px_rgba(139,92,246,0.7)]", arrow: "bg-violet-500/30 text-violet-200" },
  { label: "Attendance", icon: CalendarIcon, card: "from-emerald-500/35 via-emerald-700/15 to-[#063a47]/30 border-emerald-400/40", ico: "from-emerald-400 to-emerald-700 shadow-[0_0_16px_rgba(16,185,129,0.7)]", arrow: "bg-emerald-500/30 text-emerald-200" },
  { label: "Performance", icon: BarsIcon, card: "from-amber-500/35 via-amber-700/15 to-[#2a1f28]/30 border-amber-400/40", ico: "from-amber-400 to-amber-600 shadow-[0_0_16px_rgba(245,158,11,0.7)]", arrow: "bg-amber-500/30 text-amber-200" },
  { label: "Certificates", icon: FileIcon, card: "from-indigo-500/35 via-indigo-700/15 to-[#15105a]/30 border-indigo-400/40", ico: "from-indigo-400 to-indigo-700 shadow-[0_0_16px_rgba(99,102,241,0.7)]", arrow: "bg-indigo-500/30 text-indigo-200" },
  { label: "Settings", icon: GearIcon, card: "from-pink-500/35 via-pink-700/15 to-[#3a1050]/30 border-pink-400/40", ico: "from-pink-400 to-rose-600 shadow-[0_0_16px_rgba(236,72,153,0.7)]", arrow: "bg-pink-500/30 text-pink-200" },
];

const NOTICES = [
  { day: "25", month: "Sep", title: "Internal Assessment", detail: "CSE - 3rd Year", tone: "from-blue-500 to-blue-700 shadow-[0_0_14px_rgba(59,130,246,0.6)]" },
  { day: "28", month: "Sep", title: "Department Meeting", detail: "Room 204 | 11:00 AM", tone: "from-violet-500 to-indigo-700 shadow-[0_0_14px_rgba(139,92,246,0.6)]" },
  { day: "02", month: "Oct", title: "Result Declaration", detail: "Session 2025-26", tone: "from-emerald-500 to-teal-700 shadow-[0_0_14px_rgba(16,185,129,0.6)]" },
  { title: "Notice", detail: "Fill attendance before 30 Sep", tone: "from-amber-400 to-amber-600 shadow-[0_0_14px_rgba(245,158,11,0.6)]", isNotice: true },
];

/* ---------- pieces ---------- */

function Sparkline({ color }) {
  return (
    <svg viewBox="0 0 100 40" className="h-12 w-28" preserveAspectRatio="none" style={{ filter: `drop-shadow(0 0 5px ${color})` }}>
      <path
        d="M0,34 C8,32 12,36 20,28 S32,22 40,26 S52,32 60,22 S76,6 84,14 S94,10 100,4"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* Glass card: translucent navy + blur + soft light border + inner top highlight */
function Card({ className = "", tint = "", children }) {
  const base =
    tint ||
    "border-white/10 bg-white/70 dark:bg-[#0a1a55]/35 dark:bg-gradient-to-br dark:from-[#1a3fbf]/15 dark:to-transparent";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_40px_rgba(0,0,0,0.45)] transition-shadow duration-300 ${base} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function SectionTitle({ icon: Icon, children, viewAll }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="flex items-center gap-3 text-[17px] font-semibold text-slate-900 dark:text-white">
        <span className="text-blue-500 dark:text-blue-300"><Icon /></span>
        {children}
      </h2>
      {viewAll && (
        <button className="outline-none focus:outline-none focus-visible:outline-none flex items-center gap-1.5 text-xs font-medium text-blue-500 dark:text-blue-400 hover:underline">
          View All <ArrowRightIcon size={13} />
        </button>
      )}
    </div>
  );
}

function formatToday(d) {
  const wk = d.toLocaleDateString("en-US", { weekday: "short" });
  const dd = String(d.getDate()).padStart(2, "0");
  const mon = d.toLocaleDateString("en-US", { month: "short" });
  return `${wk}, ${dd} ${mon} ${d.getFullYear()}`;
}

/* ---------- page ---------- */

export default function Dashboard() {
  const fullName = localStorage.getItem("fullName") || "Faculty";
  const [imgError, setImgError] = useState(false);
  const today = new Date();
  const dateStr = formatToday(today);
  const [time, meridiem] = today
    .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
    .split(" ");

  return (
    <div className="relative space-y-5 p-4 sm:p-6 sm:pt-4">
      {/* Welcome + Today */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_20rem]">
        <Card tint="border-blue-400/35 bg-blue-50 dark:bg-[#0a1a55]/40 dark:bg-gradient-to-r dark:from-[#1d5bff]/30 dark:via-[#0f2a9a]/20 dark:to-[#0a1a5a]/30">
          <div className="flex items-center gap-6 p-6 sm:px-8 sm:py-7">
            {imgError ? (
              <span className="hidden sm:flex h-[6.5rem] w-[6.5rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white ring-4 ring-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.75)]">
                <UsersIcon size={40} />
              </span>
            ) : (
              <img
                src="/avatar.jpg"
                alt={fullName}
                onError={() => setImgError(true)}
                className="hidden sm:block h-[6.5rem] w-[6.5rem] shrink-0 rounded-full object-cover ring-4 ring-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.75)]"
              />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-lg text-slate-600 dark:text-slate-100">Welcome back,</p>
              <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                {fullName}
                <span className="text-blue-500 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"><CheckBadgeIcon size={28} /></span>
              </h1>
              <p className="mt-2 flex items-center gap-3 text-base text-slate-600 dark:text-slate-100">
                Together towards better education
                <span className="hidden h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.9)] sm:block" />
              </p>
            </div>
            <div className="hidden max-w-[17rem] text-sm italic leading-relaxed text-slate-600 dark:text-slate-200 xl:block">
              <p>"Education is the most powerful weapon which you can use to change the world."</p>
              <p className="mt-3 not-italic text-slate-500 dark:text-slate-200">— Nelson Mandela</p>
            </div>
          </div>
        </Card>

        <Card tint="border-blue-400/35 bg-blue-50 dark:bg-[#0a1a55]/40 dark:bg-gradient-to-br dark:from-[#1d5bff]/25 dark:to-[#0a1a5a]/40">
          <div className="flex h-full items-center gap-4 p-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-400/50 bg-blue-500/25 text-blue-300 shadow-[0_0_22px_rgba(59,130,246,0.55)]">
              <CalendarIcon size={26} />
            </span>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-200">Today</p>
              <p className="font-medium text-slate-900 dark:text-white">{dateStr}</p>
              <p className="mt-1.5 text-3xl font-bold text-slate-900 dark:text-white">
                {time} <span className="text-lg font-medium text-slate-500 dark:text-slate-100">{meridiem}</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          const a = ACCENTS[s.accent];
          return (
            <Card key={s.label} tint={a.card} className={a.glow}>
              <div className="relative flex min-h-[8.5rem] items-center gap-4 p-5">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${a.box}`}>
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="whitespace-nowrap text-sm text-slate-600 dark:text-slate-100">{s.label}</p>
                  <p className="text-[28px] font-bold leading-tight text-slate-900 dark:text-white">{s.value}</p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V4M5 11l7-7 7 7" /></svg>
                    {s.change}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4">
                  <Sparkline color={a.stroke} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1.2fr_0.9fr]">
        {/* Recent Activities */}
        <Card>
          <div className="p-5">
            <SectionTitle icon={ClockIcon} viewAll>Recent Activities</SectionTitle>
            <div className="divide-y divide-white/10">
              {ACTIVITIES.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ring-2 ${a.tone}`}>
                      <Icon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-900 dark:text-white">{a.title}</p>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-300">{a.detail}</p>
                    </div>
                    <span className="shrink-0 text-xs text-slate-500 dark:text-slate-300">{a.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <div className="p-5">
            <SectionTitle icon={BoltIcon}>Quick Actions</SectionTitle>
            <div className="grid grid-cols-2 gap-3">
              {QUICK_ACTIONS.map((a) => {
                const Icon = a.icon;
                return (
                  <button
                    key={a.label}
                    type="button"
                    className={`outline-none focus:outline-none focus-visible:outline-none flex items-center gap-3 rounded-xl border bg-gradient-to-br ${a.card} px-3 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:brightness-125`}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ${a.ico}`}>
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0 flex-1 pt-3 text-xs text-slate-800 dark:text-slate-100">{a.label}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${a.arrow}`}>
                      <ArrowRightIcon size={13} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Calendar & Notices */}
        <Card>
          <div className="p-5">
            <SectionTitle icon={CalendarIcon} viewAll>Calendar &amp; Notices</SectionTitle>
            <div className="divide-y divide-white/10">
              {NOTICES.map((n, i) => (
                <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  {n.isNotice ? (
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white ${n.tone}`}>
                      <MegaphoneIcon />
                    </span>
                  ) : (
                    <span className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-br text-white ${n.tone}`}>
                      <span className="text-base font-bold leading-none">{n.day}</span>
                      <span className="mt-0.5 text-[10px] leading-none">{n.month}</span>
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-900 dark:text-white">{n.title}</p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-300">{n.detail}</p>
                  </div>
                  <ChevronRightIcon className="shrink-0 text-slate-400 dark:text-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}