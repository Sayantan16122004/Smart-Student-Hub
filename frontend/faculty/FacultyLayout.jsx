import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function FacultyLayout() {
  return (
    <div className="relative flex min-h-screen bg-slate-100 dark:bg-[#030817] transition-colors overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-600/30 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/25 blur-[110px]" />
      </div>

      <Sidebar />
      <div className="relative flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}