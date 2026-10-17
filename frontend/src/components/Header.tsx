import { LOGO_URL, PC_NAV_LINKS } from "../data/champaData";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AudioLines, Search, User, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAudio } from "../lib/AudioContext";

interface HeaderProps {
  onToggleAudio?: () => void;
  isAudioPlaying?: boolean;
}

export default function Header({ onToggleAudio, isAudioPlaying }: HeaderProps) {
  const audioCtx = useAudio();
  const currentIsPlaying =
    isAudioPlaying !== undefined ? isAudioPlaying : audioCtx?.isAudioPlaying ?? false;

  const handleAudioToggle = () => {
    if (onToggleAudio) {
      onToggleAudio();
    } else if (audioCtx) {
      audioCtx.toggleAudio();
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState<Record<string, boolean>>({
    "/bai-viet": true,
    "/so-hoa-di-san": true,
  });
  const location = useLocation();

  const toggleMobileSubMenu = (href: string) => {
    setOpenMobileSubMenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  // FIX LỖI 2 CLICK & CHUYỂN TRANG: Tự động cuộn đến phần tử khi URL có chứa Hash (#) từ trang khác chuyển về
  useEffect(() => {
    if (location.hash) {
      // Delay 150ms để đợi DOM của trang mới render xong rồi mới cuộn tới
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  // FIX LỖI ẤN TRANG CHỦ: Hàm xử lý click cuộn mượt mà ngay lập tức
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false); // Đóng menu mobile (nếu đang mở)

    if (href === "/") {
      // Nếu là trang chủ, ép cuộn lên đầu trang mượt mà
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.includes("#")) {
      // Nếu là link neo, tìm ID và cuộn tới ngay lập tức (nếu đang ở cùng trang)
      const hash = href.substring(href.indexOf("#"));
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(36,25,21,0.06)] border-b border-surface-container-high/40 transition-all">
      {/* Full-width container with responsive side padding */}
      <div className="w-full h-16 xl:h-20 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* 1. Brand Logo (nowrap) */}
        <div className="flex items-center shrink-0">
          <Link className="flex items-center gap-2 sm:gap-3 group whitespace-nowrap" to="/" onClick={() => handleNavClick("/")}>
            <img
              alt="Logo Dana - Di sản & Văn hóa Chăm"
              className="h-9 sm:h-11 xl:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
              src={LOGO_URL}
              loading="eager"
            />
            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="font-label-sm text-[9px] sm:text-[10px] xl:text-[11px] uppercase tracking-wider sm:tracking-widest text-secondary font-semibold whitespace-nowrap leading-tight">
                Panduranga Heritage
              </span>
              <span className="font-serif text-base sm:text-lg xl:text-xl text-on-surface leading-tight group-hover:text-primary transition-colors font-bold whitespace-nowrap">
                Dana Champa
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Desktop Navigation Links (nowrap, full width friendly) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
          {PC_NAV_LINKS.map((link) => {
            // Nhận diện trạng thái Active chuẩn xác
            let isRouteActive = false;
            if (link.href === "/") {
              isRouteActive = location.pathname === "/" && !location.hash;
            } else if (link.href.includes("#")) {
              const hashPart = link.href.substring(link.href.indexOf("#"));
              const pathPart = link.href.split("#")[0] || "/";
              isRouteActive = location.pathname === pathPart && location.hash === hashPart;
            } else if (link.href === "/bai-viet") {
              isRouteActive =
                location.pathname.startsWith("/bai-viet") ||
                location.pathname.startsWith("/blog") ||
                location.pathname.startsWith("/di-san");
            } else if (link.href === "/so-hoa-di-san") {
              isRouteActive =
                location.pathname.startsWith("/so-hoa-di-san") ||
                location.pathname.startsWith("/hinh-anh") ||
                location.pathname.startsWith("/ngon-ngu") ||
                location.pathname.startsWith("/ban-do");
            } else {
              isRouteActive = location.pathname.startsWith(link.href);
            }

            const activeClass = "text-primary font-bold border-b-2 border-primary pb-1";
            const inactiveClass =
              "text-on-surface-variant hover:text-on-surface hover:text-primary border-b-2 border-transparent pb-1";
            const currentClass = isRouteActive ? activeClass : inactiveClass;

            // Nếu menu có các mục con (Dropdown)
            if (link.children && link.children.length > 0) {
              return (
                <div key={link.href} className="relative group py-1">
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-label-lg text-sm xl:text-base whitespace-nowrap transition-colors flex items-center gap-1.5 ${currentClass}`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200 text-outline group-hover:text-primary" />
                  </Link>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                    <div className="w-64 bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(36,25,21,0.12)] border border-surface-container-high/60 p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      {link.children.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => handleNavClick(sub.href)}
                          className="p-2.5 rounded-xl hover:bg-surface-container text-left transition-colors group/sub"
                        >
                          <div className="font-title-sm text-sm font-semibold text-on-surface group-hover/sub:text-primary transition-colors">
                            {sub.label}
                          </div>
                          {sub.desc && (
                            <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight mt-0.5 line-clamp-1">
                              {sub.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Menu đơn thông thường
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-label-lg text-sm xl:text-base whitespace-nowrap transition-colors py-1 ${currentClass}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right Interaction Actions (nowrap, shrink-0) */}
        <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-3 shrink-0">
          {/* Audio Saranai Button */}
          <button
            onClick={handleAudioToggle}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              currentIsPlaying
                ? "bg-primary-container text-on-primary-container border-primary shadow-sm"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface border-transparent"
            }`}
            title="Bật/tắt thanh âm nhạc cụ Chăm (Saranai - Paranưng)"
            type="button"
          >
            <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative shrink-0">
              {currentIsPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 ${
                  currentIsPlaying ? "bg-primary" : "bg-secondary"
                }`}
              ></span>
            </span>
            <AudioLines className={`h-4 w-4 shrink-0 ${currentIsPlaying ? "text-primary animate-pulse" : "text-secondary"}`} />
            <span className="font-label-sm text-xs uppercase hidden xl:inline tracking-wider text-on-surface-variant font-medium whitespace-nowrap">
              {currentIsPlaying ? "Đang phát Saranai" : "Thanh âm Saranai"}
            </span>
          </button>

          {/* Search Button */}
          <button
            className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shrink-0"
            title="Tìm kiếm kho tàng di sản"
            type="button"
            onClick={() => {
              const el = document.getElementById("hanh-trinh");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Search className="h-4 w-4 text-on-surface-variant" />
          </button>


          {/* User Avatar - Ẩn trên mobile nhỏ để tránh chen lấn thanh bar */}
          <Avatar className="hidden sm:inline-flex h-9 w-9 shrink-0">
            <AvatarFallback className="bg-primary text-on-primary font-medium text-xs">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>

          {/* Mobile Menu Toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9 rounded-xl shrink-0 text-on-surface hover:bg-surface-container"
            aria-label={mobileMenuOpen ? "Đóng danh mục" : "Mở danh mục"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-t border-surface-container-high px-4 py-3 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Drawer Top Heading */}
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-surface-container-high/60">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-bold">
              Danh mục khám phá di sản
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary text-xs flex items-center gap-1 font-medium p-1 cursor-pointer"
              type="button"
            >
              <span>Đóng</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          {PC_NAV_LINKS.map((link) => {
            let isRouteActive = false;
            if (link.href === "/") {
              isRouteActive = location.pathname === "/" && !location.hash;
            } else if (link.href.includes("#")) {
              const hashPart = link.href.substring(link.href.indexOf("#"));
              const pathPart = link.href.split("#")[0] || "/";
              isRouteActive = location.pathname === pathPart && location.hash === hashPart;
            } else {
              isRouteActive = location.pathname.startsWith(link.href);
            }

            const mobileClass = isRouteActive
              ? "bg-primary-container text-on-primary-container font-bold"
              : "text-on-surface hover:bg-surface-container";

            // Menu trên mobile có các mục con
            if (link.children && link.children.length > 0) {
              const isSubOpen = !!openMobileSubMenus[link.href];
              return (
                <div key={link.href} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`font-label-lg py-2.5 px-3 rounded-lg transition-colors whitespace-nowrap text-sm flex-1 ${mobileClass}`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubMenu(link.href)}
                      className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      aria-label="Thu phóng mục con"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isSubOpen && (
                    <div className="pl-3.5 pr-2 py-1 flex flex-col gap-1 border-l-2 border-primary/20 ml-3">
                      {link.children.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => handleNavClick(sub.href)}
                          className="py-2 px-3 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-label-lg py-2.5 px-3 rounded-lg transition-colors whitespace-nowrap text-sm ${mobileClass}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}