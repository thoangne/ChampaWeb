export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-surface to-surface pb-space-lg xl:pb-space-xl">
      {/* Background Decor */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin pt-space-md xl:pt-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[auto] xl:min-h-[580px]">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-space-md z-10 mt-4 xl:mt-0">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-DEFAULT bg-surface-container-high w-fit mb-space-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-[10px] xl:text-label-sm uppercase tracking-widest text-primary font-bold">Dana • Di sản Panduranga</span>
            </div>
            <h1 className="font-display-lg-mobile xl:font-display-lg text-3xl xl:text-5xl text-on-surface mb-space-sm xl:mb-space-md leading-tight">
              Chạm vào <span className="italic text-primary font-medium">nhịp thở</span> ngàn năm xứ Panduranga
            </h1>
            <p className="font-body-md xl:font-body-lg text-on-surface-variant max-w-xl mb-space-lg xl:mb-space-xl leading-relaxed">
              Không đơn thuần là chuyến du ngoạn. Đây là hành trình trở về để lắng nghe đất nung kể chuyện, thổ cẩm hát ca và tâm hồn người Chăm mở lối trân quý.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-space-sm xl:gap-space-md mb-space-lg">
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg tracking-wider shadow-md transition-all hover:-translate-y-0.5" href="#hanh-trinh">
                <span>Khám phá Hành trình</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-md py-3.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-secondary-container font-label-lg shadow-sm transition-all" type="button">
                <span className="material-symbols-outlined text-secondary text-[22px]">graphic_eq</span>
                <span>Lắng nghe Saranai</span>
              </button>
            </div>
          </div>
          
          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative mt-space-md xl:mt-0">
            <div className="relative w-full h-[350px] xl:h-[520px] rounded-xl overflow-hidden shadow-xl bg-surface-container-high group">
              <img alt="Kalan Po Klong Garai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJO2LeFcBxrnLD3_ngvbOCay5NrUQGUVuZkFtrKpti5KEcoH30WS6OOO-NMqLrlRG0HQZsxltS-um4S3a3R0yMJmfF5gre0ab0BqJ5JhFryOZ8lehz0tESRLuaIHYpc9p3aA_VAvNr2nJQG8S6z5VUEkRsC_vENB7PbBCA9G3B4X9Xxyy6JnGaagERULeA3pN-YMcSOAxhLS-dmW3MzMG1Y4SvS7-RsxXP1Jbo4ZPAd02G32DktDt1UQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-3 xl:p-space-md rounded-lg shadow-lg">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-label-sm uppercase text-primary tracking-widest font-semibold">Tâm điểm Khảo cổ</span>
                    <h3 className="font-title-md xl:font-headline-sm text-on-surface mt-0.5">Kalan Po Klong Garai</h3>
                  </div>
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px] xl:text-[28px]">temple_hindu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}