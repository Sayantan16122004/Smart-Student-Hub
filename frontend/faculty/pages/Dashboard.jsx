import { useEffect, useState } from "react";

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
    card: "border-blue-400/30 bg-blue-50 dark:bg-[#0a2070]/20 dark:bg-gradient-to-br dark:from-[#1d5bff]/30 dark:to-[#0a1a5a]/30",
    box: "border-blue-300/40 bg-blue-500/20 text-blue-300 shadow-[0_0_14px_rgba(59,130,246,0.35)]",
    stroke: "#3b82f6",
  },
  purple: {
    card: "border-purple-400/35 bg-purple-50 dark:bg-[#2a1580]/20 dark:bg-gradient-to-br dark:from-[#8b3dff]/30 dark:to-[#1a1058]/30",
    box: "border-purple-300/40 bg-purple-500/20 text-purple-200 shadow-[0_0_14px_rgba(168,85,247,0.35)]",
    stroke: "#a855f7",
  },
  emerald: {
    card: "border-emerald-400/35 bg-emerald-50 dark:bg-[#0a4a48]/20 dark:bg-gradient-to-br dark:from-[#10b981]/28 dark:to-[#07303c]/30",
    box: "border-emerald-300/40 bg-emerald-500/20 text-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.35)]",
    stroke: "#10b981",
  },
  amber: {
    card: "border-amber-400/35 bg-amber-50 dark:bg-[#3a2c18]/20 dark:bg-gradient-to-br dark:from-[#f59e0b]/25 dark:to-[#241f2c]/30",
    box: "border-amber-300/40 bg-amber-500/20 text-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.35)]",
    stroke: "#f59e0b",
  },
};

const ACTIVITIES = [
  { icon: UserPlusIcon, tone: "from-blue-500 to-blue-700 shadow-[0_0_14px_rgba(59,130,246,0.5)] ring-blue-300/40", title: "New student registered", detail: "Rahul Das (CSE-2023-24)", time: "2 hours ago" },
  { icon: CalendarIcon, tone: "from-emerald-500 to-emerald-700 shadow-[0_0_14px_rgba(16,185,129,0.5)] ring-emerald-300/40", title: "Attendance updated", detail: "CSE - 3rd Year (Section A)", time: "4 hours ago" },
  { icon: AwardIcon, tone: "from-violet-500 to-purple-700 shadow-[0_0_14px_rgba(139,92,246,0.5)] ring-violet-300/40", title: "Achievement verified", detail: "Riya Sharma (CSE-2022-23)", time: "6 hours ago" },
  { icon: ChatIcon, tone: "from-pink-600 to-rose-800 shadow-[0_0_14px_rgba(236,72,153,0.45)] ring-pink-400/50", title: "New message from student", detail: "Souvik Paul", time: "8 hours ago" },
];

const QUICK_ACTIONS = [
  { label: "View Students", icon: UserPlusIcon, card: "from-blue-500/25 to-[#081a55]/40 border-blue-300/30", ico: "from-blue-500 to-blue-700 shadow-[0_0_12px_rgba(59,130,246,0.5)]", arrow: "bg-blue-500/25 text-blue-200" },
  { label: "Academic Info", icon: GradCapIcon, card: "from-violet-500/25 to-[#170f4a]/40 border-violet-300/30", ico: "from-violet-500 to-purple-700 shadow-[0_0_12px_rgba(139,92,246,0.5)]", arrow: "bg-violet-500/25 text-violet-200" },
  { label: "Attendance", icon: CalendarIcon, card: "from-emerald-500/25 to-[#06303c]/40 border-emerald-300/30", ico: "from-emerald-500 to-emerald-700 shadow-[0_0_12px_rgba(16,185,129,0.5)]", arrow: "bg-emerald-500/25 text-emerald-200" },
  { label: "Performance", icon: BarsIcon, card: "from-amber-500/25 to-[#241f2c]/40 border-amber-300/30", ico: "from-amber-500 to-amber-700 shadow-[0_0_12px_rgba(245,158,11,0.5)]", arrow: "bg-amber-500/25 text-amber-200" },
  { label: "Certificates", icon: FileIcon, card: "from-indigo-500/25 to-[#15105a]/40 border-indigo-300/30", ico: "from-indigo-500 to-indigo-700 shadow-[0_0_12px_rgba(99,102,241,0.5)]", arrow: "bg-indigo-500/25 text-indigo-200" },
  { label: "Settings", icon: GearIcon, card: "from-pink-500/25 to-[#33104a]/40 border-pink-300/30", ico: "from-pink-500 to-rose-700 shadow-[0_0_12px_rgba(236,72,153,0.5)]", arrow: "bg-pink-500/25 text-pink-200" },
];

const NOTICES = [
  { day: "25", month: "Sep", title: "Internal Assessment", detail: "CSE - 3rd Year", tone: "from-blue-600 to-blue-800 shadow-[0_0_12px_rgba(59,130,246,0.45)]" },
  { day: "28", month: "Sep", title: "Department Meeting", detail: "Room 204 | 11:00 AM", tone: "from-violet-600 to-indigo-800 shadow-[0_0_12px_rgba(139,92,246,0.45)]" },
  { day: "02", month: "Oct", title: "Result Declaration", detail: "Session 2025-26", tone: "from-emerald-600 to-teal-800 shadow-[0_0_12px_rgba(16,185,129,0.45)]" },
  { title: "Notice", detail: "Fill attendance before 30 Sep", tone: "from-amber-500 to-amber-700 shadow-[0_0_12px_rgba(245,158,11,0.45)]", isNotice: true },
];

/* ---------- pieces ---------- */

function Sparkline({ color, delay = 0 }) {
  return (
    <svg viewBox="0 0 100 40" className="anim-reveal h-10 w-24" preserveAspectRatio="none" style={{ filter: `drop-shadow(0 0 4px ${color})`, "--d": `${delay}ms` }}>
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

/* Glass card: dark translucent navy + blur + soft light border + inner top highlight */
function Card({ className = "", tint = "", glow = false, delay = 0, children }) {
  const base =
    tint ||
    "border-blue-300/20 bg-white/60 dark:bg-[#0a1a55]/30 dark:bg-gradient-to-br dark:from-[#1a3fbf]/12 dark:to-transparent";
  return (
    <div
      style={{ "--d": `${delay}ms` }}
      className={`anim-rise group relative overflow-hidden rounded-2xl border backdrop-blur-[6px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_44px_rgba(37,99,235,0.3)] ${base} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
      {glow && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.4),transparent_60%)]" />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function SectionTitle({ icon: Icon, children, viewAll }) {
  return (
    <div className="mb-3 flex shrink-0 items-center justify-between">
      <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900 dark:text-white">
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

function CountUp({ value, duration = 1200 }) {
  const m = String(value).match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{m ? `${n}${suffix}` : value}</>;
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
    <div className="relative flex min-h-full flex-col gap-5 px-4 pb-6 pt-4 lg:h-full lg:pb-8 lg:pl-4 lg:pr-3 lg:pt-5">
      {/* Welcome + Today */}
      <div className="grid shrink-0 grid-cols-1 gap-5 lg:h-[9.4rem] lg:grid-cols-[1fr_18.6rem]">
        <Card glow delay={0} tint="border-blue-300/25 bg-blue-50 dark:bg-[#0a1a55]/30 dark:bg-gradient-to-r dark:from-[#1346d0]/35 dark:via-[#0c2080]/25 dark:to-[#0b1f75]/30">
          <div className="flex h-full items-center gap-6 px-7">
            {imgError ? (
              <span className="hidden sm:flex h-[6.5rem] w-[6.5rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white ring-4 ring-blue-400/60 shadow-[0_0_36px_rgba(59,130,246,0.7)]">
                <UsersIcon size={40} />
              </span>
            ) : (
              <img
                src="/avatar.jpg"
                alt={fullName}
                onError={() => setImgError(true)}
                className="hidden sm:block h-[6.5rem] w-[6.5rem] shrink-0 rounded-full object-cover ring-4 ring-blue-400/60 shadow-[0_0_36px_rgba(59,130,246,0.7)]"
              />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-base text-slate-600 dark:text-slate-100">Welcome back,</p>
              <h1 className="flex flex-wrap items-center gap-2 text-3xl font-semibold text-slate-900 dark:text-white">
                {fullName}
                <span className="text-blue-500 dark:text-blue-400"><CheckBadgeIcon size={26} /></span>
              </h1>
              <p className="mt-1.5 flex items-center gap-3 text-[15px] text-slate-600 dark:text-slate-100">
                Together towards better education
                <span className="hidden h-[3px] w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.9)] sm:block" />
              </p>
            </div>
            <div className="hidden max-w-[19rem] text-[15px] italic leading-relaxed text-slate-600 dark:text-slate-200 xl:block">
              <p>"Education is the most powerful weapon which you can use to change the world."</p>
              <p className="mt-3 not-italic text-slate-500 dark:text-slate-200">— Nelson Mandela</p>
            </div>
          </div>
        </Card>

        <Card glow delay={80} tint="border-blue-300/25 bg-blue-50 dark:bg-[#0a1a55]/30 dark:bg-gradient-to-br dark:from-[#1346d0]/35 dark:to-[#0c2080]/25">
          <div className="flex h-full items-center gap-4 px-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-300/40 bg-blue-500/20 text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.45)]">
              <CalendarIcon size={26} />
            </span>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-200">Today</p>
              <p className="text-[15px] font-medium text-slate-900 dark:text-white">{dateStr}</p>
              <p className="mt-1 text-[28px] font-semibold leading-tight text-slate-900 dark:text-white">
                {time} <span className="text-base font-medium text-slate-500 dark:text-slate-100">{meridiem}</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Stat cards */}
      <div className="grid shrink-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:h-[7.8rem] xl:grid-cols-4">
        {STATS.map((s, i) => {
          const Icon = s.icon;
          const a = ACCENTS[s.accent];
          return (
            <Card key={s.label} tint={a.card} delay={160 + i * 80}>
              <div className="relative flex h-full min-h-[7rem] items-center gap-4 px-5">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${a.box}`}>
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="whitespace-nowrap text-sm text-slate-600 dark:text-slate-100">{s.label}</p>
                  <p className="text-[26px] font-semibold leading-tight text-slate-900 dark:text-white"><CountUp value={s.value} /></p>
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-500 dark:text-emerald-400">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V4M5 11l7-7 7 7" /></svg>
                    {s.change}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Sparkline color={a.stroke} delay={400 + i * 80} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-5 lg:min-h-0 lg:flex-1 lg:grid-rows-[minmax(0,1fr)] lg:grid-cols-[1.5fr_1.27fr_1fr]">
        {/* Recent Activities */}
        <Card delay={480}>
          <div className="flex h-full min-h-0 flex-col p-5">
            <SectionTitle icon={ClockIcon} viewAll>Recent Activities</SectionTitle>
            <div className="flex min-h-0 flex-1 flex-col divide-y divide-white/10">
              {ACTIVITIES.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="group/row flex flex-1 items-center gap-4 py-1.5 transition-colors hover:bg-white/[0.04]">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ring-2 transition-transform duration-300 group-hover/row:scale-110 ${a.tone}`}>
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium text-slate-900 dark:text-white">{a.title}</p>
                      <p className="truncate text-[11px] text-slate-500 dark:text-slate-300">{a.detail}</p>
                    </div>
                    <span className="shrink-0 text-[11px] text-slate-500 dark:text-slate-300">{a.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card delay={560}>
          <div className="flex h-full min-h-0 flex-col p-5">
            <SectionTitle icon={BoltIcon}>Quick Actions</SectionTitle>
            <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-3">
              {QUICK_ACTIONS.map((a) => {
                const Icon = a.icon;
                return (
                  <button
                    key={a.label}
                    type="button"
                    className={`group outline-none focus:outline-none focus-visible:outline-none flex items-center gap-3 rounded-xl border bg-gradient-to-br ${a.card} px-3 py-1.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)]`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110 ${a.ico}`}>
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1 pt-3 text-[11px] text-slate-800 dark:text-slate-100">{a.label}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${a.arrow}`}>
                      <ArrowRightIcon size={13} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Calendar & Notices */}
        <Card delay={640}>
          <div className="flex h-full min-h-0 flex-col p-5">
            <SectionTitle icon={CalendarIcon} viewAll>Calendar &amp; Notices</SectionTitle>
            <div className="flex min-h-0 flex-1 flex-col divide-y divide-white/10">
              {NOTICES.map((n, i) => (
                <div key={i} className="group/row flex flex-1 items-center gap-3 py-1.5 transition-colors hover:bg-white/[0.04]">
                  {n.isNotice ? (
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white transition-transform duration-300 group-hover/row:scale-110 ${n.tone}`}>
                      <MegaphoneIcon size={20} />
                    </span>
                  ) : (
                    <span className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-br text-white transition-transform duration-300 group-hover/row:scale-110 ${n.tone}`}>
                      <span className="text-base font-semibold leading-none">{n.day}</span>
                      <span className="mt-0.5 text-[10px] leading-none">{n.month}</span>
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-slate-900 dark:text-white">{n.title}</p>
                    <p className="truncate text-[11px] text-slate-500 dark:text-slate-300">{n.detail}</p>
                  </div>
                  <ChevronRightIcon className="shrink-0 text-slate-400 transition-transform duration-300 group-hover/row:translate-x-1 dark:text-slate-200" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}