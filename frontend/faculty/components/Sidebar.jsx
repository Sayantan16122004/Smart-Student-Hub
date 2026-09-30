import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M3 11l9-8 9 8" fill="none" strokeWidth="2" strokeLinecap="round" />
    <path d="M5.5 10.5V20h5v-5.5h3V20h5v-9.5L12 4.5z" />
  </svg>
);
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    <circle cx="17" cy="8" r="3" /><path d="M16 14.2c2.9.6 5 2.9 5 5.8" />
  </svg>
);
const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3h9l4 4v14H6z" /><path d="M9 11h7M9 15h7" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="M8 14h2M14 14h2M8 17h2" />
  </svg>
);
const BadgeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="9" r="5" /><path d="M8 14l-2 7 6-3 6 3-2-7" /><circle cx="12" cy="9" r="1.5" />
  </svg>
);
const FileCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3h9l4 4v14H6z" /><path d="M9 13l2 2 4-4" />
  </svg>
);
const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  </svg>
);
const CompassIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><path d="M16 8l-2 6-6 2 2-6z" />
  </svg>
);
const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 20V11M12 20V4M20 20v-6" fill="none" strokeWidth="3.5" />
  </svg>
);
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 21a2 2 0 0 0 4 0" fill="none" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" /><path d="M21 12H9" />
  </svg>
);
const ChevronIcon = ({ open }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);
const GradCapIcon = () => (
  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M2 9l10-5 10 5-10 5-10-5z" fill="currentColor" fillOpacity="0.25" />
    <path d="M6 11.5v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    <path d="M22 9v6" strokeLinecap="round" />
  </svg>
);

const NAV = [
  { type: "link", label: "Dashboard", to: "/faculty", icon: HomeIcon, end: true },
  { type: "link", label: "My Profile", to: "/faculty/profile", icon: UserIcon },
  {
    type: "group",
    label: "My Students",
    icon: UsersIcon,
    children: [
      { label: "Student List", to: "/faculty/my-students/list" },
      { label: "Search Student", to: "/faculty/my-students/search" },
      { label: "Student Profile", to: "/faculty/my-students/profile" },
    ],
  },
  {
    type: "group",
    label: "Student Academic Information",
    icon: BookIcon,
    children: [
      { label: "View Academic Records", to: "/faculty/academic-info/records" },
      { label: "Semester Results", to: "/faculty/academic-info/results" },
      { label: "Academic Performance", to: "/faculty/academic-info/performance" },
    ],
  },
  {
    type: "group",
    label: "Student Attendance",
    icon: CalendarIcon,
    children: [
      { label: "Mark Attendance", to: "/faculty/attendance/mark" },
      { label: "View Attendance", to: "/faculty/attendance/view" },
      { label: "Edit Attendance", to: "/faculty/attendance/edit" },
      { label: "Low Attendance", to: "/faculty/attendance/low" },
    ],
  },
  {
    type: "group",
    label: "Achievement Verification",
    icon: BadgeIcon,
    children: [
      { label: "Pending", to: "/faculty/achievement-verification/pending" },
      { label: "Approved", to: "/faculty/achievement-verification/approved" },
      { label: "Rejected", to: "/faculty/achievement-verification/rejected" },
      { label: "History", to: "/faculty/achievement-verification/history" },
    ],
  },
  {
    type: "group",
    label: "Certificate Verification",
    icon: FileCheckIcon,
    children: [
      { label: "Pending", to: "/faculty/certificate-verification/pending" },
      { label: "Verified", to: "/faculty/certificate-verification/verified" },
      { label: "Rejected", to: "/faculty/certificate-verification/rejected" },
      { label: "History", to: "/faculty/certificate-verification/history" },
    ],
  },
  {
    type: "group",
    label: "Student Remarks",
    icon: MessageIcon,
    children: [
      { label: "Add Remark", to: "/faculty/student-remarks/add" },
      { label: "Remark History", to: "/faculty/student-remarks/history" },
    ],
  },
  {
    type: "group",
    label: "Mentoring & Recommendations",
    icon: CompassIcon,
    children: [
      { label: "Student Requests", to: "/faculty/mentoring/requests" },
      { label: "Give Recommendations", to: "/faculty/mentoring/give" },
    ],
  },
  {
    type: "group",
    label: "Student Performance",
    icon: ChartIcon,
    children: [
      { label: "Academic", to: "/faculty/student-performance/academic" },
      { label: "Attendance", to: "/faculty/student-performance/attendance" },
      { label: "Achievements", to: "/faculty/student-performance/achievements" },
      { label: "Overall Progress", to: "/faculty/student-performance/overall" },
    ],
  },
  { type: "link", label: "Notifications", to: "/faculty/notifications", icon: BellIcon, badge: 3 },
];

const rowBase =
  "outline-none focus:outline-none focus-visible:outline-none focus:ring-0 group flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-[15px] font-normal transition-all duration-300";
const rowIdle =
  "text-slate-700 dark:text-slate-100 hover:bg-blue-500/10 dark:hover:bg-white/5";
const rowActive =
  "bg-gradient-to-r from-[#1d4ed8] to-[#2f6bff] text-white font-medium shadow-[0_0_26px_rgba(47,107,255,0.65)]";
const iconIdle = "text-blue-500 dark:text-blue-400";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (label) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("fullName");
    navigate("/login");
  };

  return (
    <div className="hidden lg:block w-[19rem] shrink-0 h-full z-20 p-3">
      <aside className="flex h-full flex-col rounded-2xl border border-blue-400/40 bg-white/80 dark:bg-[#0a1650] dark:bg-gradient-to-b dark:from-[#09154d]/95 dark:via-[#0a1d6c]/95 dark:to-[#0b2a98]/95 backdrop-blur-2xl px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_40px_rgba(37,99,235,0.35)] transition-colors overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Brand */}
        <div className="mb-4 flex items-center gap-3 border-b border-blue-400/20 px-2 pb-4">
          <span className="text-blue-500 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
            <GradCapIcon />
          </span>
          <p className="text-[22px] font-bold tracking-tight text-slate-900 dark:text-white">
            FACULTY <span className="text-blue-500 dark:text-blue-400">PORTAL</span>
          </p>
        </div>

        <nav className="flex-1 space-y-1">
          {NAV.map((item) => {
            const Icon = item.icon;

            if (item.type === "link") {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `${rowBase} ${isActive ? rowActive : rowIdle}`}
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? "text-white" : iconIdle}>
                        <Icon />
                      </span>
                      <span className="flex-1">{item.label}</span>
                      {!!item.badge && (
                        <>
                          <span className="text-slate-400"><ChevronIcon /></span>
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[11px] font-semibold text-white shadow-[0_0_10px_rgba(236,72,153,0.7)]">
                            {item.badge}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </NavLink>
              );
            }

            const open = !!openGroups[item.label];
            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => toggleGroup(item.label)}
                  className={`${rowBase} ${rowIdle}`}
                >
                  <span className={iconIdle}><Icon /></span>
                  <span className="flex-1 text-left leading-snug">{item.label}</span>
                  <span className="text-slate-400"><ChevronIcon open={open} /></span>
                </button>
                {open && (
                  <div className="mt-1 ml-7 space-y-1 border-l border-blue-400/20 pl-3 animate-[fadeIn_0.2s_ease-out]">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `outline-none focus:outline-none block rounded-lg px-3 py-2 text-sm transition-all duration-300 ${
                            isActive
                              ? "bg-blue-500/20 text-slate-900 dark:text-white"
                              : "text-slate-500 dark:text-slate-400 hover:bg-blue-500/10 hover:text-slate-900 dark:hover:text-slate-100"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={handleLogout}
            className={`${rowBase} mt-4 text-pink-500 dark:text-pink-400 hover:bg-pink-500/10`}
          >
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </div>
  );
}