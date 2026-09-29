import React from 'react';

export default function ToursSection() {
  return (
    <section className="w-full bg-surface py-space-xl" id="hanh-trinh">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold block mb-space-xs">
              Hành trình Văn hóa Độc bản
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Chiều sâu Xứ Sở Panduranga
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
              Mỗi lịch trình được thiết kế giới hạn số lượng khách, tập trung vào đối thoại chiều sâu cùng nhân chứng sống di sản.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-lg overflow-x-auto">
            <button className="px-space-md py-1.5 rounded-DEFAULT bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap" type="button">Tất cả</button>
            <button className="px-space-md py-1.5 rounded-DEFAULT bg-transparent hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors whitespace-nowrap" type="button">Nghề cổ</button>
            <button className="px-space-md py-1.5 rounded-DEFAULT bg-transparent hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors whitespace-nowrap" type="button">Kiến trúc Đền tháp</button>
            <button className="px-space-md py-1.5 rounded-DEFAULT bg-transparent hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors whitespace-nowrap" type="button">Nghi lễ Thiêng</button>
          </div>
        </div>

        {/* 3 Columns Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          
          {/* Journey Card 1 */}
          <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden bg-surface-container">
              <img 
                alt="Nghệ nhân Bàu Trúc" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP4PHRGbG3YtY5o8Y9dQtorG-ft9MfBrobF0XfkDSXSC2Q3FYxhhj9Nv-D2PuO3ziUosy9gCgILcRS-kmEzedev3J6Nsy0hbgu7g9bQffDOeRgNWoW8hWlV2CuETxGQCzS_Sv-yjvsx9fcKzX50cz8_os0q6Ayo09on4sSk--hr_eOQJhj-gki2vyn7pOzpgD3c9X_RzSDftOVHDPt02IGTaX2fHp2vjENxKe0Vgw60L92rjaGtnkQ-g" 
              />
              <div className="absolute top-space-md left-space-md">
                <span className="px-space-sm py-1 rounded-DEFAULT bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Nghề Cổ UNESCO
                </span>
              </div>
              <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-space-sm py-1 rounded-DEFAULT font-label-md text-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 1 Ngày trọn vẹn
              </div>
            </div>
            
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
                  <span>Làng Bàu Trúc, Ninh Phước</span>
                  <span className="flex items-center text-secondary">
                    <span className="material-symbols-outlined text-[16px]">star</span> 4.98 (68 lượt)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Ký ức Bàu Trúc: Đất sét, Lửa & Bàn tay Người Mẹ
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed line-clamp-3">
                  Thực hành phương thức “tay làm chân quay” độc nhất vô nhị. Cùng Muk Phan nhóm đống rơm nung gốm lộ thiên lúc chạng vạng và thưởng thức nước chè vằng truyền thống.
                </p>
                
                {/* Highlights list */}
                <div className="mt-space-md flex flex-wrap gap-space-xs">
                  <span className="px-2 py-1 rounded-DEFAULT bg-surface-container text-on-surface-variant font-body-sm text-[12px]">Làm gốm không bàn xoay</span>
                  <span className="px-2 py-1 rounded-DEFAULT bg-surface-container text-on-surface-variant font-body-sm text-[12px]">Nung lộ thiên truyền thống</span>
                </div>
              </div>
              
              <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-variant">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Chi phí bảo tồn:</span>
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    650.000đ <span className="font-body-sm text-[13px] font-normal text-on-surface-variant">/khách</span>
                  </span>
                </div>
                <a className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1" href="#">
                  <span>Chi tiết</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Journey Card 2: Kalan Po Klong Garai */}
          <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden bg-surface-container">
              <img 
                alt="Kalan Po Klong Garai" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWzz5wVWN2Rre_bf3lzTZ89szZW61A19gyuIM1D6eHB2bgjSvLJ2IjqYRR2_FvWNOaiuYH_mZKTaaCYHyrAo6Y-MHZRm5QMjTQqVYlWO-UTZpP7j-38TvaXGvTC0E43MbjaK6OcYizspkYPA97vZ7ux2qQedU074FLdyFMB7zxmwJM_GGaJUJxVOmC--t3UtTdUYuMj2PhxbPFLX9SyKZLF-p5BPhi_fHZpOUSInajqnNWFka72rYwew" 
              />
              <div className="absolute top-space-md left-space-md">
                <span className="px-space-sm py-1 rounded-DEFAULT bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Khảo Cổ & Kiến Trúc
                </span>
              </div>
              <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-space-sm py-1 rounded-DEFAULT font-label-md text-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> Buổi sáng (4.5 giờ)
              </div>
            </div>
            
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
                  <span>Đồi Trầu, P. Đô Vinh</span>
                  <span className="flex items-center text-secondary">
                    <span className="material-symbols-outlined text-[16px]">star</span> 5.0 (94 lượt)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Huyền thoại Kalan: Tháp cổ dưới vòm trời Panduranga
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed line-clamp-3">
                  Đón bình minh tại đền tháp vĩ đại nhất xứ Panduranga. Chuyên gia văn hóa Chăm dẫn dắt đọc văn bia cổ, tìm hiểu bí mật chất kết dính nhựa cây thực vật.
                </p>
                <div className="mt-space-md flex flex-wrap gap-space-xs">
                  <span className="px-2 py-1 rounded-DEFAULT bg-surface-container text-on-surface-variant font-body-sm text-[12px]">Giải mã bia ký Sanskrit</span>
                  <span className="px-2 py-1 rounded-DEFAULT bg-surface-container text-on-surface-variant font-body-sm text-[12px]">Hòa tấu Paranưng</span>
                </div>
              </div>
              
              <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-variant">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Chi phí bảo tồn:</span>
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    450.000đ <span className="font-body-sm text-[13px] font-normal text-on-surface-variant">/khách</span>
                  </span>
                </div>
                <a className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1" href="#">
                  <span>Chi tiết</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Journey Card 3: Thổ cẩm Mỹ Nghiệp */}
          <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden bg-surface-container">
              <img 
                alt="Làng dệt Mỹ Nghiệp" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA" 
              />
              <div className="absolute top-space-md left-space-md">
                <span className="px-space-sm py-1 rounded-DEFAULT bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Văn Hóa Đêm & Sống Cùng Làng
                </span>
              </div>
              <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-space-sm py-1 rounded-DEFAULT font-label-md text-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 2 Ngày 1 Đêm
              </div>
            </div>
            
            <div className="p-space-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
                  <span>Làng Mỹ Nghiệp, Ninh Phước</span>
                  <span className="flex items-center text-secondary">
                    <span className="material-symbols-outlined text-[16px]">star</span> 4.96 (42 lượt)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  Đêm Katê thiêng liêng & Sợi chỉ vàng Mỹ Nghiệp
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed line-clamp-3">
                  Nghỉ ngơi tại nhà gỗ truyền thống người Chăm Bàlamôn. Học dệt hoa văn hình chim thần Garuda từ sợi vỏ cây tự nhiên, nếm món canh bồi Um Bơk.
                </p>
                <div className="mt-space-md flex flex-wrap gap-space-xs">
                  <span className="px-2 py-1 rounded-DEFAULT bg-surface-container text-on-surface-variant font-body-sm text-[12px]">Homestay nhà rường Chăm</span>
                  <span className="px-2 py-1 rounded-DEFAULT bg-surface-container text-on-surface-variant font-body-sm text-[12px]">Ẩm thực Um Bơk</span>
                </div>
              </div>
              
              <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-variant">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Chi phí bảo tồn:</span>
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    1.850.000đ <span className="font-body-sm text-[13px] font-normal text-on-surface-variant">/khách</span>
                  </span>
                </div>
                <a className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1" href="#">
                  <span>Chi tiết</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}