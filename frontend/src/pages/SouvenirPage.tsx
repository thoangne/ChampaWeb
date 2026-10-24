import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import AudioPlayerBar from '../components/AudioPlayerBar';
import {
  SOUVENIR_CATEGORIES,
  SOUVENIR_PRODUCTS,
  type SouvenirProduct,
} from '../data/souvenirData';
import {
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  User,
  X,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  Layers,
  Ruler,
} from 'lucide-react';
import { toast } from '../components/ui/sonner';

export default function SouvenirPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<SouvenirProduct | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Form State for Contact Modal
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactNote, setContactNote] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return SOUVENIR_PRODUCTS.filter((prod) => {
      const matchCat =
        selectedCategory === 'all' || prod.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenContact = (product: SouvenirProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseContact = () => {
    setSelectedProduct(null);
    setContactName('');
    setContactPhone('');
    setContactNote('');
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    toast.success('Đã gửi thông tin liên hệ thành công!', {
      description: `Đại diện Làng nghề & Nghệ nhân sẽ liên hệ với bạn (${contactPhone}) để tư vấn chi tiết về tác phẩm "${selectedProduct?.name}".`,
    });
    handleCloseContact();
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Global Navigation Header */}
      <Header
        onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
        isAudioPlaying={isAudioPlaying}
      />

      {/* 2. Main Page Content */}
      <main className="w-full pt-16 xl:pt-20 bg-surface min-h-[calc(100vh-80px)] flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-surface-container-low via-surface to-surface py-space-lg sm:py-space-xl overflow-hidden border-b border-surface-container-high/60">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
            {/* Breadcrumb */}
            <div className="flex items-center justify-between text-on-surface-variant font-label-md text-xs sm:text-sm flex-wrap gap-2 mb-space-sm">
              <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs">
                <Link className="hover:text-primary transition-colors" to="/">
                  Trang chủ
                </Link>
                <span className="text-outline/60">/</span>
                <span className="text-primary font-bold">Lưu niệm Di sản</span>
              </nav>
              <div className="hidden sm:flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Thủ Công Mỹ Nghệ Độc Bản Panduranga</span>
              </div>
            </div>

            {/* Header Title Lockup */}
            <div className="flex flex-col gap-space-xs max-w-4xl">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 w-fit shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-label-sm text-[11px] uppercase tracking-widest text-primary font-bold">
                  Không Gian Lưu Niệm & Thủ Công Mỹ Nghệ Bản Địa
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-on-surface font-semibold leading-tight tracking-tight mt-1">
                Lưu Niệm Champa: Hồn Di Sản Trong Từng Thớ Đất & Sợi Chỉ
              </h1>

              <p className="font-body-md xl:font-body-lg text-on-surface-variant text-sm sm:text-base xl:text-lg leading-relaxed mt-1">
                Mỗi tác phẩm là độc bản được chế tác thủ công 100% bởi các nghệ nhân làng cổ Bàu Trúc và Mỹ Nghiệp. 
                Chúng tôi không niêm yết giá thương mại hóa; quý lữ khách vui lòng kết nối trực tiếp với làng nghề để được tư vấn kích thước, 
                ý nghĩa phong thủy và thỉnh tác phẩm phù hợp.
              </p>
            </div>

            {/* Trust Highlights Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-space-md mt-space-sm">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-on-surface block">100% Nghệ Nhân Bản Địa</span>
                  <span className="text-on-surface-variant">Chế tác thủ công không khuôn đúc công nghiệp</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <HeartHandshake className="h-5 w-5 text-secondary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-on-surface block">70% Hoàn Lưu Làng Nghề</span>
                  <span className="text-on-surface-variant">Trực tiếp hỗ trợ y tế và lớp dạy chữ Akhar Thrah</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-on-surface block">Tư Vấn Tận Tâm 24/7</span>
                  <span className="text-on-surface-variant">Hotline: (+84) 259 388 9988 • Zalo: 0912 345 678</span>
                </div>
              </div>
            </div>

            {/* Filter Bar & Search */}
            <div className="mt-space-lg pt-space-md border-t border-surface-container-high/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
              {/* Category Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {SOUVENIR_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      type="button"
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-primary text-on-primary border-primary shadow-md'
                          : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/30'
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-outline pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm tác phẩm, nghệ nhân, làng nghề..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-surface-container-lowest text-on-surface text-xs sm:text-sm placeholder:text-outline/70 border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-outline hover:text-on-surface rounded-full cursor-pointer"
                    aria-label="Xóa từ khóa tìm kiếm"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="w-full py-space-xl bg-surface flex-1">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-surface-container-low border border-outline-variant/30 max-w-xl mx-auto my-8">
                <Compass className="h-12 w-12 text-outline mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-on-surface">
                  Không tìm thấy tác phẩm phù hợp
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant mt-1">
                  Vui lòng thử tìm với từ khóa khác hoặc chọn chuyên mục "Tất cả tác phẩm".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold"
                >
                  Xem tất cả tác phẩm
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-outline-variant/30 hover:-translate-y-1"
                  >
                    {/* Image Box */}
                    <div className="relative h-60 overflow-hidden bg-surface-container">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-sm ${
                            prod.badgeClass || 'bg-surface-container text-on-surface'
                          }`}
                        >
                          {prod.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-xs text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                        <MapPin className="h-3 w-3 text-secondary-fixed shrink-0" />
                        <span className="truncate">{prod.village}</span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Artisan Name */}
                        <div className="flex items-center gap-1.5 text-xs text-secondary font-semibold mb-1">
                          <User className="h-3.5 w-3.5" />
                          <span>{prod.artisan}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-lg text-on-surface font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {prod.name}
                        </h3>

                        {/* Dimensions & Material snippet */}
                        <div className="mt-2.5 flex flex-col gap-1 text-xs text-on-surface-variant">
                          <div className="flex items-start gap-1.5">
                            <Layers className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{prod.material}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Ruler className="h-3.5 w-3.5 text-secondary shrink-0" />
                            <span className="truncate">{prod.dimensions}</span>
                          </div>
                        </div>

                        {/* Cultural Meaning Quote */}
                        <p className="font-body-sm text-xs text-on-surface-variant/90 italic mt-2.5 line-clamp-2 bg-surface-container-low/70 p-2 rounded-lg border-l-2 border-primary">
                          "{prod.culturalMeaning}"
                        </p>
                      </div>

                      {/* Card Footer: No Price, Only Contact Action */}
                      <div className="pt-3 mt-3 border-t border-surface-container-high/60 flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-label-sm uppercase tracking-wider text-primary font-bold">
                            Chế tác theo yêu cầu
                          </span>
                          <span className="text-secondary font-semibold">Độc bản</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenContact(prod)}
                            className="w-full py-2.5 px-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-semibold text-xs transition-colors flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            <span>Liên hệ thỉnh</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleOpenContact(prod)}
                            className="w-full py-2.5 px-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span>Chi tiết</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Dedicated Artisan Consultation Banner */}
        <section className="w-full py-space-xl bg-surface-container-low border-t border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
            <div className="p-space-lg xl:p-space-xl rounded-3xl bg-surface-container-lowest shadow-xl border border-outline-variant/30 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-xs">
                <span className="font-label-sm text-[11px] uppercase tracking-widest text-primary font-bold">
                  Không Gian Tiếp Đón & Chế Tác Riêng
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
                  Bạn Muốn Đặt Chế Tác Tác Phẩm Theo Yêu Cầu?
                </h2>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed mt-1">
                  Các nghệ nhân Bàu Trúc và Mỹ Nghiệp nhận chế tác tượng gốm, bình phù điêu khổ lớn, 
                  tranh văn bia hoặc khăn dệt hoa văn gia tộc riêng biệt. Hãy liên hệ với chúng tôi để được tư vấn chất liệu, 
                  kích thước và lộ trình thực hiện cẩn trọng nhất.
                </p>

                <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-xs sm:text-sm text-on-surface font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Có giấy chứng nhận độc bản làng nghề</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Đóng gói vận chuyển gỗ chống sốc toàn quốc</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Hotline Card */}
              <div className="lg:col-span-5 flex flex-col gap-3 p-space-md rounded-2xl bg-surface-container-low border border-outline-variant/40 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-on-surface">
                  Kết Nối Trực Tiếp Ban Di Sản
                </h4>
                
                <a
                  href="tel:02593889988"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest hover:bg-primary hover:text-on-primary transition-all group border border-outline-variant/30"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] uppercase tracking-wider block text-on-surface-variant group-hover:text-on-primary/80">
                        Hotline Tiếp Nhận Yêu Cầu
                      </span>
                      <span className="font-serif font-bold text-base sm:text-lg">
                        (+84) 259 388 9988
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest hover:bg-secondary hover:text-white transition-all group border border-outline-variant/30"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                      <MessageCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] uppercase tracking-wider block text-on-surface-variant group-hover:text-white/80">
                        Zalo Tư Vấn Nghệ Nhân
                      </span>
                      <span className="font-serif font-bold text-base sm:text-lg">
                        0912 345 678 (Dana Crafts)
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Audio Floating Widget */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* 5. Mobile Bottom Navigation */}
      <BottomNav />

      {/* 6. Contact & Cultural Details Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseContact}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/40 p-5 sm:p-7 flex flex-col gap-space-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseContact}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors cursor-pointer"
              aria-label="Đóng bảng thông tin"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-primary-fixed text-on-primary-fixed">
                {selectedProduct.badge} • {selectedProduct.village}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-on-surface mt-2">
                {selectedProduct.name}
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary font-semibold mt-1">
                <User className="h-4 w-4" />
                <span>Thực hiện bởi: {selectedProduct.artisan}</span>
              </div>
            </div>

            {/* Product Image & Cultural Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="h-56 sm:h-64 rounded-2xl overflow-hidden bg-surface-container shadow-inner">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface-variant">
                <div>
                  <span className="font-bold text-on-surface block">Chất liệu:</span>
                  <span>{selectedProduct.material}</span>
                </div>
                <div>
                  <span className="font-bold text-on-surface block">Kích thước quy cách:</span>
                  <span>{selectedProduct.dimensions}</span>
                </div>
                <div>
                  <span className="font-bold text-on-surface block">Ý nghĩa phong thủy & văn hóa:</span>
                  <span className="italic text-primary font-medium">"{selectedProduct.culturalMeaning}"</span>
                </div>
              </div>
            </div>

            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-3 rounded-xl border border-outline-variant/30">
              {selectedProduct.description}
            </p>

            {/* Direct Contact Action Panel */}
            <div className="p-4 rounded-2xl bg-surface-container border border-primary/20 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs font-bold uppercase text-primary tracking-wider">
                  Thông Tin Liên Hệ Thỉnh / Đặt Tác Phẩm
                </span>
                <span className="text-xs text-on-surface-variant">Không qua trung gian</span>
              </div>

              {/* Direct Call / Zalo Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${selectedProduct.hotline.replace(/[^0-9+]/g, '')}`}
                  className="py-2.5 px-3 rounded-xl bg-primary text-on-primary text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Gọi {selectedProduct.hotline}</span>
                </a>

                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-secondary text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Nhắn Zalo: {selectedProduct.zalo}</span>
                </a>
              </div>

              {/* Quick Contact Form */}
              <form onSubmit={handleSendInquiry} className="flex flex-col gap-2 pt-2 border-t border-surface-container-high/60">
                <span className="text-xs font-semibold text-on-surface">
                  Hoặc để lại số điện thoại để nghệ nhân gọi lại tư vấn:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Họ và tên của bạn *"
                    className="px-3 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Số điện thoại / Zalo *"
                    className="px-3 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <input
                  type="text"
                  value={contactNote}
                  onChange={(e) => setContactNote(e.target.value)}
                  placeholder="Ghi chú thêm (kích thước mong muốn, thời gian giao tác phẩm...)"
                  className="px-3 py-2 rounded-xl bg-surface-container-lowest text-xs text-on-surface border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary"
                />

                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer mt-1"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Gửi Yêu Cầu Tư Vấn Tác Phẩm Này</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
