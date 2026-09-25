import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);
const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    <circle cx="17" cy="8" r="3" /><path d="M16 14.2c2.9.6 5 2.9 5 5.8" />
  </svg>
);
const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4z" /><path d="M8 8h7" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" />
  </svg>
);
const BadgeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="9" r="5" /><path d="M8 14l-2 7 6-3 6 3-2-7" />
  </svg>
);
const FileCheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 3h9l4 4v14H6z" /><path d="M9 13l2 2 4-4" />
  </svg>
);
const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  </svg>
);
const CompassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><path d="M16 8l-2 6-6 2 2-6z" />
  </svg>
);
const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 20V10M10 20V4M17 20v-7" />
  </svg>
);
const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" /><path d="M10 21a2 2 0 0 0 4 0" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" /><path d="M21 12H9" />
  </svg>
);
const ChevronIcon = ({ open }) => (
  <svg
    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    className={`transition-transform ${open ? "rotate-90" : ""}`}
  >
    <path d="M9 6l6 6-6 6" />
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
  { type: "link", label: "Notifications", to: "/faculty/notifications", icon: BellIcon },
];

function linkClasses(active) {
  return `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
    active
      ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow"
      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
  }`;
}

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
    <aside className="hidden lg:flex flex-col w-72 shrink-0 h-screen sticky top-0 bg-white dark:bg-slate-950/80 border-r border-slate-200 dark:border-white/10 px-3 py-4 overflow-y-auto transition-colors">
      <div className="px-2 pb-4 mb-2 border-b border-slate-200 dark:border-white/10">
        <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Faculty Portal</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV.map((item) => {
          if (item.type === "link") {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) => linkClasses(isActive)}
              >
                <Icon />
                <span>{item.label}</span>
              </NavLink>
            );
          }

          const Icon = item.icon;
          const open = !!openGroups[item.label];
          return (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => toggleGroup(item.label)}
                className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <Icon />
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronIcon open={open} />
              </button>
              {open && (
                <div className="mt-1 ml-5 space-y-1 border-l border-slate-200 dark:border-white/10 pl-3">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white"
                            : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200"
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
          className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 dark:text-red-400 hover:bg-red-500/10 transition-colors mt-2"
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}