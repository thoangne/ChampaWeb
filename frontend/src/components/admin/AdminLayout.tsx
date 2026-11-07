import { useState, type ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminRoute from "../blog/AdminRoute";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <AdminRoute>
      <div className="min-h-screen bg-[#FFF8F6] text-[#24231F] flex flex-col font-body-md antialiased selection:bg-[#8F4E00] selection:text-white">
        {/* Sidebar */}
        <AdminSidebar
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
        />

        {/* Main Content Wrapper */}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${
            isCollapsed ? "lg:pl-20" : "lg:pl-64"
          }`}
        >
          {/* Header Bar */}
          <AdminHeader onOpenMobileMenu={() => setIsMobileOpen(true)} />

          {/* Page Body */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-in fade-in duration-150">
            {children}
          </main>
        </div>
      </div>
    </AdminRoute>
  );
}

