import { useState } from "react";

const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

const UserIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="8" r="4.2" /><path d="M3.5 21c0-4.4 3.8-7.5 8.5-7.5s8.5 3.1 8.5 7.5z" />
  </svg>
);
const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);
const PhoneIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
const PinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
const CalendarIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h2M14 14h2M8 17.5h2" />
  </svg>
);
const GenderIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="10" cy="14" r="5" /><path d="M14 10l6-6M15 4h5v5M10 19v3M8 21h4" />
  </svg>
);
const GradCapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5l-6 3z" opacity="0.85" />
  </svg>
);
const BookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="4" width="8" height="16" rx="1.5" /><rect x="13" y="4" width="8" height="16" rx="1.5" /><path d="M6 8h2M16 8h2" />
  </svg>
);
const BriefcaseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
  </svg>
);
const AwardIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="12" cy="9" r="5" /><path d="M8 14l-2 7 6-3 6 3-2-7" /><circle cx="12" cy="9" r="1.6" fill="currentColor" />
  </svg>
);
const LayersIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.5l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);
const CameraIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 3l-1.5 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.5L15 3z" />
    <circle cx="12" cy="13" r="3.6" fill="#0a1436" />
  </svg>
);
const PencilIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17.3V21h3.7L18 9.7 14.3 6zM20.7 7a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0L15.2 5l3.7 3.7z" />
  </svg>
);

/* ---------- tones (same palette as dashboard stat cards) ---------- */

const TONE = {
  sky: "text-sky-500 dark:text-sky-400",
  violet: "text-violet-500 dark:text-violet-300",
  green: "text-emerald-500 dark:text-emerald-400",
  indigo: "text-indigo-500 dark:text-indigo-300",
};

/* ---------- data ---------- */

const PROFILE = {
  name: "Pratul Shit",
  role: "Faculty Member",
  email: "pratulshit@example.com",
  phone: "+91 98765 43210",
  location: "Kolkata, West Bengal",
  department: "CSE Department",
};

const PERSONAL = [
  { icon: UserIcon, tone: "violet", label: "Full Name", value: "Pratul Shit" },
  { icon: MailIcon, tone: "green", label: "Email Address", value: "pratulshit@example.com" },
  { icon: PhoneIcon, tone: "green", label: "Phone Number", value: "+91 98765 43210" },
  { icon: CalendarIcon, tone: "sky", label: "Date of Birth", value: "15 Jan 1998" },
  { icon: GenderIcon, tone: "violet", label: "Gender", value: "Male" },
  { icon: PinIcon, tone: "green", label: "Address", value: "Kolkata, West Bengal, India" },
];

const ACADEMIC = [
  { icon: BookIcon, tone: "indigo", label: "Department", value: "Computer Science & Engineering" },
  { icon: BriefcaseIcon, tone: "indigo", label: "Designation", value: "Assistant Professor" },
  { icon: AwardIcon, tone: "indigo", label: "Qualification", value: "M.Tech" },
  { icon: LayersIcon, tone: "indigo", label: "Experience", value: "5+ Years" },
];

/* ---------- pieces ---------- */

/* Same glass card as Dashboard */
function Card({ className = "", tint = "", glow = false, delay = 0, children }) {
  const base =
    tint ||
    "border-blue-400/20 bg-white/60 dark:bg-[#07123f]/60 dark:bg-gradient-to-br dark:from-[#1a3fbf]/15 dark:to-transparent";
  return (
    <div
      style={{ "--d": `${delay}ms` }}
      className={`anim-rise group relative overflow-hidden rounded-2xl border backdrop-blur-[6px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-blue-400/50 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_44px_rgba(37,99,235,0.3)] ${base} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
      {glow && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.35),transparent_60%)]" />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
      <span className="text-blue-500 dark:text-blue-400"><Icon size={22} /></span>
      {children}
    </h2>
  );
}

function InfoRows({ rows, roomy = false }) {
  return (
    <div className="flex flex-col divide-y divide-slate-300/40 border-t border-slate-300/40 dark:divide-blue-300/10 dark:border-blue-300/10">
      {rows.map((r) => {
        const Icon = r.icon;
        return (
          <div
            key={r.label}
            className={`group/row flex items-center gap-4 transition-colors hover:bg-blue-400/[0.06] ${roomy ? "py-3" : "py-[0.5rem]"}`}
          >
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center ${TONE[r.tone]}`}>
              <Icon size={20} />
            </span>
            <span className="w-28 shrink-0 text-[15px] text-slate-500 dark:text-slate-400 sm:w-44">{r.label}</span>
            <span className="min-w-0 flex-1 truncate text-[15px] font-medium text-slate-900 dark:text-white">{r.value}</span>
          </div>
        );
      })}
    </div>
  );
}

function ContactItem({ icon: Icon, tone, children }) {
  return (
    <span className="flex items-center gap-3 text-[15px] text-slate-700 dark:text-slate-100">
      <span className={TONE[tone]}><Icon size={20} /></span>
      {children}
    </span>
  );
}

/* ---------- page ---------- */

export default function Profile() {
  const storedName = localStorage.getItem("fullName");
  const name = storedName || PROFILE.name;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex min-h-full flex-col gap-4 px-4 py-4 lg:h-full lg:min-h-0 lg:overflow-hidden lg:pl-4 lg:pr-3">
      {/* Header */}
      <Card
        glow
        delay={0}
        tint="border-blue-400/30 bg-blue-50 dark:bg-[#07123f]/50 dark:bg-gradient-to-r dark:from-[#1346d0]/35 dark:via-[#10247a]/35 dark:to-[#1a1a8a]/30"
      >
        <div className="flex flex-col items-start gap-6 px-6 py-4 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="relative shrink-0">
            <span className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 ring-4 ring-blue-300/40 shadow-[0_0_40px_rgba(59,130,246,0.55)]">
              {imgError ? (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white/90">
                  <UserIcon size={52} />
                </span>
              ) : (
                <img
                  src="/avatar.jpg"
                  alt={name}
                  onError={() => setImgError(true)}
                  className="h-full w-full rounded-full object-cover"
                />
              )}
            </span>
            <button
              type="button"
              aria-label="Change photo"
              className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-[#0a1a55] text-blue-100 shadow-[0_0_14px_rgba(59,130,246,0.6)] outline-none transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <CameraIcon />
            </button>
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">{name}</h1>
            <span className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-[15px] font-medium text-white shadow-[0_0_14px_rgba(59,130,246,0.45)]">
              <GradCapIcon size={18} />
              {PROFILE.role}
            </span>

            <div className="mt-3 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <ContactItem icon={MailIcon} tone="sky">{PROFILE.email}</ContactItem>
                <span className="hidden h-8 w-px bg-slate-300/60 dark:bg-blue-300/15 sm:block" />
                <ContactItem icon={PhoneIcon} tone="sky">{PROFILE.phone}</ContactItem>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <ContactItem icon={PinIcon} tone="sky">{PROFILE.location}</ContactItem>
                <span className="hidden h-8 w-px bg-slate-300/60 dark:bg-blue-300/15 sm:block" />
                <ContactItem icon={GradCapIcon} tone="green">{PROFILE.department}</ContactItem>
              </div>
            </div>
          </div>

          {/* Edit */}
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_0_18px_rgba(59,130,246,0.55)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-blue-300 sm:self-start"
          >
            <PencilIcon /> Edit Profile
          </button>
        </div>
      </Card>

      {/* Details */}
      <div className="grid grid-cols-1 gap-4 lg:min-h-0 lg:flex-1 lg:grid-cols-[1.25fr_1fr]">
        <Card delay={120}>
          <div className="h-full px-6 py-4 lg:overflow-hidden">
            <SectionTitle icon={UserIcon}>Personal Information</SectionTitle>
            <InfoRows rows={PERSONAL} />
          </div>
        </Card>

        <Card delay={200}>
          <div className="h-full px-6 py-4 lg:overflow-hidden">
            <SectionTitle icon={GradCapIcon}>Academic Details</SectionTitle>
            <InfoRows rows={ACADEMIC} roomy />
          </div>
        </Card>
      </div>
    </div>
  );
}