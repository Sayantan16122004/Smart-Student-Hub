import { useRef, useState } from "react";

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

const ANIM_CSS = `
@keyframes pf-fade{from{opacity:0}to{opacity:1}}
@keyframes pf-pop{from{opacity:0;transform:translateY(12px) scale(.95)}to{opacity:1;transform:none}}
@keyframes pf-slide{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
@keyframes pf-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes pf-glow{0%,100%{box-shadow:0 0 30px rgba(59,130,246,.45)}50%{box-shadow:0 0 54px rgba(99,102,241,.8)}}
.pf-fade{animation:pf-fade .35s ease backwards}
.pf-pop{animation:pf-pop .3s cubic-bezier(.2,.8,.2,1) backwards}
.pf-slide{animation:pf-slide .5s cubic-bezier(.2,.8,.2,1) backwards;animation-delay:var(--d,0ms)}
.pf-up{animation:pf-up .5s cubic-bezier(.2,.8,.2,1) backwards;animation-delay:var(--d,0ms)}
.pf-glow{animation:pf-glow 3.2s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.pf-fade,.pf-pop,.pf-slide,.pf-up,.pf-glow{animation:none}}
`;

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

function InfoRows({ rows, roomy = false, baseDelay = 0 }) {
  return (
    <div className="flex flex-1 flex-col divide-y divide-slate-300/40 border-t border-slate-300/40 dark:divide-blue-300/10 dark:border-blue-300/10">
      {rows.map((r, i) => {
        const Icon = r.icon;
        return (
          <div
            key={r.label}
            style={{ "--d": `${baseDelay + i * 70}ms` }}
            className={`pf-slide group/row flex items-center gap-4 rounded-md py-[0.5rem] pl-0 transition-all duration-300 hover:bg-blue-400/[0.08] hover:pl-2 flex-1 lg:max-h-[3.25rem]`}
          >
            <span className={`flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover/row:scale-125 ${TONE[r.tone]}`}>
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

const AVATAR_KEY = "profileAvatar";
const VIEW = 288;
const OUT = 400;

function CropModal({ src, onCancel, onSave }) {
  const [nat, setNat] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const drag = useRef(null);

  const base = nat ? Math.max(VIEW / nat.w, VIEW / nat.h) : 1;
  const scale = base * zoom;

  const clamp = (x, y, s) => ({
    x: Math.min(0, Math.max(VIEW - nat.w * s, x)),
    y: Math.min(0, Math.max(VIEW - nat.h * s, y)),
  });

  const onLoad = (e) => {
    const w = e.target.naturalWidth;
    const h = e.target.naturalHeight;
    const b = Math.max(VIEW / w, VIEW / h);
    setNat({ w, h });
    setPos({ x: (VIEW - w * b) / 2, y: (VIEW - h * b) / 2 });
  };

  const changeZoom = (z) => {
    if (!nat) return;
    const next = Math.min(3, Math.max(1, z));
    const s2 = base * next;
    const cx = (VIEW / 2 - pos.x) / scale;
    const cy = (VIEW / 2 - pos.y) / scale;
    setPos(clamp(VIEW / 2 - cx * s2, VIEW / 2 - cy * s2, s2));
    setZoom(next);
  };

  const onDown = (e) => {
    if (!nat) return;
    drag.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const d = drag.current;
    setPos(clamp(d.x + e.clientX - d.px, d.y + e.clientY - d.py, scale));
  };
  const onUp = () => { drag.current = null; };

  const save = () => {
    if (!nat) return;
    const canvas = document.createElement("canvas");
    canvas.width = OUT;
    canvas.height = OUT;
    const r = OUT / VIEW;
    canvas.getContext("2d").drawImage(imgRef.current, pos.x * r, pos.y * r, nat.w * scale * r, nat.h * scale * r);
    onSave(canvas.toDataURL("image/jpeg", 0.9));
  };

  return (
    <div className="pf-fade fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onKeyDown={(e) => e.key === "Escape" && onCancel()}>
      <div className="pf-pop w-full max-w-sm rounded-2xl border border-blue-400/30 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] dark:bg-[#07123f]">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Crop Photo</h3>

        <div
          className="relative mx-auto cursor-grab touch-none select-none overflow-hidden rounded-xl bg-black active:cursor-grabbing"
          style={{ width: VIEW, height: VIEW }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onWheel={(e) => changeZoom(zoom - e.deltaY * 0.002)}
        >
          <img
            ref={imgRef}
            src={src}
            alt="Crop preview"
            draggable={false}
            onLoad={onLoad}
            className="pointer-events-none absolute left-0 top-0 max-w-none"
            style={nat ? { width: nat.w * scale, height: nat.h * scale, transform: `translate(${pos.x}px, ${pos.y}px)` } : { opacity: 0 }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] ring-2 ring-white/80" />
        </div>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">Zoom</span>
          <input
            type="range"
            min="1"
            max="3"
            step="0.01"
            value={zoom}
            onChange={(e) => changeZoom(parseFloat(e.target.value))}
            className="h-1.5 flex-1 cursor-pointer accent-blue-500"
          />
        </div>
        <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">Drag to reposition</p>

        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-slate-300/60 px-4 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-blue-300/20 dark:text-slate-200 dark:hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={save}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-[15px] font-medium text-white shadow-[0_0_14px_rgba(59,130,246,0.45)] transition-all hover:brightness-110"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function Profile() {
  const name = PROFILE.name;
  const [imgError, setImgError] = useState(false);
  const [avatar, setAvatar] = useState(() => localStorage.getItem(AVATAR_KEY) || "/avatar.jpg");
  const [cropSrc, setCropSrc] = useState(null);
  const fileRef = useRef(null);

  const onPick = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) return alert("Please select an image file.");
    if (file.size > 8 * 1024 * 1024) return alert("Image must be under 8 MB.");
    const reader = new FileReader();
    reader.onload = () => setCropSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const onSaveCrop = (dataUrl) => {
    setAvatar(dataUrl);
    setImgError(false);
    setCropSrc(null);
    try {
      localStorage.setItem(AVATAR_KEY, dataUrl);
    } catch {
      /* storage full */
    }
  };

  return (
    <div className="relative flex min-h-full flex-col gap-4 px-4 py-4 lg:h-full lg:min-h-0 lg:overflow-hidden lg:pl-4 lg:pr-3">
      <style>{ANIM_CSS}</style>

      {/* Header */}
      <Card
        glow
        delay={0}
        tint="border-blue-400/30 bg-blue-50 dark:bg-[#07123f]/50 dark:bg-gradient-to-r dark:from-[#1346d0]/35 dark:via-[#10247a]/35 dark:to-[#1a1a8a]/30"
      >
        <div className="flex flex-col items-start gap-6 px-7 py-6 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="pf-pop relative shrink-0 transition-transform duration-500 hover:scale-105">
            <span className="pf-glow flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 ring-4 ring-blue-300/40">
              {imgError ? (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white/90">
                  <UserIcon size={64} />
                </span>
              ) : (
                <img
                  key={avatar}
                  src={avatar}
                  alt={name}
                  onError={() => setImgError(true)}
                  className="pf-fade h-full w-full rounded-full object-cover"
                />
              )}
            </span>
            <button
              type="button"
              aria-label="Change photo"
              onClick={() => fileRef.current?.click()}
              className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/40 bg-[#0a1a55] text-blue-100 shadow-[0_0_14px_rgba(59,130,246,0.6)] outline-none transition-transform duration-300 hover:rotate-6 hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <CameraIcon />
            </button>
            <input ref={fileRef} type="file" accept="image/*" onChange={onPick} className="hidden" />
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <h1 style={{ "--d": "150ms" }} className="pf-up text-3xl font-semibold text-slate-900 dark:text-white">{name}</h1>
            <span style={{ "--d": "250ms" }} className="pf-up mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-[15px] font-medium text-white shadow-[0_0_14px_rgba(59,130,246,0.45)]">
              <GradCapIcon size={18} />
              {PROFILE.role}
            </span>
          </div>

          {/* Edit */}
          <button
            type="button"
            style={{ "--d": "350ms" }}
            className="pf-up group/edit flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_0_18px_rgba(59,130,246,0.55)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-300 sm:self-start"
          >
            <span className="transition-transform duration-300 group-hover/edit:-rotate-12 group-hover/edit:scale-110"><PencilIcon /></span>
            Edit Profile
          </button>
        </div>
      </Card>

      {/* Details */}
      <div className="grid grid-cols-1 gap-4 lg:min-h-0 lg:flex-1 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-1">
        <Card delay={120}>
          <div className="flex h-full flex-col px-6 py-4">
            <SectionTitle icon={UserIcon}>Personal Information</SectionTitle>
            <InfoRows rows={PERSONAL} baseDelay={250} />
          </div>
        </Card>

        <Card delay={200}>
          <div className="flex h-full flex-col px-6 py-4">
            <SectionTitle icon={GradCapIcon}>Academic Details</SectionTitle>
            <InfoRows rows={ACADEMIC} roomy baseDelay={330} />
          </div>
        </Card>
      </div>

      {cropSrc && <CropModal src={cropSrc} onCancel={() => setCropSrc(null)} onSave={onSaveCrop} />}
    </div>
  );
}