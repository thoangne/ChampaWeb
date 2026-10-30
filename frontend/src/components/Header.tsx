import { LOGO_URL, PC_NAV_LINKS } from "../data/champaData";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  AudioLines,
  User,
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
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAudio } from "../lib/AudioContext";
import { toast } from "./ui/sonner";

interface HeaderProps {
  onToggleAudio?: () => void;
  isAudioPlaying?: boolean;
}

// Từ điển đa ngữ cho Navigation Header (Tiếng Việt & Tiếng Anh)
const NAV_LABELS: Record<string, { vi: string; en: string }> = {
  "/tour": { vi: "Hành trình", en: "Journeys" },
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
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl shadow-[0_2px_14px_rgba(36,25,21,0.06)] border-b border-surface-container-high/60 transition-all">
      <div className="w-full h-16 xl:h-20 px-2.5 sm:px-3.5 xl:px-4 flex items-center justify-between gap-2.5 sm:gap-4">

        {/* ========================================================
            1. Brand Logo: Cố định hoàn toàn bên trái
        ======================================================== */}
        <div className="flex items-center shrink-0">
          <Link
            className="flex items-center gap-2.5 sm:gap-3 group select-none whitespace-nowrap"
            to="/"
            onClick={() => handleNavClick("/")}
            title="Danacommunity - Panduranga Heritage"
          >
            <img
              alt="Logo Dana - Di sản & Văn hóa Chăm"
              className="h-9 sm:h-11 xl:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
              src={LOGO_URL}
              loading="eager"
            />
            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="font-label-sm text-[10px] xl:text-[11px] uppercase tracking-[0.2em] text-secondary font-bold whitespace-nowrap leading-tight">
                Danacommunity
              </span>
              <span className="font-serif text-xs sm:text-sm xl:text-base text-on-surface leading-tight group-hover:text-primary transition-colors font-bold whitespace-nowrap">
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
                  : link.label;

              const baseClass =
                "inline-flex items-center justify-center text-xs xl:text-sm font-semibold whitespace-nowrap transition-all border-b-2 h-10 px-2.5 xl:px-3";
              const currentClass = isRouteActive
                ? `${baseClass} text-primary font-bold border-primary`
                : `${baseClass} text-on-surface-variant hover:text-primary border-transparent hover:border-primary/30`;

              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.href} className="relative group flex items-center h-full">
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`${currentClass} gap-1.5`}
                    >
                      <span>{translatedLabel}</span>
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:rotate-180 duration-200 text-outline group-hover:text-primary" />
                    </Link>

                    {/* Dropdown Menu Container */}
                    <div className="absolute top-[calc(100%-4px)] right-0 pt-2 hidden group-hover:block z-50">
                      <div className="w-72 xl:w-80 bg-surface-container-lowest/98 backdrop-blur-2xl rounded-2xl shadow-[0_12px_36px_rgba(36,25,21,0.12)] border border-surface-container-high/80 p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
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
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentIsPlaying
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
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  currentIsPlaying ? "bg-primary" : "bg-secondary"
                }`}
              ></span>
            </span>
            <AudioLines
              className={`h-4 w-4 shrink-0 ${
                currentIsPlaying ? "text-primary animate-pulse" : "text-secondary"
              }`}
            />
            <span className="font-label-sm text-xs uppercase hidden xl:inline tracking-wider text-on-surface-variant font-medium whitespace-nowrap">
              {currentIsPlaying
                ? language === "vi"
                  ? "Đang phát Saranai"
                  : "Playing Saranai"
                : language === "vi"
                ? "Thanh âm Saranai"
                : "Saranai Sound"}
            </span>
          </button>

          {/* 2.3 User Avatar */}
          <Avatar className="hidden sm:inline-flex h-9 w-9 shrink-0">
            <AvatarFallback className="bg-primary text-on-primary font-medium text-xs">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>

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
              className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer leading-none ${
                language === "vi"
                  ? "bg-primary text-on-primary shadow-xs"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              title="Tiếng Việt"
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`px-1.5 py-0.5 rounded-full transition-all cursor-pointer leading-none ${
                language === "en"
                  ? "bg-primary text-on-primary shadow-xs"
                  : "text-on-surface-variant hover:text-primary"
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
        <div className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-t border-surface-container-high px-4 py-3 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
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
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-surface-container-low border border-outline-variant/30 mb-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
              <Globe className="h-4 w-4 text-secondary" />
              <span>{language === "vi" ? "Ngôn ngữ / Language" : "Language / Ngôn ngữ"}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleLanguageChange("vi")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === "vi"
                    ? "bg-primary text-white"
                    : "text-on-surface-variant bg-surface-container"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === "en"
                    ? "bg-primary text-white"
                    : "text-on-surface-variant bg-surface-container"
                }`}
              >
                English
              </button>
            </div>
          </div>

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
                : link.label;

            const mobileClass = isRouteActive
              ? "bg-primary-container text-on-primary-container font-semibold"
              : "text-on-surface font-medium hover:bg-surface-container";

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
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSubOpen ? "rotate-180" : ""
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