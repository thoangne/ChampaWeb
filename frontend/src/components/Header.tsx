import { LOGO_URL, PC_NAV_LINKS } from "../data/champaData";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AudioLines, Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onToggleAudio?: () => void;
  isAudioPlaying?: boolean;
}

export default function Header({ onToggleAudio, isAudioPlaying = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(36,25,21,0.06)] border-b border-surface-container-high/40 transition-all">
      {/* Full-width container with responsive side padding */}
      <div className="w-full h-16 xl:h-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between gap-4">
        {/* 1. Brand Logo (nowrap) */}
        <div className="flex items-center shrink-0">
          <Link className="flex items-center gap-2.5 sm:gap-3 group whitespace-nowrap" to="/">
            <img
              alt="Logo Dana - Di sản & Văn hóa Chăm"
              className="h-9 xl:h-10 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
              src={LOGO_URL}
              loading="eager"
            />
            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="font-label-sm text-[10px] xl:text-[11px] uppercase tracking-widest text-secondary font-semibold whitespace-nowrap leading-tight">
                Panduranga Heritage
              </span>
              <span className="font-serif text-lg xl:text-xl text-on-surface leading-tight group-hover:text-primary transition-colors font-bold whitespace-nowrap">
                Dana Champa
              </span>
            </div>
          </Link>
        </div>

        {/* 2. Desktop Navigation Links (nowrap, full width friendly) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 shrink-0">
          {PC_NAV_LINKS.map((link) => {
            const isRouteActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return link.href.includes("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="font-label-lg text-sm xl:text-base whitespace-nowrap transition-colors py-1 text-on-surface-variant hover:text-on-surface hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`font-label-lg text-sm xl:text-base whitespace-nowrap transition-colors py-1 ${
                  isRouteActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right Interaction Actions (nowrap, shrink-0) */}
        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Audio Saranai Button */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl border transition-all whitespace-nowrap shrink-0 ${
              isAudioPlaying
                ? "bg-primary-container text-on-primary-container border-primary shadow-sm"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface border-transparent"
            }`}
            title="Bật/tắt thanh âm nhạc cụ Chăm (Saranai - Paranưng)"
            type="button"
          >
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              {isAudioPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isAudioPlaying ? "bg-primary" : "bg-secondary"
                }`}
              ></span>
            </span>
            <AudioLines className="h-4 w-4 text-secondary shrink-0" />
            <span className="font-label-sm text-xs uppercase hidden xl:inline tracking-wider text-on-surface-variant font-medium whitespace-nowrap">
              Thanh âm Saranai
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

          {/* CTA Button */}
          <a
            className="hidden sm:inline-flex items-center justify-center px-4 xl:px-5 py-2 xl:py-2.5 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-sm rounded-xl shadow-sm hover:shadow transition-all font-semibold whitespace-nowrap shrink-0"
            href="#dat-tour"
          >
            Đồng hành cùng Dana
          </a>

          {/* User Avatar */}
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback className="bg-primary text-on-primary font-medium text-xs">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>

          {/* Mobile Menu Toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9 shrink-0"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container-high px-4 py-4 flex flex-col gap-2 shadow-xl">
          {PC_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-lg text-on-surface py-2.5 px-3 rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#dat-tour"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 bg-primary text-on-primary rounded-lg font-label-lg font-semibold mt-2 whitespace-nowrap text-sm"
          >
            Đồng hành cùng Dana
          </a>
        </div>
      )}
    </header>
  );
}
