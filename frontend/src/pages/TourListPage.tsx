import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Compass,
  HeartHandshake,
  Phone,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import AudioPlayerBar from "../components/AudioPlayerBar";
import { TOURS } from "../data/champaData";

const CATEGORIES = [
  { id: "all", label: "Tất cả hành trình" },
  { id: "craft", label: "Làng nghề gốm & dệt" },
  { id: "architecture", label: "Kiến trúc Đền tháp" },
  { id: "ritual", label: "Nghi lễ & Đêm Katê" },
];

export default function TourListPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const filteredTours = TOURS.filter((tour) => {
    const matchesCat =
      activeCategory === "all" || tour.category === activeCategory;
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <Header
        onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
        isAudioPlaying={isAudioPlaying}
      />

      <main className="w-full pt-16 xl:pt-20 bg-surface flex-1">
        {/* Hero Banner Section */}
        <section className="relative w-full bg-gradient-to-b from-surface-container-low via-surface to-surface py-space-lg sm:py-space-xl overflow-hidden border-b border-surface-container-high/60">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
            {/* Breadcrumb & Archival Tag */}
            <div className="flex items-center justify-between text-on-surface-variant font-label-md text-xs sm:text-sm flex-wrap gap-2 mb-space-sm">
              <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs">
                <Link className="hover:text-primary transition-colors" to="/">
                  Trang chủ
                </Link>
                <span className="text-outline/60">/</span>
                <span className="text-primary font-bold">Hành trình Di sản</span>
              </nav>
              <div className="hidden sm:flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Panduranga Expeditions • Khám phá 2025</span>
              </div>
            </div>

            {/* Main Heading Lockup */}
            <div className="flex flex-col gap-space-xs max-w-4xl">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 w-fit shadow-sm">
                <Compass className="h-4 w-4 text-primary" />
                <span className="font-label-sm text-[11px] uppercase tracking-widest text-primary font-bold">
                  Cung Đường Trải Nghiệm Độc Bản
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-on-surface font-semibold leading-tight tracking-tight mt-1">
                Danh Sách Hành Trình Di Sản Panduranga
              </h1>
              <p className="font-body-md xl:font-body-lg text-sm sm:text-base xl:text-lg text-on-surface-variant max-w-2xl leading-relaxed mt-1">
                Mỗi chuyến đi là một cuộc đối thoại chân thực cùng nghệ nhân và không gian văn hóa thiêng liêng. Nhóm nhỏ tối đa 8 khách để trọn vẹn chiều sâu ký ức.
              </p>
            </div>

            {/* Search Bar & Filter Tabs */}
            <div className="mt-space-md sm:mt-space-lg max-w-3xl flex flex-col gap-space-sm">
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-outline h-5 w-5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm hành trình, làng nghề, đền tháp..."
                  className="w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-2xl bg-surface-container-lowest text-on-surface font-body-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-md border border-outline-variant/30"
                />
              </div>

              <div className="flex items-center gap-space-xs flex-wrap pt-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    type="button"
                    className={`px-3 sm:px-space-md py-1.5 sm:py-2 rounded-xl font-label-md text-xs sm:text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-on-primary shadow-sm font-semibold"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cultural Consultation Notice */}
            <div className="mt-space-md p-space-md rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-xl bg-primary-container/40 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-semibold text-on-surface">
                    Hành Trình Di Sản Phi Thương Mại Hóa
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant max-w-2xl leading-relaxed mt-0.5">
                    Chúng tôi không niêm yết giá bán thương mại đại trà. Mọi hành trình được thiết kế cá nhân hóa theo quy mô nhóm nhỏ (tối đa 8 khách), kết nối và hoàn lưu 100% sinh kế trực tiếp cho gia đình nghệ nhân bản địa Chăm.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs shrink-0 w-full md:w-auto">
                <a
                  href="tel:0918388998"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-on-primary font-label-md text-xs font-semibold hover:bg-primary-container transition-colors shadow-sm"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Hotline: 0918.388.998</span>
                </a>
                <a
                  href="https://zalo.me/0918388998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-xs font-semibold transition-colors"
                >
                  <span>Chat Zalo</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid Section */}
        <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl">
          <div className="flex items-center justify-between mb-space-lg">
            <span className="font-label-md text-sm text-on-surface-variant">
              Hiển thị <strong>{filteredTours.length}</strong> hành trình đặc sắc
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-outline-variant/30"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={tour.title}
                    src={tour.image}
                  />
                  <div className="absolute top-space-md left-space-md">
                    <span
                      className={`px-3 py-1 rounded-full font-label-sm text-[11px] uppercase font-bold tracking-wider shadow-sm ${tour.badgeClass}`}
                    >
                      {tour.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-space-sm py-1 rounded-md font-label-md text-xs flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-secondary-fixed" />
                    <span>{tour.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-space-lg flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-xs mb-space-xs">
                      <span>{tour.location}</span>
                      <span className="flex items-center gap-1 text-secondary font-semibold">
                        <Star className="h-3.5 w-3.5 fill-current text-secondary" />
                        {tour.rating ?? "4.98"} ({tour.reviewsCount ?? "68"})
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-on-surface group-hover:text-primary transition-colors font-semibold mt-1">
                      <Link to={`/tour/${tour.slug}`}>{tour.title}</Link>
                    </h3>

                    <p className="font-body-sm text-sm text-on-surface-variant mt-space-sm leading-relaxed line-clamp-3">
                      {tour.description}
                    </p>

                    <div className="mt-space-md flex flex-wrap gap-space-xs">
                      {tour.chips.map((chip) => (
                        <span
                          key={chip.label}
                          className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-body-sm text-[12px]"
                        >
                          {chip.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-container-high/60">
                    <div>
                      <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider block">
                        Đồng hành nghệ nhân
                      </span>
                      <span className="font-serif text-base text-primary font-bold">
                        Tư vấn lịch trình riêng
                      </span>
                    </div>

                    <Link
                      to={`/tour/${tour.slug}`}
                      className="px-space-md py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs sm:text-sm transition-colors flex items-center gap-1.5 font-semibold group/btn shadow-sm"
                    >
                      <span>Chi Tiết & Liên Hệ</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reassurance Banner */}
        <section className="w-full bg-surface-container-low py-space-xl border-t border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin grid grid-cols-1 md:grid-cols-3 gap-gutter text-center md:text-left">
            <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
              <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h4 className="font-serif text-base font-semibold text-on-surface">100% Nghệ Nhân Bản Địa</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Không thông qua trung gian du lịch thương mại hóa.</p>
              </div>
            </div>

            <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
              <HeartHandshake className="h-10 w-10 text-secondary shrink-0" />
              <div>
                <h4 className="font-serif text-base font-semibold text-on-surface">70% Hoàn Lưu Làng Nghề</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Hỗ trợ sinh kế trực tiếp và quỹ trùng tu di tích.</p>
              </div>
            </div>

            <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
              <ShieldCheck className="h-10 w-10 text-tertiary shrink-0" />
              <div>
                <h4 className="font-serif text-base font-semibold text-on-surface">Bảo Hiểm & Đưa Đón Tận Nơi</h4>
                <p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Xe đưa đón trọn gói từ TP. Phan Rang - Tháp Chàm.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />
      <BottomNav />
    </div>
  );
}
