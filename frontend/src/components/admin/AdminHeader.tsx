import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  ExternalLink,
  Plus,
  LogOut,
  ChevronRight,
  ShieldCheck,
  User as UserIcon,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useState, useRef, useEffect } from "react";

interface AdminHeaderProps {
  onOpenMobileMenu: () => void;
}

const BREADCRUMB_MAP: Record<string, string> = {
  admin: "CMS Quản Trị",
  articles: "Bài Viết Khảo Cứu",
  news: "Tin Tức & Sự Kiện",
  categories: "Chuyên Mục & Thẻ",
  media: "Thư Viện Media",
  users: "Quản Lý Người Dùng",
  "activity-logs": "Nhật Ký Hoạt Động",
  settings: "Cài Đặt Hệ Thống",
  create: "Soạn Thảo Mới",
  edit: "Chỉnh Sửa",
};

export default function AdminHeader({ onOpenMobileMenu }: AdminHeaderProps) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tính toán breadcrumbs từ pathname
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/95 backdrop-blur-md border-b border-[#DEDAD2] px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-stone-500 overflow-x-auto whitespace-nowrap py-1">
          {pathSegments.map((seg, idx) => {
            const isLast = idx === pathSegments.length - 1;
            const label = BREADCRUMB_MAP[seg] || seg;
            const fullPath = "/" + pathSegments.slice(0, idx + 1).join("/");

            return (
              <div key={fullPath} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />}
                {isLast ? (
                  <span className="font-semibold text-[#24231F] truncate">{label}</span>
                ) : (
                  <Link
                    to={fullPath}
                    className="hover:text-[#8F4E00] transition-colors truncate"
                  >
                    {label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Right: Actions & User Dropdown */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        {/* Xem website */}
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#DEDAD2] bg-[#FAF9F6] hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
          title="Mở trang chủ người dùng trong tab mới"
        >
          <ExternalLink className="w-3.5 h-3.5 text-[#8F4E00]" />
          <span>Xem Website</span>
        </Link>

        {/* Nút hành động nhanh: Viết bài */}
        <Link
          to="/admin/articles/create"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8F4E00] hover:bg-[#8F4E00]/90 text-white text-xs font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Viết bài mới</span>
        </Link>

        {/* Profile Pill & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-stone-100 transition-colors cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8F4E00] to-[#972F12] text-white font-bold text-xs flex items-center justify-center uppercase ring-2 ring-stone-200">
              {user?.fullName?.charAt(0) || "A"}
            </div>
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-[#DEDAD2] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-4 py-2 border-b border-stone-100">
                <p className="text-xs font-bold text-stone-900 truncate">
                  {user?.fullName || "Quản trị viên"}
                </p>
                <p className="text-[11px] text-stone-500 truncate">{user?.email}</p>
                <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md bg-[#FAF4EF] text-[#8F4E00] text-[10px] font-semibold uppercase">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{user?.role || "Quản trị"}</span>
                </div>
              </div>

              <div className="py-1">
                <Link
                  to="/admin/settings"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs text-stone-700 hover:bg-[#FAF9F6] transition-colors"
                >
                  <UserIcon className="w-4 h-4 text-stone-400" />
                  <span>Cài đặt hệ thống</span>
                </Link>
              </div>

              <div className="border-t border-stone-100 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

