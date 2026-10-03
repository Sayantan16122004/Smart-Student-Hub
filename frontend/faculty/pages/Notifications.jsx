import { useEffect, useMemo, useState } from "react";

const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

const BellIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5a1.4 1.4 0 0 0-1.4 1.4v.7A6.5 6.5 0 0 0 5.5 11v3.6L3.8 17a1 1 0 0 0 .8 1.6h14.8a1 1 0 0 0 .8-1.6l-1.7-2.4V11a6.5 6.5 0 0 0-5.1-6.4v-.7A1.4 1.4 0 0 0 12 2.5z" />
    <path d="M9.6 19.8a2.5 2.5 0 0 0 4.8 0z" />
  </svg>
);
const CheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);
const AllIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
  </svg>
);
const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);
const ChatIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />
  </svg>
);
const ChatFilledIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.5L5 21.5V18a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5v1.6h8V8zm0 3.6v1.6h5v-1.6z" />
  </svg>
);
const GearIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);
const GradCapIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
  </svg>
);
const GradCapFilledIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5l-6 3z" opacity="0.85" />
  </svg>
);
const CalendarIcon = ({ size = 22 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h2M14 14h2M8 17.5h2" />
  </svg>
);
const DocIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 2h8l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.8V8h4.2zM8 12v1.6h8V12zm0 3.6v1.6h8v-1.6z" />
  </svg>
);
const AwardIcon = ({ size = 22 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="12" cy="9" r="5" /><path d="M8 14l-2 7 6-3 6 3-2-7" /><circle cx="12" cy="9" r="1.6" fill="currentColor" />
  </svg>
);
const ChevronIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);
const BellOffIcon = ({ size = 44 }) => (
  <svg width={size} height={size} {...svgProps} strokeWidth={1.6}>
    <path d="M6 9a6 6 0 0 1 9.5-4.8M18 12v3l2 3H8M10 21a2 2 0 0 0 4 0M3 3l18 18" />
  </svg>
);

/* ---------- tones (same palette as Profile / dashboard cards) ---------- */

const TONE = {
  blue: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_16px_rgba(59,130,246,0.55)]",
  violet: "bg-violet-500/20 text-violet-500 ring-1 ring-violet-400/30 dark:text-violet-300",
  green: "bg-emerald-500/20 text-emerald-500 ring-1 ring-emerald-400/30 dark:text-emerald-400",
  amber: "bg-amber-500/20 text-amber-500 ring-1 ring-amber-400/30 dark:text-amber-400",
  indigo: "bg-indigo-500/20 text-indigo-500 ring-1 ring-indigo-400/30 dark:text-indigo-300",
  sky: "bg-sky-500/20 text-sky-500 ring-1 ring-sky-400/30 dark:text-sky-400",
};

const ICONS = {
  chat: ChatFilledIcon,
  calendar: CalendarIcon,
  doc: DocIcon,
  award: AwardIcon,
  cap: GradCapFilledIcon,
  gear: GearIcon,
};

/* ---------- data ---------- */

const NOTIF_KEY = "notificationsData";
const NOTIF_EVENT = "notifications-change"; // Topbar / Sidebar badge can listen to this
const notifyChange = () => window.dispatchEvent(new Event(NOTIF_EVENT));

const GROUPS = ["Today", "Yesterday"];

const TABS = [
  { key: "all", label: "All", icon: AllIcon },
  { key: "unread", label: "Unread", icon: MailIcon },
  { key: "message", label: "Messages", icon: ChatIcon },
  { key: "system", label: "System", icon: GearIcon },
  { key: "academic", label: "Academic", icon: GradCapIcon },
];

const DEFAULT_NOTIFICATIONS = [
  {
    id: 1, group: "Today", category: "message", icon: "chat", tone: "blue", read: false, time: "10:24 AM",
    title: "New Message from Student",
    text: "Riya Sharma has sent you a message regarding her project submission.",
  },
  {
    id: 2, group: "Today", category: "academic", icon: "calendar", tone: "violet", read: false, time: "09:17 AM",
    title: "Attendance Update",
    text: "2 students have been marked absent in your today's class (BCA-3A).",
  },
  {
    id: 3, group: "Today", category: "academic", icon: "doc", tone: "green", read: false, time: "08:45 AM",
    title: "Document Verified",
    text: "The document for Rahul Das has been verified successfully.",
  },
  {
    id: 4, group: "Yesterday", category: "academic", icon: "award", tone: "amber", read: true, time: "Yesterday, 04:32 PM",
    title: "Achievement Reminder",
    text: "Please review the pending achievements for the current semester.",
  },
  {
    id: 5, group: "Yesterday", category: "academic", icon: "cap", tone: "indigo", read: true, time: "Yesterday, 11:20 AM",
    title: "New Student Enrolled",
    text: "Ananya Roy has been enrolled in BCA-1A batch.",
  },
  {
    id: 6, group: "Yesterday", category: "system", icon: "gear", tone: "sky", read: true, time: "Yesterday, 09:00 AM",
    title: "Scheduled Maintenance",
    text: "The portal will be unavailable on Sunday from 2:00 AM to 4:00 AM.",
  },
];

/* ---------- data layer ----------
   Backend connect korar somoy sudhu ei function gulo bodol korlei hobe. */

// TODO(backend): replace with GET /api/notifications
function loadNotifications() {
  try {
    const saved = localStorage.getItem(NOTIF_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_NOTIFICATIONS;
  } catch {
    return DEFAULT_NOTIFICATIONS;
  }
}

// TODO(backend): replace with PATCH /api/notifications/:id/read and PATCH /api/notifications/read-all
function saveNotifications(list) {
  try {
    localStorage.setItem(NOTIF_KEY, JSON.stringify(list));
    notifyChange();
  } catch {
    /* storage full / blocked */
  }
}

const ANIM_CSS = `
@keyframes nf-fade{from{opacity:0}to{opacity:1}}
@keyframes nf-slide{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
@keyframes nf-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes nf-ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.4);opacity:0}}
.nf-fade{animation:nf-fade .35s ease backwards}
.nf-slide{animation:nf-slide .5s cubic-bezier(.2,.8,.2,1) backwards;animation-delay:var(--d,0ms)}
.nf-up{animation:nf-up .5s cubic-bezier(.2,.8,.2,1) backwards;animation-delay:var(--d,0ms)}
.nf-ping{animation:nf-ping 1.8s ease-out infinite}
.nf-scroll{scrollbar-width:thin;scrollbar-color:rgba(96,165,250,.35) transparent}
.nf-scroll::-webkit-scrollbar{width:6px;height:6px}
.nf-scroll::-webkit-scrollbar-thumb{background:rgba(96,165,250,.35);border-radius:9999px}
@media (prefers-reduced-motion:reduce){.nf-fade,.nf-slide,.nf-up,.nf-ping{animation:none}}
`;

/* ---------- pieces ---------- */

/* Same glass card as Profile / Dashboard. */
function Card({ className = "", tint = "", glow = false, delay = 0, children }) {
  const base =
    tint ||
    "border-blue-400/20 bg-white/60 dark:bg-[#07123f]/60 dark:bg-gradient-to-br dark:from-[#1a3fbf]/15 dark:to-transparent";
  return (
    <div
      style={{ "--d": `${delay}ms` }}
      className={`anim-rise group relative overflow-hidden rounded-2xl border backdrop-blur-[6px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-blue-400/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_44px_rgba(37,99,235,0.3)] ${base} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.35),transparent_60%)]" />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function CountBadge({ n, active }) {
  return (
    <span
      className={`flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold leading-none ${
        active ? "bg-white/25 text-white" : "bg-blue-500/20 text-blue-600 ring-1 ring-blue-400/30 dark:text-blue-200"
      }`}
    >
      {n}
    </span>
  );
}

function Tab({ tab, active, count, onClick }) {
  const Icon = tab.icon;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 rounded-xl border px-5 py-2.5 text-[15px] font-medium outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-300 ${
        active
          ? "border-transparent bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_18px_rgba(59,130,246,0.55)]"
          : "border-blue-400/20 bg-white/50 text-slate-700 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-400/10 dark:bg-[#0a1a55]/40 dark:text-slate-200"
      }`}
    >
      <Icon size={18} />
      {tab.label}
      {count > 0 && <CountBadge n={count} active={active} />}
    </button>
  );
}

function GroupTitle({ children }) {
  return (
    <div className="mb-2 mt-4 flex items-center gap-4 first:mt-0">
      <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">{children}</h3>
      <span className="h-px flex-1 bg-slate-300/50 dark:bg-blue-300/15" />
    </div>
  );
}

function NotificationRow({ item, index, onOpen }) {
  const Icon = ICONS[item.icon] || BellIcon;
  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      style={{ "--d": `${index * 60}ms` }}
      aria-label={`${item.title}${item.read ? "" : " (unread)"}`}
      className={`nf-slide group/row flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left outline-none transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/[0.1] focus-visible:ring-2 focus-visible:ring-blue-300 ${
        item.read
          ? "border-slate-300/40 bg-white/40 dark:border-blue-300/10 dark:bg-[#0a1a55]/30"
          : "border-blue-400/40 bg-blue-100/70 shadow-[0_0_24px_rgba(59,130,246,0.18)] dark:bg-gradient-to-r dark:from-[#1346d0]/35 dark:to-[#10247a]/30"
      }`}
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover/row:scale-110 ${TONE[item.tone]}`}>
        <Icon size={22} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-medium text-slate-900 dark:text-white">{item.title}</span>
        <span className="mt-0.5 block truncate text-sm text-slate-500 dark:text-slate-400">{item.text}</span>
      </span>

      <span className="hidden shrink-0 text-sm text-slate-500 dark:text-slate-400 sm:block">{item.time}</span>

      <span className="flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden="true">
        {!item.read && (
          <span className="relative flex h-2.5 w-2.5">
            <span className="nf-ping absolute inline-flex h-full w-full rounded-full bg-blue-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
          </span>
        )}
      </span>

      <span className="shrink-0 text-slate-400 transition-transform duration-300 group-hover/row:translate-x-1 group-hover/row:text-blue-400">
        <ChevronIcon />
      </span>
    </button>
  );
}

function EmptyState({ tab }) {
  const text =
    tab === "unread"
      ? "You're all caught up. New unread notifications will show up here."
      : "Nothing here yet. Notifications in this category will appear here.";
  return (
    <div className="nf-fade flex h-full min-h-[14rem] flex-col items-center justify-center gap-3 text-center">
      <span className="text-blue-400/70"><BellOffIcon /></span>
      <p className="text-lg font-semibold text-slate-900 dark:text-white">No notifications</p>
      <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">{text}</p>
    </div>
  );
}

/* ---------- page ---------- */

export default function Notifications() {
  const [items, setItems] = useState(loadNotifications);
  const [tab, setTab] = useState("all");

  /* persist + tell the rest of the app (badges) */
  useEffect(() => {
    saveNotifications(items);
  }, [items]);

  const unreadCount = useMemo(() => items.filter((n) => !n.read).length, [items]);

  const counts = useMemo(() => {
    const unread = (c) => items.filter((n) => !n.read && n.category === c).length;
    return {
      all: unreadCount,
      unread: unreadCount,
      message: unread("message"),
      system: unread("system"),
      academic: unread("academic"),
    };
  }, [items, unreadCount]);

  const visible = useMemo(() => {
    if (tab === "all") return items;
    if (tab === "unread") return items.filter((n) => !n.read);
    return items.filter((n) => n.category === tab);
  }, [items, tab]);

  const markRead = (id) => setItems((list) => list.map((n) => (n.id === id && !n.read ? { ...n, read: true } : n)));
  const markAllRead = () => setItems((list) => list.map((n) => (n.read ? n : { ...n, read: true })));

  let rowIndex = 0;

  return (
    <div className="relative flex min-h-full flex-col gap-4 px-4 py-4 lg:h-full lg:min-h-0 lg:overflow-hidden lg:pl-4 lg:pr-3">
      <style>{ANIM_CSS}</style>

      {/* Header */}
      <Card
        glow
        delay={0}
        tint="border-blue-400/30 bg-blue-50 dark:bg-[#07123f]/50 dark:bg-gradient-to-r dark:from-[#1346d0]/35 dark:via-[#10247a]/35 dark:to-[#1a1a8a]/30"
      >
        <div className="flex flex-col items-start gap-5 px-7 py-5 sm:flex-row sm:items-center">
          <span className="nf-fade flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-[0_0_24px_rgba(59,130,246,0.6)] ring-4 ring-blue-300/30">
            <BellIcon size={26} />
          </span>

          <div className="min-w-0 flex-1">
            <h1 style={{ "--d": "100ms" }} className="nf-up text-3xl font-semibold text-slate-900 dark:text-white">Notifications</h1>
            <p style={{ "--d": "180ms" }} className="nf-up mt-1 text-[15px] text-slate-600 dark:text-slate-300">
              Stay updated with the latest activities, messages and important updates.
            </p>
          </div>

          <button
            type="button"
            onClick={markAllRead}
            disabled={unreadCount === 0}
            style={{ "--d": "260ms" }}
            className="nf-up group/mark flex shrink-0 items-center gap-2 rounded-xl border border-blue-400/30 bg-white/60 px-5 py-2.5 text-[15px] font-medium text-slate-800 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-400/15 focus-visible:ring-2 focus-visible:ring-blue-300 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-white/60 dark:bg-[#0a1a55]/50 dark:text-slate-100 dark:disabled:hover:bg-[#0a1a55]/50 sm:self-start"
          >
            <span className="transition-transform duration-300 group-hover/mark:scale-125"><CheckIcon /></span>
            Mark all as read
          </button>
        </div>
      </Card>

      {/* List */}
      <Card delay={120} className="lg:min-h-0 lg:flex-1">
        <div className="flex h-full flex-col px-6 py-5">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Notification filters"
            className="nf-scroll -mx-1 flex gap-3 overflow-x-auto px-1 pb-3"
          >
            {TABS.map((t) => (
              <Tab key={t.key} tab={t} active={tab === t.key} count={counts[t.key]} onClick={() => setTab(t.key)} />
            ))}
          </div>

          <div className="h-px bg-slate-300/50 dark:bg-blue-300/10" />

          {/* Scrollable groups */}
          <div className="nf-scroll mt-4 min-h-0 flex-1 overflow-y-auto pr-1" role="tabpanel">
            {visible.length === 0 ? (
              <EmptyState tab={tab} />
            ) : (
              GROUPS.map((g) => {
                const rows = visible.filter((n) => n.group === g);
                if (!rows.length) return null;
                return (
                  <section key={g}>
                    <GroupTitle>{g}</GroupTitle>
                    <div className="flex flex-col gap-3">
                      {rows.map((n) => (
                        <NotificationRow key={n.id} item={n} index={rowIndex++} onOpen={markRead} />
                      ))}
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}