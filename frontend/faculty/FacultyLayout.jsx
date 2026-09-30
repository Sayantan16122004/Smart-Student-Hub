import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function FacultyLayout() {
  return (
    <div className="relative flex h-screen overflow-hidden bg-slate-100 dark:bg-[#030817] transition-colors">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-600/30 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/25 blur-[110px]" />
      </div>

      <Sidebar />
      <div className="relative flex h-full min-w-0 flex-1 flex-col">
        <Topbar />
        {/* No page scroll: Dashboard fits the screen. Other long pages scroll inside here (scrollbar hidden). */}
        <main className="relative min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}