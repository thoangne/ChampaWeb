export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'kalan' | 'craft' | 'ritual' | 'portrait';
  imageUrl: string;
  author: string;
  location: string;
  year: string;
  description: string;
  curatorNote?: string;
  tags: string[];
}

export interface GalleryCategory {
  id: string;
  label: string;
  count: number;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'all', label: 'Tất cả kho ảnh', count: 12 },
  { id: 'kalan', label: 'Đền tháp Kalan', count: 4 },
  { id: 'craft', label: 'Làng nghề Gốm & Thổ cẩm', count: 3 },
  { id: 'ritual', label: 'Lễ hội Katê & Nghi thức', count: 3 },
  { id: 'portrait', label: 'Chân dung Panduranga', count: 2 },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Bình minh vương triều trên đỉnh Đồi Trầu',
    category: 'kalan',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWzz5wVWN2Rre_bf3lzTZ89szZW61A19gyuIM1D6eHB2bgjSvLJ2IjqYRR2_FvWNOaiuYH_mZKTaaCYHyrAo6Y-MHZRm5QMjTQqVYlWO-UTZpP7j-38TvaXGvTC0E43MbjaK6OcYizspkYPA97vZ7ux2qQedU074FLdyFMB7zxmwJM_GGaJUJxVOmC--t3UtTdUYuMj2PhxbPFLX9SyKZLF-p5BPhi_fHZpOUSInajqnNWFka72rYwew',
    author: 'Nhiếp ảnh gia Đỗ Hữu Trí',
    location: 'Tháp Po Klong Garai, Đô Vinh, Phan Rang',
    year: '2024',
    description:
      'Tia nắng sớm đầu tiên xuyên qua vòm cửa tháp Cổng (Gopura), tôn vinh sắc đỏ trầm mặc của hàng triệu viên gạch đất nung tám trăm năm tuổi.',
    curatorNote: 'Góc chụp tái hiện tỷ lệ vàng đối xứng của kiến trúc tháp Champa thế kỷ XIII.',
    tags: ['Kalan', 'Gạch nung', 'Bình minh', 'Bảo vật quốc gia'],
  },
  {
    id: 'photo-2',
    title: 'Điệu múa chim công chào đón Nữ thần Xứ sở',
    category: 'ritual',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAp5oGIUVAeSJNWnmsriAoE7Rx-gdVHGigsy1epg2Fah3OzIXtn7INt9avN5y3DYyr_5mgSbawDhhdB6AVM-eYtjoRZfxrq27rRi1-chffHIx6soB1QRX5R3xTS8gl_eF19cPeH7hONAuA5dgaNxeEG4JYrWaLNmlFYWVg8fXjwigzILTDoZgUaOHe27pOw-PL1DfizD5qy-ARG-iBr0tq2l090mbglxQI-yq7RDH_u_9aIirJEjUmV9Q',
    author: 'Bá Minh Cường',
    location: 'Sân lễ Đền tháp Po Nagar',
    year: '2024',
    description:
      'Thiếu nữ Chăm trong tà áo dài Aw Kamei Chăm thướt tha uyển chuyển theo nhịp kèn Saranai và tiếng trống Ginăng giòn giã trong ngày hội Katê.',
    curatorNote: 'Điệu múa thiêng quạt Chăm tượng trưng cho đôi cánh chim công mang lại phồn thực và mưa thuận gió hòa.',
    tags: ['Katê', 'Điệu múa Chăm', 'Aw Kamei', 'Lễ hội'],
  },
  {
    id: 'photo-3',
    title: 'Bàn tay vàng miết đất bùn không bàn xoay',
    category: 'craft',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
    author: 'Viện Di sản Panduranga',
    location: 'Làng gốm Bàu Trúc, Ninh Phước',
    year: '2023',
    description:
      'Người phụ nữ Chăm đi lùi giật bước chân nhịp nhàng quanh khối đất sét dẻo quánh, từng ngón tay thô ráp tạo nên đường lượn mềm mại của chiếc bình thiêng.',
    curatorNote: 'Di sản văn hóa phi vật thể của nhân loại được UNESCO vinh danh cần bảo vệ khẩn cấp năm 2022.',
    tags: ['Gốm Bàu Trúc', 'UNESCO', 'Tay làm chân quay', 'Di sản sống'],
  },
  {
    id: 'photo-4',
    title: 'Sợi chỉ nhuộm màu vỏ rừng bên khung cửi cổ',
    category: 'craft',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnUVQIkkzk4sUIaAcHvZKq-_JFsMVjkwWi6wVJYz1b38pTtWTcB_NnJA9pUSrOog9MIIrHBMjNMwmZ07G62QeC68HKaFH2ZC3FLZR1ykISx0jftWhDdHrOTZyDGh6OxckvxscMAIC0lKtMK89ZXTNb9p4uIebpPghBC4Qz-x4S-IRHj1glQM0pYgcmuItDQ5ICUQO9VGBUbRyuV-L5vdNRAZPn1RVNCS2THNjEc9XBmkvxGOQuBI0ZjQ',
    author: 'Đàng Thị Loan',
    location: 'Làng dệt Mỹ Nghiệp (Paley Caklaing)',
    year: '2024',
    description:
      'Từng đường thoi đưa lách cách tái hiện đồ hình vũ trụ và hoa văn quả trám biểu tượng cho trí tuệ người Chăm xưa.',
    curatorNote: 'Thổ cẩm truyền thống nhuộm hoàn toàn bằng rễ nhàu và vỏ tràm đồi cát.',
    tags: ['Thổ cẩm', 'Mỹ Nghiệp', 'Khung dệt cổ', 'Hoa văn Chăm'],
  },
  {
    id: 'photo-5',
    title: 'Ánh mắt người giữ lửa Muk Đàng Thị Phan',
    category: 'portrait',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGoBQ0YTbgeC_aU74pGXo1oL2EIQvXidi293uM-D3IC3ytJg2Kb6n6-zQS893aL4Y-1ZeWUHgOy0CXn1RYU6Xg5ERRBTu44GX82RIfmSysT1lBGe11NxBc90UySzTISL4VfCfy2kwAwDqdhlo7-qSU4n9Wq149H7EgzP6jyN0S770xNmbtg8Bb8Sgmfn2GG91FQp1KF8UL6tZrnZDkKMgDqHyyIWjTGrAQtlhGDBIJVsnjy0rGg1nHJw',
    author: 'Trần Tuấn Linh',
    location: 'Lò nung gốm lộ thiên Bàu Trúc',
    year: '2024',
    description:
      'Nụ cười hiền hậu và đôi bàn tay phủ đầy vệt đất son của Nghệ nhân Ưu tú hơn 58 năm gìn giữ kỹ nghệ gốm không bàn xoay.',
    curatorNote: 'Bức chân dung được trưng bày tại triển lãm Di sản Á Đông UNESCO Paris.',
    tags: ['Nghệ nhân', 'Muk Phan', 'Chân dung', 'Bàu Trúc'],
  },
  {
    id: 'photo-6',
    title: 'Thần hộ mệnh Po Rome giữa bóng chiều tà',
    category: 'kalan',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzljZH7__gmKglHYhA2NZtHh2wp1_j6eufhB24fW5dLEg6Q3iVPhcklfXTyfQfftG0s3kkeFa45XwJi0fI0t965d-lV9hy3Bp86bWdiRgQjJMFwqoPZzvC1Puek_bg_vu8Hy90bDTysgtbAXLReE5kLRMopjTkjh5Fgl-uWE2PDhyzuKEA3B_xFsrORw9XqbKdNdrSvBBD0BLP1ezotbfBBmrZCZNeWb86lbUY2kjNCncvJkPSIpv7pA',
    author: 'Nguyễn Thanh Tùng',
    location: 'Tháp Po Rome, Làng Hậu Sanh, Ninh Phước',
    year: '2023',
    description:
      'Ngọn tháp gạch sừng sững trên đồi cát cô đơn, lưu dấu ấn vị vua cuối cùng của triều đại Champa độc lập.',
    curatorNote: 'Nơi lưu giữ bức tượng vua Po Rome tạc dạng thần Shiva với nét điêu khắc mộc mạc và huyền bí.',
    tags: ['Po Rome', 'Hoàng hôn', 'Kalan', 'Hậu Sanh'],
  },
  {
    id: 'photo-7',
    title: 'Hồn thiêng Saranai & đôi nhịp trống Paranưng',
    category: 'ritual',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByRjv3i0FgHFxRrA7jzb_vp4kh7-P-4NrSYq9Zkk1lt5uKtg0Nqhq3LnRPLql0yHGiNMjL6ZdJ4bvwAco_jKoi5cKVVQyrhDXC_CtMT08OA5ogzdkhkYr96QFa4Jly_q9fjQIvrK6GcFT1JJlUR6bxy0yVImxdXGO8N5wDrB4tcuYiFJUP6SevjiPWkYr2orVSIoCNJDpVkrUBSCZVndc03_Kqs_3OkB2XPFgcw_7FdSU08jQAjDT5ZQ',
    author: 'Trương Quang Nam',
    location: 'Tháp Đô Vinh',
    year: '2024',
    description:
      'Khoảnh khắc các nghệ nhân bản địa hòa tấu bản nhạc cúng thần, tiếng kèn vút cao như mây trời còn tiếng trống trầm vang như lòng đất mẹ.',
    curatorNote: 'Bộ ba nhạc cụ Saranai - Ginăng - Paranưng là linh hồn không thể tách rời trong mọi nghi lễ tôn giáo Chăm.',
    tags: ['Saranai', 'Ginăng', 'Nhạc khí cổ', 'Thanh âm thiêng'],
  },
  {
    id: 'photo-8',
    title: 'Nghệ nhân Phú Thị Mỡ bên hoa văn hoàng cung',
    category: 'portrait',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9DOa0kU9XPSC4ElDUYdkw-HVXrxst6qmjl-lUQl29coyB3dJ9-vQbqfdakYBl6jppcYvq7Nih94eJY0xa602x9Lm9fSWkwUkez46Mou_js76LipE83WzU-xNC6p9A37bPiJRQnRypjtRBqPGz3udpwc7pbWEAirI405yrHUOQpBqIg_hKppN7Wr772Erm11GCx3XktevmV50KpaZjljmWw7I8dpauAhny2KblbS9-SwL6i64m5yCz0A',
    author: 'Lê Hoàng Yến',
    location: 'Hợp tác xã Thổ cẩm Mỹ Nghiệp',
    year: '2024',
    description:
      'Bậc thầy phục dựng hoa văn cổ Champa với ánh mắt đam mê gìn giữ di sản cho thế hệ cháu con.',
    curatorNote: 'Hơn 20 mẫu đồ án hoa văn thất truyền thế kỷ XVII đã được nghệ nhân khôi phục trọn vẹn.',
    tags: ['Nghệ nhân', 'Phú Thị Mỡ', 'Mỹ Nghiệp', 'Chân dung'],
  },
];
