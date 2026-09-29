import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  AudioLines,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  Landmark,
  MapPin,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import {
  DESTINATION_OPTIONS,
  EXPERIENCE_OPTIONS,
  HERO_IMAGE,
  TRAVELER_OPTIONS,
} from "../data/champaData";
import { toast } from "./ui/sonner";

interface HeroSectionProps {
  onToggleAudio?: () => void;
  isAudioPlaying?: boolean;
}

export default function HeroSection({
  onToggleAudio,
  isAudioPlaying = false,
}: HeroSectionProps) {
  const [destination, setDestination] = useState(DESTINATION_OPTIONS[0]);
  const [date, setDate] = useState("2025-05-15");
  const [experience, setExperience] = useState(EXPERIENCE_OPTIONS[0]);
  const [travelers, setTravelers] = useState(TRAVELER_OPTIONS[0]);

  const handleSearchTrip = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Dana đã tìm thấy các hành trình phù hợp!", {
      description: `${destination} • ${travelers} • Khởi hành ngày ${date}`,
    });
    const el = document.getElementById("hanh-trinh");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-surface to-surface pb-space-xl pt-20 xl:pt-24">
      {/* Atmospheric subtle decorative gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin pt-space-md xl:pt-space-lg">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[auto] lg:min-h-[580px]">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-space-md z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 w-fit mb-space-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-[11px] xl:text-label-sm uppercase tracking-widest text-primary font-bold">
                Dana • Di sản Panduranga - Văn hóa sống ngàn năm
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-on-surface mb-space-md leading-[1.15] font-semibold">
              Chạm vào{" "}
              <span className="italic text-primary font-normal">nhịp thở</span>{" "}
              ngàn năm xứ Panduranga
            </h1>

            {/* Description */}
            <p className="font-body-md xl:font-body-lg text-on-surface-variant max-w-xl mb-space-xl leading-relaxed text-base xl:text-lg">
              Không đơn thuần là chuyến du ngoạn. Đây là hành trình trở về để
              lắng nghe đất nung kể chuyện, thổ cẩm hát ca và tâm hồn người Chăm
              mở lối trân quý.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-space-sm xl:gap-space-md mb-space-xl">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-semibold"
                href="#hanh-trinh"
              >
                <span>Khám phá Hành trình độc bản</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-md py-3.5 rounded-lg font-label-lg text-label-lg transition-all shadow-sm ${
                  isAudioPlaying
                    ? "bg-primary-container text-on-primary-container ring-2 ring-primary"
                    : "bg-surface-container-low hover:bg-surface-container text-on-secondary-container"
                }`}
                onClick={onToggleAudio}
                type="button"
              >
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <AudioLines className="h-5 w-5 text-secondary" />
                <span className="font-semibold">
                  {isAudioPlaying ? "Đang phát Saranai" : "Lắng nghe Saranai & Baranưng"}
                </span>
              </button>
            </div>

            {/* Trust Badges Micro-row */}
            <div className="flex flex-wrap items-center gap-space-md xl:gap-space-lg pt-space-xs text-on-surface-variant border-t border-surface-container-high/60">
              <div className="flex items-center gap-space-xs">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="font-body-sm text-body-sm">
                  Đồng hành cùng 100% Nghệ nhân bản địa
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <HeartHandshake className="h-4 w-4 text-secondary" />
                <span className="font-body-sm text-body-sm">
                  70% Hoàn lưu Sinh kế & Trùng tu
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
            <div className="relative w-full h-[380px] xl:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high group border border-outline-variant/30">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Tháp Po Klong Garai ráng chiều hoàng hôn Ninh Thuận"
                src={HERO_IMAGE}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/25 to-transparent"></div>

              {/* Floated Cultural Badge */}
              <div className="absolute top-space-md left-space-md bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded-lg shadow-md border border-white/20">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  Di sản Thế giới Khẩn cấp UNESCO
                </span>
              </div>

              {/* Bottom Caption Card Overlay */}
              <div className="absolute bottom-space-md left-space-md right-space-md bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-lg border border-outline-variant/30">
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest font-semibold block">
                      Tâm điểm Khảo cổ Thế kỷ XII
                    </span>
                    <h3 className="font-headline-sm text-xl text-on-surface mt-0.5 font-serif font-semibold">
                      Kalan Po Klong Garai
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                      Kiệt tác kiến trúc gạch nung không vữa cùng ngọn lửa thiêng
                      soi bóng văn hóa Panduranga hơn 800 năm.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
                    <Landmark className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Staggered Accent Stamp behind */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-2xl bg-secondary-fixed/50 -z-10 blur-[1px]"></div>
          </div>
        </div>

        {/* Integrated Trip Planner Bar (Desktop Horizontally Aligned Bar) */}
        <div
          id="dat-tour"
          className="mt-space-lg xl:mt-space-xl p-space-md xl:p-space-lg rounded-2xl bg-surface-container-lowest shadow-xl border border-outline-variant/30"
        >
          <form
            onSubmit={handleSearchTrip}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-sm xl:gap-space-md items-center"
          >
            {/* Field 1: Destination */}
            <div className="flex flex-col gap-1 px-space-sm py-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" /> Điểm đến / Làng nghề
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-transparent font-title-md text-sm xl:text-title-md text-on-surface focus:outline-none cursor-pointer truncate"
              >
                {DESTINATION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Date */}
            <div className="flex flex-col gap-1 px-space-sm py-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary" /> Ngày khởi hành
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent font-title-md text-sm xl:text-title-md text-on-surface focus:outline-none cursor-pointer"
              />
            </div>

            {/* Field 3: Experience Type */}
            <div className="flex flex-col gap-1 px-space-sm py-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-primary" /> Trải nghiệm mong muốn
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="bg-transparent font-title-md text-sm xl:text-title-md text-on-surface focus:outline-none cursor-pointer truncate"
              >
                {EXPERIENCE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Guests */}
            <div className="flex flex-col gap-1 px-space-sm py-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
              <label className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold flex items-center gap-1">
                <Users className="h-4 w-4 text-primary" /> Số lượng lữ khách
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="bg-transparent font-title-md text-sm xl:text-title-md text-on-surface focus:outline-none cursor-pointer truncate"
              >
                {TRAVELER_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="h-full flex items-center pt-1 md:pt-0">
              <button
                className="w-full h-full min-h-[50px] rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg tracking-wider flex items-center justify-center gap-space-xs shadow-md hover:shadow-lg transition-all font-semibold"
                type="submit"
              >
                <Search className="h-5 w-5" />
                <span>Tìm Chuyến Đi</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
