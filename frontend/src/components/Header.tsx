import { LOGO_URL, PC_NAV_LINKS } from "../data/champaData";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  AudioLines,
  Menu,
  ChevronDown,
  X,
  Globe,
  Newspaper,
  Landmark,
  Sparkles,
  Image as ImageIcon,
  BookOpen,
  Scroll,
  HelpCircle,
  LogIn,
  LogOut,
  Compass,
  FileText,
  Plus,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAudio } from "../lib/AudioContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "./ui/sonner";

interface HeaderProps {
  onToggleAudio?: () => void;
  isAudioPlaying?: boolean;
}

// Từ điển đa ngữ cho Navigation Header (Tiếng Việt & Tiếng Anh)
const NAV_LABELS: Record<string, { vi: string; en: string }> = {
  "/tour": { vi: "Dana Tour", en: "Dana Tour" },
  "/san-pham": { vi: "Sản phẩm", en: "Crafts & Products" },
  "/nghe-nhan": { vi: "Chân dung nghệ nhân", en: "Master Artisans" },
  "/bai-viet": { vi: "Bài Viết", en: "Articles" },
  "/so-hoa-di-san": { vi: "Số hoá di sản", en: "Digital Heritage" },
};

const SUB_NAV_LABELS: Record<string, { vi: string; en: string; descVi: string; descEn: string }> = {
  "/bai-viet?category=tin-tuc": {
    vi: "Tin tức",
    en: "News",
    descVi: "Sự kiện, bảo tồn & nhịp sống bản địa",
    descEn: "Events, preservation & local life",
  },
  "/bai-viet?category=lich-su": {
    vi: "Lịch sử",
    en: "History",
    descVi: "Vương triều, khảo cổ học & di tích ngàn năm",
    descEn: "Dynasties, archaeology & ancient relics",
  },
  "/bai-viet?category=van-hoa": {
    vi: "Văn Hoá",
    en: "Culture",
    descVi: "Đền tháp, làng nghề gốm - dệt & lễ hội",
    descEn: "Towers, pottery, weaving & sacred festivals",
  },
  "/so-hoa-di-san?tab=hinh-anh": {
    vi: "Hình ảnh Văn hoá",
    en: "Cultural Gallery",
    descVi: "Kho ảnh nghệ thuật điền dã & bảo tàng số",
    descEn: "Fieldwork photography & digital museum",
  },
  "/so-hoa-di-san?tab=ngon-ngu": {
    vi: "Ngôn ngữ Chăm Akhar Thrah",
    en: "Akhar Thrah Script",
    descVi: "Ký tự cổ tương tác, âm thanh & từ điển số",
    descEn: "Interactive ancient script, audio & dictionary",
  },
  "/so-hoa-di-san?tab=van-bia": {
    vi: "Giải mã Văn bia Cổ",
    en: "Ancient Inscriptions",
    descVi: "Bản dập bia ký sa thạch Sanskrit - Chăm",
    descEn: "Sanskrit - Cham sandstone stele rubbings",
  },
};

const SUB_MENU_ICONS: Record<string, { icon: typeof Newspaper; color: string; bg: string }> = {
  "/bai-viet?category=tin-tuc": {
    icon: Newspaper,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  "/bai-viet?category=lich-su": {
    icon: Landmark,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  "/bai-viet?category=van-hoa": {
    icon: Sparkles,
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  "/so-hoa-di-san?tab=hinh-anh": {
    icon: ImageIcon,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  "/so-hoa-di-san?tab=ngon-ngu": {
    icon: BookOpen,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  "/so-hoa-di-san?tab=van-bia": {
    icon: Scroll,
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
};

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

  // Quản lý ngôn ngữ: Mặc định lấy từ localStorage hoặc tiếng Việt ('vi')
  const [language, setLanguage] = useState<"vi" | "en">(() => {
    const saved = localStorage.getItem("champa_language");
    return saved === "en" ? "en" : "vi";
  });

  const { user, isAdmin, openAuthModal, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const location = useLocation();

  const handleLanguageChange = (lang: "vi" | "en") => {
    if (lang === language) return;
    setLanguage(lang);
    localStorage.setItem("champa_language", lang);
    toast.success(
      lang === "vi"
        ? "Đã chuyển giao diện sang Tiếng Việt"
        : "Switched interface language to English"
    );
  };

  const toggleMobileSubMenu = (href: string) => {
    setOpenMobileSubMenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  // Hàm cuộn mượt có trừ hao chiều cao Header
  const scrollToElement = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Tự động cuộn khi URL có chứa Hash (#)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        scrollToElement(id);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, scrollToElement]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.includes("#")) {
      const [pathPart, hashPart] = href.split("#");
      const targetPath = pathPart || "/";
      if (location.pathname === targetPath && hashPart) {
        scrollToElement(hashPart);
      }
    } else if (location.pathname !== href) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  };

  // Lọc bỏ nút Trang chủ theo yêu cầu
  const activeNavLinks = PC_NAV_LINKS.filter((link) => link.href !== "/");

  return (
    <header className="fixed top-0 left-0 w-full z-[90] bg-surface/95 backdrop-blur-xl shadow-[0_2px_14px_rgba(36,25,21,0.06)] border-b border-surface-container-high/60 transition-all">
      <div className="w-full h-16 xl:h-20 px-2.5 sm:px-3.5 xl:px-4 flex items-center justify-between gap-2.5 sm:gap-4">

        {/* ========================================================
            1. Brand Logo: Cố định hoàn toàn bên trái
        ======================================================== */}
        <div className="flex items-center shrink-0">
          <Link
            className="flex items-center gap-2.5 sm:gap-3 group select-none whitespace-nowrap"
            to="/"
            onClick={() => handleNavClick("/")}
            title="Dana Community Tourism - Panduranga Heritage"
          >
            <img
              alt="Logo Dana - Di sản & Văn hóa Chăm"
              className="h-9 sm:h-11 xl:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
              src={LOGO_URL}
              loading="eager"
            />
            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="font-label-sm text-[10px] xl:text-[11px] uppercase tracking-normal text-primary font-bold whitespace-nowrap leading-tight">
                Dana Community Tourism
              </span>
              <span className="font-serif text-xs sm:text-sm xl:text-base text-primary leading-tight font-bold whitespace-nowrap">
                Panduranga Heritage
              </span>
            </div>
          </Link>
        </div>



        {/* ========================================================
            2. Các phần còn lại nằm hết bên phải (ml-auto)
        ======================================================== */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 xl:gap-5 ml-auto shrink-0">

          {/* 2.1 Desktop Navigation Links (Đã bỏ nút Trang chủ) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 h-full">
            {activeNavLinks.map((link) => {
              let isRouteActive = false;
              if (link.href.includes("#")) {
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

              // Nhãn theo ngôn ngữ
              const translatedLabel =
                language === "en" && NAV_LABELS[link.href]
                  ? NAV_LABELS[link.href].en
                  : NAV_LABELS[link.href]?.vi || link.label;

              const baseClass =
                "inline-flex items-center justify-center text-xs xl:text-sm font-semibold whitespace-nowrap transition-all border-b-2 h-10 px-2.5 xl:px-3";
              const currentClass = isRouteActive
                ? `${baseClass} text-primary font-bold border-primary`
                : `${baseClass} text-primary hover:text-primary/75 border-transparent hover:border-primary/40`;

              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.href} className="relative group flex items-center h-full">
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`${currentClass} gap-1.5`}
                    >
                      <span>{translatedLabel}</span>
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:rotate-180 duration-200 text-primary" />
                    </Link>

                    {/* Dropdown Menu Container */}
                    <div className="absolute top-[calc(100%-4px)] right-0 pt-2 hidden group-hover:block z-[100]">
                      <div className="w-72 xl:w-80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(36,25,21,0.22)] border border-[#dfc0b8]/80 p-2.5 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-1 duration-150 ring-1 ring-black/5">
                        {link.children.map((sub) => {
                          const itemConfig = SUB_MENU_ICONS[sub.href] || {
                            icon: HelpCircle,
                            color: "text-primary",
                            bg: "bg-primary/10",
                          };
                          const IconComponent = itemConfig.icon;
                          const subData = SUB_NAV_LABELS[sub.href];
                          const subLabel =
                            language === "en" && subData ? subData.en : sub.label;
                          const subDesc =
                            language === "en" && subData ? subData.descEn : sub.desc;

                          return (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => handleNavClick(sub.href)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-surface-container text-left transition-colors group/sub"
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${itemConfig.bg} ${itemConfig.color}`}
                              >
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-title-sm text-xs xl:text-sm font-bold text-on-surface group-hover/sub:text-primary transition-colors">
                                  {subLabel}
                                </div>
                                {subDesc && (
                                  <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight mt-0.5 line-clamp-1">
                                    {subDesc}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={currentClass}
                >
                  {translatedLabel}
                </Link>
              );
            })}
          </nav>

          {/* 2.2 Audio Saranai Button */}
          <button
            onClick={handleAudioToggle}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${currentIsPlaying
              ? "bg-primary-container text-on-primary-container border-primary shadow-xs"
              : "bg-surface-container hover:bg-surface-container-high text-on-surface border-transparent"
              }`}
            title={
              language === "vi"
                ? "Bật/tắt thanh âm nhạc cụ Chăm (Saranai - Paranưng)"
                : "Toggle Cham folk instruments audio (Saranai - Paranung)"
            }
            type="button"
          >
            <span className="flex h-2 w-2 relative shrink-0">
              {currentIsPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${currentIsPlaying ? "bg-primary" : "bg-secondary"
                  }`}
              ></span>
            </span>
            <AudioLines
              className={`h-4 w-4 shrink-0 ${currentIsPlaying ? "text-primary animate-pulse" : "text-secondary"
                }`}
            />
            <span className="font-label-sm text-xs uppercase hidden xl:inline tracking-wider text-primary font-medium whitespace-nowrap">
              {currentIsPlaying
                ? language === "vi"
                  ? "Đang phát Saranai"
                  : "Playing Saranai"
                : language === "vi"
                  ? "Thanh âm Saranai"
                  : "Saranai Sound"}
            </span>
          </button>

          {/* 2.3 User Authentication & Profile Menu */}
          {!user ? (
            <button
              type="button"
              onClick={() => openAuthModal("login")}
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-amber-700/10 text-amber-800 hover:bg-amber-700 hover:text-white font-semibold text-xs border border-amber-700/20 shadow-2xs transition-all cursor-pointer shrink-0"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>{language === "vi" ? "Đăng nhập" : "Sign In"}</span>
            </button>
          ) : (
            <div className="relative hidden sm:inline-block shrink-0" ref={userMenuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 p-1 rounded-full hover:bg-stone-100 transition-all cursor-pointer focus:outline-none"
                aria-label="Tài khoản cá nhân"
              >
                <Avatar className="h-9 w-9 ring-2 ring-amber-700/30 shrink-0">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.fullName} className="h-full w-full object-cover" />
                  ) : (
                    <AvatarFallback className="bg-amber-700 text-white font-bold text-xs uppercase">
                      {user.fullName ? user.fullName.charAt(0) : "U"}
                    </AvatarFallback>
                  )}
                </Avatar>
                <ChevronDown className="h-3.5 w-3.5 text-stone-500" />
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-stone-200/90 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2.5 border-b border-stone-100">
                    <p className="text-xs font-bold text-stone-900 truncate">{user.fullName}</p>
                    <p className="text-[11px] text-stone-500 truncate">{user.email}</p>
                    <span className="inline-block mt-1 text-[9px] font-semibold uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                      {user.provider === "google" ? "Google Account" : user.provider === "facebook" ? "Facebook Account" : "Champa Account"}
                    </span>
                  </div>

                  <div className="py-1">
                    <Link
                      to="/tour"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-stone-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                    >
                      <Compass className="h-4 w-4 text-amber-700" />
                      <span>{language === "vi" ? "Đơn đặt tour & Trải nghiệm" : "My Bookings & Tours"}</span>
                    </Link>
                  </div>

                  {isAdmin && (
                    <div className="py-1 border-t border-stone-100 bg-[#fff1ec]/40">
                      <div className="px-4 py-1 text-[9px] font-bold uppercase tracking-wider text-secondary">
                        Quản trị Hệ thống
                      </div>
                      <Link
                        to="/admin/blog/quan-ly"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs text-stone-800 hover:bg-[#fff1ec] font-semibold transition-colors"
                      >
                        <FileText className="h-4 w-4 text-primary" />
                        <span>{language === "vi" ? "Quản lý bài viết Blog" : "Manage Blog Posts"}</span>
                      </Link>
                      <Link
                        to="/admin/blog/editor"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs text-stone-800 hover:bg-[#fff1ec] font-semibold transition-colors"
                      >
                        <Plus className="h-4 w-4 text-secondary" />
                        <span>{language === "vi" ? "Viết bài blog mới" : "Write New Post"}</span>
                      </Link>
                    </div>
                  )}

                  <div className="border-t border-stone-100 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>{language === "vi" ? "Đăng xuất" : "Sign Out"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2.4 Mobile Menu Toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9 rounded-xl shrink-0 text-on-surface hover:bg-surface-container"
            aria-label={mobileMenuOpen ? "Đóng danh mục" : "Mở danh mục"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* 2.5 Nút chuyển đổi ngôn ngữ VI / EN (Góc nhỏ sát bên phải) */}
          <div className="flex items-center p-0.5 rounded-full bg-surface-container border border-outline-variant/30 text-[9px] sm:text-[10px] font-bold tracking-tight shadow-xs shrink-0">
            <button
              type="button"
              onClick={() => handleLanguageChange("vi")}
              className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer leading-none ${language === "vi"
                ? "bg-primary text-on-primary shadow-xs"
                : "text-primary/75 hover:text-primary"
                }`}
              title="Tiếng Việt"
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer leading-none ${language === "en"
                ? "bg-primary text-on-primary shadow-xs"
                : "text-primary/75 hover:text-primary"
                }`}
              title="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. Mobile Drawer Menu (Đã loại bỏ Trang chủ & Tìm kiếm)
      ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-surface-container-high px-4 py-3 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-surface-container-high/60">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-bold">
              {language === "vi" ? "Danh mục khám phá di sản" : "Heritage Discovery Menu"}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-surface-variant hover:text-primary text-xs flex items-center gap-1 font-medium p-1 cursor-pointer"
              type="button"
            >
              <span>{language === "vi" ? "Đóng" : "Close"}</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Bộ chọn ngôn ngữ hiển thị rõ ràng trên mobile */}
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 mb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
              <Globe className="h-4 w-4 text-secondary" />
              <span>{language === "vi" ? "Ngôn ngữ / Language" : "Language / Ngôn ngữ"}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleLanguageChange("vi")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${language === "vi"
                  ? "bg-primary text-white"
                  : "text-on-surface-variant bg-surface-container"
                  }`}
              >
                Tiếng Việt
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${language === "en"
                  ? "bg-primary text-white"
                  : "text-on-surface-variant bg-surface-container"
                  }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Mobile User Authentication / Profile Section */}
          {!user ? (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openAuthModal("login");
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-700 text-white font-semibold text-xs shadow-sm mb-2 cursor-pointer transition-all hover:bg-amber-800"
            >
              <LogIn className="h-4 w-4" />
              <span>{language === "vi" ? "Đăng nhập / Đăng ký" : "Sign In / Register"}</span>
            </button>
          ) : (
            <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/90 border border-amber-200/70 mb-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <Avatar className="h-9 w-9 ring-1 ring-amber-600/30 shrink-0">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.fullName} className="h-full w-full object-cover" />
                  ) : (
                    <AvatarFallback className="bg-amber-700 text-white font-bold text-xs uppercase">
                      {user.fullName ? user.fullName.charAt(0) : "U"}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-stone-900 truncate">{user.fullName}</p>
                  <p className="text-[10px] text-stone-500 truncate">{user.email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  logout();
                }}
                className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
                title="Đăng xuất"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}



          {activeNavLinks.map((link) => {
            let isRouteActive = false;
            if (link.href.includes("#")) {
              const hashPart = link.href.substring(link.href.indexOf("#"));
              const pathPart = link.href.split("#")[0] || "/";
              isRouteActive = location.pathname === pathPart && location.hash === hashPart;
            } else {
              isRouteActive = location.pathname.startsWith(link.href);
            }

            const translatedLabel =
              language === "en" && NAV_LABELS[link.href]
                ? NAV_LABELS[link.href].en
                : NAV_LABELS[link.href]?.vi || link.label;

            const mobileClass = isRouteActive
              ? "bg-primary-container text-on-primary-container font-semibold"
              : "text-primary font-medium hover:bg-surface-container";

            if (link.children && link.children.length > 0) {
              const isSubOpen = !!openMobileSubMenus[link.href];
              return (
                <div key={link.href} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`font-label-lg py-2.5 px-3 rounded-lg transition-colors whitespace-nowrap text-sm flex-1 ${mobileClass}`}
                    >
                      {translatedLabel}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubMenu(link.href)}
                      className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                      aria-label="Thu phóng mục con"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isSubOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {isSubOpen && (
                    <div className="pl-3.5 pr-2 py-1 flex flex-col gap-1 border-l-2 border-primary/20 ml-3">
                      {link.children.map((sub) => {
                        const subData = SUB_NAV_LABELS[sub.href];
                        const subLabel =
                          language === "en" && subData ? subData.en : sub.label;

                        return (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => handleNavClick(sub.href)}
                            className="py-2 px-3 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                          >
                            {subLabel}
                          </Link>
                        );
                      })}
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
                {translatedLabel}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}