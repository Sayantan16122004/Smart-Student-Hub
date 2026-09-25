import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000";

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

// off = true  -> password is HIDDEN (dots) -> show CLOSED/slashed eye
// off = false -> password is VISIBLE       -> show OPEN eye
const EyeIcon = ({ off }) =>
  off ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.4 5.5A9.8 9.8 0 0 1 12 5c5 0 9 4 10 7-0.4 1.2-1.2 2.5-2.3 3.6M6.3 6.3C4.3 7.6 2.9 9.5 2 12c1 3 5 7 10 7 1.3 0 2.5-0.2 3.6-0.6" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

const GradCapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 9l10-5 10 5-10 5-10-5z" />
    <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
);

const FacultyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
  </svg>
);

const AdminIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l7 3v6c0 4.8-3 8.9-7 11-4-2.1-7-6.2-7-11V5l7-3z" />
  </svg>
);

const ROLES = [
  { id: "student", label: "Student", icon: GradCapIcon },
  { id: "faculty", label: "Faculty", icon: FacultyIcon },
  { id: "admin", label: "Admin", icon: AdminIcon },
];

export default function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || data?.detail || "Signup failed. Please try again.");
        return;
      }

      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError("Could not reach the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-3">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          filter: "saturate(1.35) brightness(1.1) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Hide native browser password-reveal icons so only our custom eye shows */}
      <style>{`
        input[type="password"]::-ms-reveal,
        input[type="password"]::-ms-clear {
          display: none;
        }
        input::-webkit-credentials-auto-fill-button,
        input::-webkit-strong-password-auto-fill-button {
          display: none !important;
          visibility: hidden;
          pointer-events: none;
          position: absolute;
          right: 0;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center overflow-hidden">
        <img
          src="/logo.png"
          alt="Hooghly Engineering & Technology College"
          className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
        />
        <h1 className="mt-3 mb-3 text-center text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-lg whitespace-nowrap">
          HOOGHLY ENGINEERING &amp; TECHNOLOGY COLLEGE
        </h1>
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl p-5">
          <h2 className="text-2xl font-bold text-white">
            Create <span className="text-blue-400">Account</span>
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Join us! Fill in your details to get started.
          </p>

          <div className="mt-3">
            <div className="grid grid-cols-3 gap-2">
              {ROLES.map(({ id, label, icon: Icon }) => {
                const active = role === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setRole(id)}
                    className={`flex items-center justify-center gap-1.5 rounded-full border py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-gradient-to-r from-blue-700 to-blue-500 border-transparent text-white shadow"
                        : "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Icon />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-3 space-y-3" autoComplete="off">
            <input type="text" name="fake-username" autoComplete="username" className="hidden" />
            <input type="password" name="fake-password" autoComplete="new-password" className="hidden" />

            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 focus-within:border-blue-400 transition-colors">
              <span className="text-slate-400"><UserIcon /></span>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                autoComplete="off"
                required
                className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 focus-within:border-blue-400 transition-colors">
              <span className="text-slate-400"><MailIcon /></span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                autoComplete="off"
                required
                className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 focus-within:border-blue-400 transition-colors">
              <span className="text-slate-400"><LockIcon /></span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="new-password"
                required
                className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-slate-400 hover:text-white transition-colors shrink-0"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon off={!showPassword} />
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 focus-within:border-blue-400 transition-colors">
              <span className="text-slate-400"><LockIcon /></span>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                autoComplete="new-password"
                required
                className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="text-slate-400 hover:text-white transition-colors shrink-0"
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                <EyeIcon off={!showConfirm} />
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 py-3 font-semibold text-white shadow-lg hover:opacity-95 active:scale-[0.99] transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Sign Up"}
              {!loading && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              )}
            </button>
          </form>

          <div className="mt-4 border-t border-white/10 pt-3 text-center text-sm text-slate-300">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}