import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import AudioPlayerBar from "../components/AudioPlayerBar";
import {
  DIGITAL_INSCRIPTIONS,
} from "../data/digitalHeritageData";
import {
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  type GalleryPhoto,
} from "../data/galleryData";
import {
  AKHAR_LETTERS,
  CHAM_WORDS,
  type AkharLetter,
} from "../data/languageData";
import {
  Binary,
  Camera,
  ChevronLeft,
  ChevronRight,
  Eye,
  Languages,
  MapPin,
  Search,
  Volume2,
  X,
  ZoomIn,
} from "lucide-react";
import { toast } from "../components/ui/sonner";

export type DigitalHeritageTab = "hinh-anh" | "ngon-ngu" | "van-bia";

export default function DigitalHeritagePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get("tab") as DigitalHeritageTab;
  const activeTab: DigitalHeritageTab = [
    "hinh-anh",
    "ngon-ngu",
    "van-bia",
  ].includes(rawTab)
    ? rawTab
    : "hinh-anh";

  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Tab 1 (Hình ảnh Văn hoá) State
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Tab 2 (Ngôn ngữ Chăm) State
  const [activeLetter, setActiveLetter] = useState<AkharLetter>(AKHAR_LETTERS[0]);
  const [selectedAkharType, setSelectedAkharType] = useState<"all" | "vowel" | "consonant">("all");
  const [searchWordQuery, setSearchWordQuery] = useState<string>("");
  const [selectedWordCategory, setSelectedWordCategory] = useState<string>("all");

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const handleSelectTab = (tab: DigitalHeritageTab) => {
    setSearchParams({ tab });
  };

  // Gallery computations
  const filteredPhotos = useMemo(() => {
    if (selectedGalleryCategory === "all") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === selectedGalleryCategory);
  }, [selectedGalleryCategory]);

  const activePhotoIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return filteredPhotos.findIndex((p) => p.id === activePhoto.id);
  }, [activePhoto, filteredPhotos]);

  const handleNextPhoto = () => {
    if (activePhotoIndex === -1) return;
    const nextIndex = (activePhotoIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex === -1) return;
    const prevIndex =
      (activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  // Language computations
  const filteredLetters = useMemo(() => {
    if (selectedAkharType === "all") return AKHAR_LETTERS;
    return AKHAR_LETTERS.filter((l) => l.type === selectedAkharType);
  }, [selectedAkharType]);

  const filteredWords = useMemo(() => {
    return CHAM_WORDS.filter((w) => {
      const matchCat =
        selectedWordCategory === "all" || w.category === selectedWordCategory;
      const matchSearch =
        searchWordQuery.trim() === "" ||
        w.vietnamese.toLowerCase().includes(searchWordQuery.toLowerCase()) ||
        w.transliteration.toLowerCase().includes(searchWordQuery.toLowerCase()) ||
        w.cham.includes(searchWordQuery);
      return matchCat && matchSearch;
    });
  }, [selectedWordCategory, searchWordQuery]);

  const handlePlayLetterPronunciation = (letter: AkharLetter) => {
    toast.info(`Phát âm: "${letter.transliteration}" (${letter.ipa})`, {
      description: `Từ minh họa: "${letter.sampleWord}" mang nghĩa "${letter.meaning}"`,
    });
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Global Header */}
      <Header onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

      {/* 2. Main Content */}
      <main className="w-full pt-16 xl:pt-20 bg-surface min-h-[calc(100vh-80px)] flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-surface-container-low/70 pt-space-md sm:pt-space-lg pb-space-lg border-b border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-md">
            {/* Breadcrumb & Archival Tag */}
            <div className="flex items-center justify-between text-on-surface-variant font-label-md text-xs sm:text-sm flex-wrap gap-2">
              <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs">
                <Link className="hover:text-primary transition-colors" to="/">
                  Trang chủ
                </Link>
                <span className="text-outline/60">/</span>
                <span className="text-primary font-bold">Số hoá di sản</span>
              </nav>
              <div className="hidden sm:flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Số Hóa Di Sản Bản Địa 2025</span>
              </div>
            </div>

            {/* Title Lockup */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mt-space-xs">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="flex items-center gap-2 text-primary font-label-sm text-xs uppercase tracking-widest font-bold">
                  <Binary className="h-4 w-4" />
                  <span>Trung Tâm Bảo Tồn Số • Kho Ảnh Văn Hóa • Ngôn Ngữ & Văn Bia</span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-on-surface font-semibold leading-tight tracking-tight">
                  Số Hoá Di Sản: Bất Tử Hóa Ký Ức Champa
                </h1>
                <p className="font-body-md xl:font-body-lg text-on-surface-variant text-sm sm:text-base xl:text-lg leading-relaxed mt-1">
                  Không gian số hóa toàn diện lưu trữ tư liệu nhiếp ảnh điền dã độ
                  phân giải cao, bảo tồn hệ thống chữ cổ Akhar Thrah và giải mã các
                  bản dập văn bia sa thạch ngàn năm xứ Panduranga.
                </p>
              </div>
            </div>

            {/* 3 Major Digital Hub Navigation Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-space-md">
              {[
                {
                  id: "hinh-anh" as const,
                  label: "Kho ảnh Văn hoá",
                  icon: Camera,
                  desc: "Kho ảnh nghệ thuật điền dã & bảo tàng số",
                },
                {
                  id: "ngon-ngu" as const,
                  label: "Số hoá Ngôn ngữ Chăm",
                  icon: Languages,
                  desc: "Ký tự Akhar Thrah tương tác & từ điển số",
                },
                {
                  id: "van-bia" as const,
                  label: "Giải mã Văn bia Cổ",
                  icon: Binary,
                  desc: "Bản dập bia ký sa thạch Sanskrit - Chăm",
                },
              ].map((tab) => {
                const Icon = tab.icon;
                const isCurrent = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id)}
                    type="button"
                    className={`flex flex-col text-left p-4 rounded-2xl transition-all cursor-pointer border ${
                      isCurrent
                        ? "bg-primary text-on-primary border-primary shadow-md ring-2 ring-primary/20 -translate-y-0.5"
                        : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${isCurrent ? "text-on-primary" : "text-primary"}`} />
                      <span className="font-title-sm text-sm sm:text-base font-bold">
                        {tab.label}
                      </span>
                    </div>
                    <span
                      className={`font-body-sm text-xs mt-1.5 line-clamp-1 ${
                        isCurrent
                          ? "text-on-primary/80"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {tab.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* TAB 1: HÌNH ẢNH VĂN HÓA (MASONRY GALLERY & LIGHTBOX) */}
        {activeTab === "hinh-anh" && (
          <div className="flex flex-col animate-in fade-in duration-200">
            <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl">
              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  {GALLERY_CATEGORIES.map((cat) => {
                    const isActive = selectedGalleryCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedGalleryCategory(cat.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-sm ${
                          isActive
                            ? "bg-primary text-on-primary ring-2 ring-primary/20 shadow-md hover:-translate-y-0.5"
                            : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/30"
                        }`}
                        type="button"
                      >
                        <span>{cat.label}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                            isActive
                              ? "bg-primary-container text-on-primary"
                              : "bg-surface-container-high text-on-surface-variant"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <span className="font-mono text-xs text-secondary font-semibold">
                  {filteredPhotos.length} BỨC ẢNH ĐIỀN DÃ ĐỘ NÉT CAO
                </span>
              </div>

              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo)}
                    className="group relative break-inside-avoid bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-auto bg-surface-container">
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                        <span className="font-label-sm text-xs tracking-wider uppercase text-secondary-container font-semibold">
                          {photo.location}
                        </span>
                        <h4 className="font-serif text-lg font-bold mt-1 text-white leading-snug">
                          {photo.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-3 text-xs text-white/80">
                          <Eye className="h-3.5 w-3.5" />
                          <span>Bấm để xem chi tiết giám tuyển & độ nét cao</span>
                        </div>
                      </div>

                      <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ZoomIn className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="p-4 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs text-on-surface-variant font-label-sm">
                        <span className="flex items-center gap-1 text-primary font-semibold">
                          <MapPin className="h-3 w-3" />
                          <span className="line-clamp-1">{photo.location}</span>
                        </span>
                        <span className="font-mono">{photo.year}</span>
                      </div>
                      <h3 className="font-serif text-base font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                        {photo.title}
                      </h3>
                      <p className="font-body-sm text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: SỐ HÓA NGÔN NGỮ CHĂM */}
        {activeTab === "ngon-ngu" && (
          <div className="flex flex-col animate-in fade-in duration-200">
            {/* Interactive Akhar Board */}
            <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl">
              <div className="flex flex-col gap-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                      Văn Tự Cổ Akhar Thrah
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                      Bảng Ký Tự Số Hóa Tương Tác
                    </h2>
                    <p className="text-sm text-on-surface-variant">
                      Bấm vào từng chữ cái để nghe ngữ âm, ký âm quốc tế IPA và từ vựng biểu đạt.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/30">
                    <button
                      type="button"
                      onClick={() => setSelectedAkharType("all")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedAkharType === "all"
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-on-surface hover:text-primary"
                      }`}
                    >
                      Tất cả ({AKHAR_LETTERS.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedAkharType("vowel")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedAkharType === "vowel"
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-on-surface hover:text-primary"
                      }`}
                    >
                      Nguyên âm (Inâ)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedAkharType("consonant")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedAkharType === "consonant"
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-on-surface hover:text-primary"
                      }`}
                    >
                      Phụ âm (Măt)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                  <div className="lg:col-span-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                    {filteredLetters.map((letter) => {
                      const isSelected = activeLetter.char === letter.char;
                      return (
                        <button
                          key={letter.char}
                          onClick={() => setActiveLetter(letter)}
                          type="button"
                          className={`aspect-square flex flex-col items-center justify-center rounded-2xl transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-primary text-on-primary border-primary shadow-lg ring-2 ring-primary/20 scale-105"
                              : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/30 shadow-sm"
                          }`}
                        >
                          <span className="font-serif text-3xl font-normal leading-none">
                            {letter.char}
                          </span>
                          <span
                            className={`text-[10px] font-mono mt-1 ${
                              isSelected
                                ? "text-on-primary/80"
                                : "text-on-surface-variant"
                            }`}
                          >
                            {letter.transliteration}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="lg:col-span-4 bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-md flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-on-surface-variant">
                        <span className="uppercase tracking-widest font-label-sm font-bold text-secondary">
                          {activeLetter.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-xs font-mono">
                          {activeLetter.type === "vowel" ? "Nguyên âm" : "Phụ âm"}
                        </span>
                      </div>

                      <div className="w-full py-8 bg-surface-container-low/60 rounded-2xl flex items-center justify-center border border-dashed border-outline-variant/40">
                        <span className="font-serif text-7xl text-primary font-normal">
                          {activeLetter.char}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-left pt-2">
                        <div className="p-3 rounded-xl bg-surface-container flex flex-col">
                          <span className="text-[11px] text-on-surface-variant uppercase font-label-sm">
                            Phiên âm Latinh
                          </span>
                          <strong className="text-base text-on-surface mt-0.5 font-mono">
                            {activeLetter.transliteration}
                          </strong>
                        </div>

                        <div className="p-3 rounded-xl bg-surface-container flex flex-col">
                          <span className="text-[11px] text-on-surface-variant uppercase font-label-sm">
                            Ký âm IPA
                          </span>
                          <strong className="text-base text-primary mt-0.5 font-mono">
                            {activeLetter.ipa}
                          </strong>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          Ví dụ minh họa:
                        </span>
                        <div className="flex items-baseline justify-between mt-1">
                          <span className="font-serif text-lg font-bold text-on-surface">
                            {activeLetter.sampleWord}
                          </span>
                          <span className="text-xs text-on-surface-variant">
                            → {activeLetter.meaning}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handlePlayLetterPronunciation(activeLetter)}
                      type="button"
                      className="w-full py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <Volume2 className="h-4 w-4" />
                      <span>Nghe phát âm chuẩn</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Mini Dictionary */}
            <section className="w-full bg-surface-container-low/50 py-space-xl border-t border-surface-container-high/60">
              <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-lg">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                      Sổ Tay Đàm Thoại
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                      Từ Điển Căn Bản Chăm - Việt
                    </h2>
                  </div>

                  <div className="relative w-full md:w-80">
                    <input
                      type="text"
                      value={searchWordQuery}
                      onChange={(e) => setSearchWordQuery(e.target.value)}
                      placeholder="Tra nghĩa tiếng Việt hoặc Chăm..."
                      className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm pl-10 pr-9 py-2.5 rounded-xl border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm"
                    />
                    <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
                    {searchWordQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchWordQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Dictionary Category Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "all", label: "Tất cả từ ngữ" },
                    { id: "greeting", label: "Chào hỏi & Giao tiếp" },
                    { id: "number", label: "Số đếm cổ" },
                    { id: "family", label: "Gia đình Mẫu hệ" },
                    { id: "culture", label: "Văn hóa & Đền tháp" },
                    { id: "craft", label: "Làng nghề gốm - dệt" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedWordCategory(tab.id)}
                      type="button"
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedWordCategory === tab.id
                          ? "bg-primary text-on-primary shadow-sm"
                          : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/30"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredWords.map((word) => (
                    <div
                      key={word.id}
                      className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-serif text-2xl text-primary font-medium block">
                            {word.cham}
                          </span>
                          <span className="font-mono text-xs text-secondary font-semibold mt-1 block">
                            {word.transliteration}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-surface-container text-[10px] text-on-surface-variant uppercase font-mono">
                          {word.category}
                        </span>
                      </div>

                      <div className="border-t border-surface-container-high/60 pt-3">
                        <span className="font-title-sm text-sm font-bold text-on-surface">
                          {word.vietnamese}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 3: VĂN BIA CỔ */}
        {activeTab === "van-bia" && (
          <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-2xl">
                <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                  Kho Lưu Trữ Ký Tự Khảo Cổ
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                  Bản Dập & Giải Mã Văn Bia Cổ Sa Thạch
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Số hóa ảnh độ phân giải cao và giải mã các dòng minh văn Sanskrit - Chăm cổ ngàn năm.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DIGITAL_INSCRIPTIONS.map((ins) => (
                  <div
                    key={ins.id}
                    className="rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col md:flex-row gap-4 p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="md:w-2/5 aspect-square bg-surface-container rounded-2xl overflow-hidden shrink-0">
                      <img
                        src={ins.image}
                        alt={ins.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between gap-3 flex-1">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-primary font-bold">{ins.code}</span>
                          <span className="text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">
                            {ins.language}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-on-surface">
                          {ins.title}
                        </h4>
                        <p className="font-mono text-xs text-secondary italic bg-surface-container-low p-2 rounded-xl border border-outline-variant/20">
                          "{ins.transliterationSnippet}"
                        </p>
                      </div>

                      <div className="border-t border-surface-container-high/60 pt-2">
                        <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold block mb-1">
                          Bản dịch tiếng Việt:
                        </span>
                        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                          {ins.vietnameseMeaning}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Lightbox Modal (dùng cho Tab Hình ảnh) */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Đóng ảnh"
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center transition-all cursor-pointer z-50"
            aria-label="Ảnh trước"
            type="button"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNextPhoto}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center transition-all cursor-pointer z-50"
            aria-label="Ảnh kế tiếp"
            type="button"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[90vh] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-full">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-surface-container-low max-h-[40vh] md:max-h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-label-sm uppercase tracking-wider text-secondary">
                  <span>Panduranga Visual Archive</span>
                  <span className="font-mono font-bold">{activePhoto.year}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-on-surface leading-snug">
                    {activePhoto.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mt-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{activePhoto.location}</span>
                  </div>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {activePhoto.description}
                </p>

                {activePhoto.curatorNote && (
                  <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
                    <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-primary">
                      Ghi chú giám tuyển di sản:
                    </span>
                    <p className="font-body-sm text-xs text-on-surface-variant italic leading-relaxed">
                      "{activePhoto.curatorNote}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-surface-container-high flex items-center justify-between text-xs text-on-surface-variant">
                <span>Tác giả: <strong className="text-on-surface">{activePhoto.author}</strong></span>
                <span className="font-mono">
                  {activePhotoIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Saranai Audio Player Floating Bar */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* 5. Mobile Bottom Nav */}
      <BottomNav />
    </div>
  );
}
