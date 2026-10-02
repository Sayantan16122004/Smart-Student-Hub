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
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.800 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
const CalendarIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h2M14 14h2M8 17.500h2" />
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
    <path d="M6 12v5c0 1.500 2.700 3 6 3s6-1.500 6-3v-5l-6 3z" opacity="0.85" />
  </svg>
);
const BookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="4" width="8" height="16" rx="1.500" /><rect x="13" y="4" width="8" height="16" rx="1.500" /><path d="M6 8h2M16 8h2" />
  </svg>
);
const BriefcaseIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
  </svg>
);
const AwardIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <circle cx="12" cy="9" r="5" /><path d="M8 14l-2 7 6-3 6 3-2-7" /><circle cx="12" cy="9" r="1.600" fill="currentColor" />
  </svg>
);
const LayersIcon = ({ size = 20 }) => (
  <svg width={size} height={size} {...svgProps}>
    <path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.500l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);
const CameraIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 3l-1.500 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.500L15 3z" />
    <circle cx="12" cy="13" r="3.600" fill="#0a1436" />
  </svg>
);
const PencilIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17.300V21h3.700L18 9.700 14.300 6zM20.700 7a1 1 0 0 0 0-1.400l-2.300-2.300a1 1 0 0 0-1.400 0L15.200 5l3.700 3.700z" />
  </svg>
);

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
  { icon: UserIcon, tone: "text-blue-500 dark:text-blue-300", label: "Full Name", value: "Pratul Shit" },
  { icon: MailIcon, tone: "text-emerald-500 dark:text-emerald-400", label: "Email Address", value: "pratulshit@example.com" },
  { icon: PhoneIcon, tone: "text-emerald-500 dark:text-emerald-400", label: "Phone Number", value: "+91 98765 43210" },
  { icon: CalendarIcon, tone: "text-sky-500 dark:text-sky-300", label: "Date of Birth", value: "15 Jan 1998" },
  { icon: GenderIcon, tone: "text-blue-500 dark:text-blue-300", label: "Gender", value: "Male" },
  { icon: PinIcon, tone: "text-emerald-500 dark:text-emerald-400", label: "Address", value: "Kolkata, West Bengal, India" },
];

const ACADEMIC = [
  { icon: BookIcon, tone: "text-sky-500 dark:text-sky-300", label: "Department", value: "Computer Science & Engineering" },
  { icon: BriefcaseIcon, tone: "text-blue-500 dark:text-blue-300", label: "Designation", value: "Assistant Professor" },
  { icon: AwardIcon, tone: "text-sky-500 dark:text-sky-300", label: "Qualification", value: "M.Tech" },
  { icon: LayersIcon, tone: "text-blue-500 dark:text-blue-300", label: "Experience", value: "5+ Years" },
];

/* ---------- pieces ---------- */

/* Same glass card as Dashboard */
function Card({ className = "", tint = "", glow = false, delay = 0, children }) {
  const base =
    tint ||
    "border-blue-300/20 bg-white/60 dark:bg-[#0a1a55]/30 dark:bg-gradient-to-br dark:from-[#1a3fbf]/12 dark:to-transparent";
  return (
    <div
      style={{ "--d": `${delay}ms` }}
      className={`anim-rise group relative overflow-hidden rounded-2xl border backdrop-blur-[6px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-blue-300/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_44px_rgba(37,99,235,0.3)] ${base} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
      {glow && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.4),transparent_60%)]" />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <h2 className="mb-3 flex items-center gap-3 text-base font-semibold text-slate-900 dark:text-white">
      <span className="text-blue-500 dark:text-blue-300"><Icon size={22} /></span>
      {children}
    </h2>
  );
}

function InfoRows({ rows }) {
  return (
    <div className="flex flex-col divide-y divide-slate-300/40 border-y border-slate-300/40 dark:divide-white/10 dark:border-white/10">
      {rows.map((r) => {
        const Icon = r.icon;
        return (
          <div key={r.label} className="group/row flex items-center gap-4 py-2.5 transition-colors hover:bg-white/[0.04]">
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center ${r.tone}`}>
              <Icon size={20} />
            </span>
            <span className="w-32 shrink-0 text-sm text-slate-500 dark:text-slate-300 sm:w-40">{r.label}</span>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-900 dark:text-white">{r.value}</span>
          </div>
        );
      })}
    </div>
  );
}

function ContactItem({ icon: Icon, tone, children }) {
  return (
    <span className="flex items-center gap-3 text-[15px] text-slate-700 dark:text-slate-100">
      <span className={tone}><Icon size={20} /></span>
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
    <div className="relative flex min-h-full flex-col gap-5 px-4 pb-6 pt-4 lg:pb-8 lg:pl-4 lg:pr-3 lg:pt-5">
      {/* Header */}
      <Card
        glow
        delay={0}
        tint="border-blue-300/25 bg-blue-50 dark:bg-[#0a1a55]/30 dark:bg-gradient-to-r dark:from-[#1346d0]/30 dark:via-[#1a1068]/30 dark:to-[#3b1a9a]/35"
      >
        <div className="flex flex-col items-start gap-6 px-7 py-6 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="relative shrink-0">
            <span className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/40 to-violet-600/40 p-2 ring-2 ring-blue-400/50 shadow-[0_0_40px_rgba(99,102,241,0.55)]">
              {imgError ? (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white/90 ring-2 ring-blue-300/60">
                  <UserIcon size={64} />
                </span>
              ) : (
                <img
                  src="/avatar.jpg"
                  alt={name}
                  onError={() => setImgError(true)}
                  className="h-full w-full rounded-full object-cover ring-2 ring-blue-300/60"
                />
              )}
            </span>
            <button
              type="button"
              aria-label="Change photo"
              className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-[#1a1a5e] text-blue-100 shadow-[0_0_14px_rgba(99,102,241,0.6)] outline-none transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <CameraIcon />
            </button>
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">{name}</h1>
            <span className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500/60 to-violet-500/60 px-4 py-1.5 text-[15px] font-medium text-slate-900 shadow-[0_0_14px_rgba(139,92,246,0.35)] dark:text-white">
              <GradCapIcon size={18} />
              {PROFILE.role}
            </span>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <ContactItem icon={MailIcon} tone="text-sky-500 dark:text-sky-300">{PROFILE.email}</ContactItem>
                <span className="hidden h-8 w-px bg-slate-300/60 dark:bg-white/15 sm:block" />
                <ContactItem icon={PhoneIcon} tone="text-sky-500 dark:text-sky-300">{PROFILE.phone}</ContactItem>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <ContactItem icon={PinIcon} tone="text-sky-500 dark:text-sky-300">{PROFILE.location}</ContactItem>
                <span className="hidden h-8 w-px bg-slate-300/60 dark:bg-white/15 sm:block" />
                <ContactItem icon={GradCapIcon} tone="text-emerald-500 dark:text-emerald-400">{PROFILE.department}</ContactItem>
              </div>
            </div>
          </div>

          {/* Edit */}
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_0_18px_rgba(139,92,246,0.55)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-violet-300 sm:self-start"
          >
            <PencilIcon /> Edit Profile
          </button>
        </div>
      </Card>

      {/* Details */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Card delay={120}>
          <div className="p-5">
            <SectionTitle icon={UserIcon}>Personal Information</SectionTitle>
            <InfoRows rows={PERSONAL} />
          </div>
        </Card>

        <Card delay={200} className="self-start">
          <div className="p-5">
            <SectionTitle icon={GradCapIcon}>Academic Details</SectionTitle>
            <InfoRows rows={ACADEMIC} />
          </div>
        </Card>
      </div>
    </div>
  );
}