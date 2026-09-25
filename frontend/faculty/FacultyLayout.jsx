import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function FacultyLayout() {
  return (
    <div className="relative flex min-h-screen bg-white dark:bg-[#050815] transition-colors overflow-hidden">
      {/* Ambient background glow blobs — this is what gives the "glass" feel its depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-indigo-600/10 blur-[100px]" />
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