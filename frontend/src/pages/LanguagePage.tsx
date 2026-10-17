import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import AudioPlayerBar from "../components/AudioPlayerBar";
import {
  AKHAR_LETTERS,
  CHAM_WORDS,
  CHAM_PROVERBS,
  type AkharLetter,
} from "../data/languageData";
import {
  GraduationCap,
  Languages,
  Quote,
  Search,
  Volume2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "../components/ui/sonner";

export default function LanguagePage() {
  const [activeLetter, setActiveLetter] = useState<AkharLetter>(AKHAR_LETTERS[0]);
  const [selectedAkharType, setSelectedAkharType] = useState<"all" | "vowel" | "consonant">("all");
  const [searchWordQuery, setSearchWordQuery] = useState<string>("");
  const [selectedWordCategory, setSelectedWordCategory] = useState<string>("all");
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

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
        <section className="w-full bg-surface-container-low/70 pt-space-lg pb-space-xl border-b border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-md">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs text-on-surface-variant font-label-md">
              <Link className="hover:text-primary transition-colors" to="/">
                Trang chủ
              </Link>
              <span className="text-outline/60">/</span>
              <span className="text-primary font-bold">Ngôn ngữ Chăm</span>
            </nav>

            {/* Title Lockup */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mt-space-xs">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="flex items-center gap-2 text-primary font-label-sm text-xs uppercase tracking-widest font-bold">
                  <Languages className="h-4 w-4" />
                  <span>Văn Tự Cổ & Cội Nguồn Tri Thức Akhar Thrah</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-on-surface font-semibold leading-tight">
                  Ngôn Ngữ Chăm: Những Ký Tự Khắc Vào Thời Gian
                </h1>
                <p className="font-body-md text-on-surface-variant text-base xl:text-lg leading-relaxed mt-1">
                  Chữ Chăm cổ (Akhar Thrah) bắt nguồn từ hệ chữ Brahmi cổ đại, là
                  một trong những văn tự sớm nhất Đông Nam Á còn được cộng đồng
                  gìn giữ, lưu truyền qua những trang kinh lá buông và văn bia sa
                  thạch.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest bg-surface-container px-4 py-2 rounded-full border border-outline-variant/30">
                <Languages className="h-4 w-4 text-primary" />
                <span>Kho Tàng Văn Tự Bản Địa</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Interactive Akhar Board */}
        <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl">
          <div className="flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                  Bảng Chữ Cái Tương Tác
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                  Hệ Ký Tự Akhar Thrah
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Bấm vào từng chữ cái để nghe ngữ âm, ký âm quốc tế IPA và từ vựng biểu đạt.
                </p>
              </div>

              {/* Type Switcher */}
              <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/30 self-start md:self-auto">
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

            {/* Grid & Active Card Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Letters Grid */}
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
                          : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/30 hover:border-primary/40 shadow-sm"
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

              {/* Active Letter Inspector Card */}
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

                  {/* Gigantic Letter Display */}
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

                  {/* Sample word */}
                  <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Ví dụ minh họa thực tiễn:
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
                  <span>Nghe ngữ âm & phát âm chuẩn</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mini Cham - Vietnamese Dictionary */}
        <section className="w-full bg-surface-container-low/50 py-space-xl border-y border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                  Sổ Tay Đàm Thoại
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                  Từ Điển Căn Bản Chăm - Việt
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Tra cứu các từ ngữ thông dụng trong giao tiếp, số đếm và thuật ngữ văn hóa đền tháp.
                </p>
              </div>

              {/* Search input */}
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

            {/* Category tabs */}
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

            {/* Word Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWords.map((word) => (
                <div
                  key={word.id}
                  className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3"
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
                    {word.exampleSentence && (
                      <p className="font-body-sm text-xs text-on-surface-variant italic mt-1 leading-relaxed">
                        Ví dụ: "{word.exampleSentence}" → {word.exampleMeaning}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Cham Proverbs & Life Philosophy */}
        <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl">
          <div className="flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                Dôm Ngap Champa
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                Ca Dao & Tục Ngữ Dân Gian Chăm
              </h2>
              <p className="text-sm text-on-surface-variant">
                Đúc kết triết lý nhân sinh hòa ái, lòng kính trọng đấng sinh thành và tình yêu thiên nhiên đất mặn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CHAM_PROVERBS.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between gap-4 relative overflow-hidden"
                >
                  <Quote className="h-12 w-12 text-primary/10 absolute top-4 right-4 pointer-events-none" />

                  <div className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-primary leading-relaxed">
                      {p.cham}
                    </span>
                    <span className="font-mono text-xs text-secondary font-semibold italic">
                      {p.transliteration}
                    </span>
                    <h4 className="font-title-md text-base font-bold text-on-surface mt-2 leading-snug">
                      "{p.vietnamese}"
                    </h4>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-semibold block mb-0.5">
                      Triết lý sống:
                    </strong>
                    {p.philosophy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Community Classes Banner */}
        <section className="w-full bg-primary-container text-on-primary-container py-space-lg">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-xl font-bold">
                  Lớp Truyền Dạy Chữ Chăm Akhar Thrah Miễn Phí
                </h3>
                <p className="text-xs sm:text-sm text-on-primary-container/80 mt-1 max-w-2xl">
                  Được tài trợ bởi Quỹ Hoàn Lưu 70% Dana Champa, mở lớp thứ Bảy & Chủ Nhật hàng tuần tại Làng Bàu Trúc và Mỹ Nghiệp cho con em bản địa và du khách yêu mến di sản.
                </p>
              </div>
            </div>

            <Link
              to="/tour"
              className="px-6 py-3 rounded-xl bg-primary hover:bg-on-primary hover:text-primary text-on-primary font-label-lg text-sm font-semibold shadow-md transition-all whitespace-nowrap shrink-0"
            >
              Tham gia trải nghiệm
            </Link>
          </div>
        </section>
      </main>

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
