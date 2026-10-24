import type { Artisan, NavItem, PcNavLink, Testimonial, Tour, Waypoint } from '../types/heritage';

export const LOGO_URL = '/Logo.png';

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBJO2LeFcBxrnLD3_ngvbOCay5NrUQGUVuZkFtrKpti5KEcoH30WS6OOO-NMqLrlRG0HQZsxltS-um4S3a3R0yMJmfF5gre0ab0BqJ5JhFryOZ8lehz0tESRLuaIHYpc9p3aA_VAvNr2nJQG8S6z5VUEkRsC_vENB7PbBCA9G3B4X9Xxyy6JnGaagERULeA3pN-YMcSOAxhLS-dmW3MzMG1Y4SvS7-RsxXP1Jbo4ZPAd02G32DktDt1UQ';

export const MAP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUfYzm1NZ4arEZYOjXP-ADVRrL2xvxRYpA11bkxwybvUPyaLDDHcbzdna3ORWQdNhRZ691hmCL8NhJzSAjGU5gLcf6loBzxm9LlDDjY-bDf5UiEUEa8dCbgRQO5NwMElBhJX6SjLnotVvZ4SesvgT8Thywsaeywlcgwf1tW1jO8xFQbtJMa3R7BXOwL3MrVqNKr5Y-maFTUq9d3YpEzE5Uvj6QVImJxg-rCyKTWSyfkqmmjoELc7hWkA';

export const ARTISAN_PHAN_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBGoBQ0YTbgeC_aU74pGXo1oL2EIQvXidi293uM-D3IC3ytJg2Kb6n6-zQS893aL4Y-1ZeWUHgOy0CXn1RYU6Xg5ERRBTu44GX82RIfmSysT1lBGe11NxBc90UySzTISL4VfCfy2kwAwDqdhlo7-qSU4n9Wq149H7EgzP6jyN0S770xNmbtg8Bb8Sgmfn2GG91FQp1KF8UL6tZrnZDkKMgDqHyyIWjTGrAQtlhGDBIJVsnjy0rGg1nHJw';

export const ARTISAN_MO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA9DOa0kU9XPSC4ElDUYdkw-HVXrxst6qmjl-lUQl29coyB3dJ9-vQbqfdakYBl6jppcYvq7Nih94eJY0xa602x9Lm9fSWkwUkez46Mou_js76LipE83WzU-xNC6p9A37bPiJRQnRypjtRBqPGz3udpwc7pbWEAirI405yrHUOQpBqIg_hKppN7Wr772Erm11GCx3XktevmV50KpaZjljmWw7I8dpauAhny2KblbS9-SwL6i64m5yCz0A';

export const MANIFESTO_METRICS = [
  {
    icon: 'handshake',
    value: '100%',
    title: 'Nghệ nhân Bản địa',
    desc: 'Tất cả người dẫn lối, nghệ nhân thực hành nghi lễ và chế tác đều là con em cộng đồng Chăm Panduranga.',
    colorClass: 'text-primary',
  },
  {
    icon: 'museum',
    value: '02',
    title: 'Làng Cổ Đông Nam Á',
    desc: 'Làng gốm Bàu Trúc và dệt thổ cẩm Mỹ Nghiệp giữ nguyên phương pháp chế tác thủ công cổ xưa nhất khu vực.',
    colorClass: 'text-secondary',
  },
  {
    icon: 'workspace_premium',
    value: 'UNESCO',
    title: 'Bảo tồn Bền vững',
    desc: 'Nghệ thuật làm gốm của người Chăm được ghi danh trong Danh mục Di sản phi vật thể cần bảo vệ khẩn cấp.',
    colorClass: 'text-tertiary',
  },
  {
    icon: 'diversity_1',
    value: '70%',
    title: 'Hoàn lưu Cộng đồng',
    desc: 'Nguồn thu chuyển trực tiếp vào thù lao nghệ nhân, lớp truyền dạy chữ Chăm Akhar Thrah và quỹ y tế làng.',
    colorClass: 'text-primary-container',
  },
];

export const MANIFESTO_STATS = [
  { value: '100%', label: 'Nghệ nhân bản địa', className: 'text-primary' },
  { value: '02', label: 'Làng cổ Đông Nam Á', className: 'text-secondary' },
  { value: 'UNESCO', label: 'Di sản bảo tồn', className: 'text-tertiary' },
  { value: '70%', label: 'Hoàn lưu cộng đồng', className: 'text-primary-container' },
];

export const TOURS: Tour[] = [
  {
    id: 1,
    slug: 'ky-uc-bau-truc',
    badge: 'Nghề Cổ UNESCO',
    badgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    duration: '1 Ngày trọn vẹn',
    location: 'Làng Bàu Trúc, Ninh Phước',
    price: '650.000đ',
    adultPrice: 650000,
    childPrice: 450000,
    category: 'craft',
    rating: '4.98',
    reviewsCount: '68',
    title: 'Ký ức Bàu Trúc: Đất sét, Lửa & Bàn tay Người Mẹ',
    description:
      'Thực hành phương thức “tay làm chân quay” độc nhất vô nhị. Cùng Muk Phan nhóm đống rơm nung gốm lộ thiên lúc chạng vạng và thưởng thức nước chè vằng truyền thống.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBP4PHRGbG3YtY5o8Y9dQtorG-ft9MfBrobF0XfkDSXSC2Q3FYxhhj9Nv-D2PuO3ziUosy9gCgILcRS-kmEzedev3J6Nsy0hbgu7g9bQffDOeRgNWoW8hWlV2CuETxGQCzS_Sv-yjvsx9fcKzX50cz8_os0q6Ayo09on4sSk--hr_eOQJhj-gki2vyn7pOzpgD3c9X_RzSDftOVHDPt02IGTaX2fHp2vjENxKe0Vgw60L92rjaGtnkQ-g',
    chips: [
      { label: 'Làm gốm không bàn xoay', className: 'bg-surface-container text-on-surface-variant' },
      { label: 'Nung lộ thiên truyền thống', className: 'bg-surface-container text-on-surface-variant' },
      { label: 'Tặng bình gốm tự nắn', className: 'bg-surface-container text-on-surface-variant' },
    ],
  },
  {
    id: 2,
    slug: 'huyen-thoai-kalan',
    badge: 'Khảo Cổ & Kiến Trúc',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    duration: 'Buổi sáng (4.5 giờ)',
    location: 'Đồi Trầu, P. Đô Vinh',
    price: '450.000đ',
    adultPrice: 450000,
    childPrice: 300000,
    category: 'architecture',
    rating: '5.0',
    reviewsCount: '94',
    title: 'Huyền thoại Kalan: Tháp cổ dưới vòm trời Panduranga',
    description:
      'Đón bình minh tại đền tháp vĩ đại nhất xứ Panduranga. Chuyên gia văn hóa Chăm dẫn dắt đọc văn bia cổ, tìm hiểu bí mật chất kết dính nhựa cây thực vật và lắng nghe điệu kèn Saranai.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWzz5wVWN2Rre_bf3lzTZ89szZW61A19gyuIM1D6eHB2bgjSvLJ2IjqYRR2_FvWNOaiuYH_mZKTaaCYHyrAo6Y-MHZRm5QMjTQqVYlWO-UTZpP7j-38TvaXGvTC0E43MbjaK6OcYizspkYPA97vZ7ux2qQedU074FLdyFMB7zxmwJM_GGaJUJxVOmC--t3UtTdUYuMj2PhxbPFLX9SyKZLF-p5BPhi_fHZpOUSInajqnNWFka72rYwew',
    chips: [
      { label: 'Giải mã bia ký Sanskrit', className: 'bg-surface-container text-on-surface-variant' },
      { label: 'Kỹ thuật nung gạch cổ', className: 'bg-surface-container text-on-surface-variant' },
      { label: 'Hòa tấu Paranưng chân tháp', className: 'bg-surface-container text-on-surface-variant' },
    ],
  },
  {
    id: 3,
    slug: 'dem-kate-my-nghiep',
    badge: 'Văn Hóa Đêm & Sống Cùng Làng',
    badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    duration: '2 Ngày 1 Đêm',
    location: 'Làng Mỹ Nghiệp, Ninh Phước',
    price: '1.850.000đ',
    adultPrice: 1850000,
    childPrice: 1200000,
    category: 'ritual',
    rating: '4.96',
    reviewsCount: '42',
    title: 'Đêm Katê thiêng liêng & Sợi chỉ vàng Mỹ Nghiệp',
    description:
      'Nghỉ ngơi tại nhà gỗ truyền thống người Chăm Bàlamôn. Học dệt hoa văn hình chim thần Garuda từ sợi vỏ cây tự nhiên, nếm món canh bồi Um Bơk và đắm mình trong dạ hội cồng chiêng.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA',
    chips: [
      { label: 'Homestay nhà rường Chăm', className: 'bg-surface-container text-on-surface-variant' },
      { label: 'Dệt thủ công khung dệt gỗ', className: 'bg-surface-container text-on-surface-variant' },
      { label: 'Ẩm thực Um Bơk cổ truyền', className: 'bg-surface-container text-on-surface-variant' },
    ],
  },
];

export const WAYPOINTS: Waypoint[] = [
  {
    id: 1,
    icon: 'temple_hindu',
    shortName: '1. Po Klong Garai',
    district: 'Đô Vinh',
    title: 'Tháp Po Klong Garai (Đô Vinh)',
    sub: 'Cách Phan Rang 7 km • 07:00 - 17:30',
    distance: 'Cách Phan Rang 7 km',
    openHours: '07:00 - 17:30',
    badge: 'Trạm 01 • Kiến trúc Thánh điện',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    rules: 'Áo có tay, qua gối. Không leo trèo lên gạch tháp.',
    coords: [11.5833, 108.9667],
  },
  {
    id: 2,
    icon: 'potted_plant',
    shortName: '2. Gốm Bàu Trúc',
    district: 'Phước Dân',
    title: 'Gốm Đất nung Bàu Trúc (Paley Hamu Craok)',
    sub: 'Cách Phan Rang 10 km • Trải nghiệm tại chỗ',
    distance: 'Cách Phan Rang 10 km',
    openHours: 'Mở cửa cả ngày',
    badge: 'Trạm 02 • Làng nghề Cổ mẫu hệ',
    badgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    rules: 'Trang phục thoải mái, tháo giày dép khi bước vào sân nhà cổ Muk.',
    coords: [11.5333, 108.9167],
  },
  {
    id: 3,
    icon: 'texture',
    shortName: '3. Dệt Mỹ Nghiệp',
    district: 'Ninh Phước',
    title: 'Thổ cẩm Làng Mỹ Nghiệp (Paley Caklaing)',
    sub: 'Cách Phan Rang 12 km • 08:00 - 18:00',
    distance: 'Cách Phan Rang 12 km',
    openHours: '08:00 - 18:00',
    badge: 'Trạm 03 • Tinh hoa Khung cửi',
    badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    rules: 'Tôn trọng khung dệt cổ, hỏi ý kiến trước khi chụp cận cảnh nghệ nhân luồn sợi.',
    coords: [11.5167, 108.9333],
  },
  {
    id: 4,
    icon: 'account_balance',
    shortName: '4. Tháp Po Rome',
    district: 'Hậu Sanh',
    title: 'Tháp thiêng Po Rome (Hậu Sanh)',
    sub: 'Cách Phan Rang 15 km • 07:30 - 17:00',
    distance: 'Cách Phan Rang 15 km',
    openHours: '07:30 - 17:00',
    badge: 'Trạm 04 • Mật truyền Tâm linh',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    rules: 'Tháp còn nghi lễ thờ cúng linh thiêng, giữ trật tự và bỏ nón khi vào kalan.',
    coords: [11.4667, 108.9833],
  },
  {
    id: 5,
    icon: 'museum',
    shortName: '5. Bảo tàng Chăm',
    district: 'Phan Rang',
    title: 'Bảo tàng Văn hóa Chăm Ninh Thuận',
    sub: 'Trung tâm TP. Phan Rang • 07:30 - 17:00',
    distance: 'Trung tâm TP. Phan Rang',
    openHours: '07:30 - 17:00',
    badge: 'Trạm 05 • Kho tàng Cổ vật',
    badgeClass: 'bg-surface-container-high text-on-surface',
    rules: 'Không sờ vào hiện vật khảo cổ học, giữ tĩnh lặng trong phòng trưng bày.',
    coords: [11.5667, 108.995],
  },
];

export const ARTISANS: Artisan[] = [
  {
    id: 1,
    name: 'Muk Đàng Thị Phan',
    title: 'Nghệ nhân Ưu tú Bàu Trúc',
    experience: '58 năm giữ lửa • Đệ nhất bàn tay vàng gốm mẹ',
    village: 'Làng gốm Bàu Trúc',
    quote:
      '“Người Chăm làm gốm bằng đôi chân đi giật lùi, xoay quanh chiếc trụ đất. Đất dẻo theo tâm người, lửa đỏ theo lòng người. Mình thương đất thì đất nuôi mình sống rạng rỡ.”',
    bio: 'Muk Phan là một trong những nghệ nhân đại diện Việt Nam tham gia trình diễn tại trụ sở UNESCO Paris. Tại Bàu Trúc, bà đã truyền dạy kỹ thuật làm gốm không bàn xoay cho hơn 3 thế hệ con gái trong làng.',
    schedule: 'Lớp truyền dạy: Thứ Bảy & Chủ Nhật hàng tuần',
    image: ARTISAN_PHAN_IMAGE,
    badgeClass: 'bg-secondary text-on-secondary',
  },
  {
    id: 2,
    name: 'Nghệ nhân Phú Thị Mỡ',
    title: 'Nghệ nhân Thổ cẩm Mỹ Nghiệp',
    experience: '45 năm dệt khung • Bậc thầy đồ án hoa văn Katê',
    village: 'Làng dệt Mỹ Nghiệp',
    quote:
      '“Hoa văn quả trám, hình thần Shiva hay chim công không chỉ để đẹp. Đó là chữ viết không lời của phụ nữ Chăm gởi gắm cho chồng con lúc đi làm xa.”',
    bio: 'Bà Phú Thị Mỡ đã phục dựng thành công hơn 20 mẫu hoa văn hoàng cung Champa thế kỷ XVII tưởng chừng đã thất truyền, hoàn toàn sử dụng phẩm màu nhuộm từ thảo mộc thiên nhiên vùng đồi cát.',
    schedule: 'Không gian dệt: Hợp tác xã Dệt Thổ cẩm Mỹ Nghiệp',
    image: ARTISAN_MO_IMAGE,
    badgeClass: 'bg-tertiary text-on-tertiary',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    initials: 'TM',
    name: 'Thảo My',
    origin: 'Kiến trúc sư cảnh quan • TP. Hồ Chí Minh',
    avatarClass: 'bg-primary-fixed text-primary',
    content:
      '“Khoảnh khắc ngồi trên thềm nhà Muk Phan, tự tay miết bùn đất mát rượi và nghe Muk hát bài đồng dao Chăm đã làm tôi rơi nước mắt. Dana đã mang đến một góc nhìn hoàn toàn khác biệt: không thương mại hóa, ấm áp và vô cùng trang trọng.”',
  },
  {
    id: 2,
    initials: 'DM',
    name: 'David Miller',
    origin: 'Archaeology Researcher • Melbourne, Australia',
    avatarClass: 'bg-secondary-fixed text-secondary',
    content:
      '“As an archaeologist studying Southeast Asian brick temples, the sunrise tour at Po Klong Garai led by Cham scholars was an unmatched experience. The respect shown to sacred rites and local elders is something every tour company should learn from.”',
  },
  {
    id: 3,
    initials: 'ND',
    name: 'TS. Nguyễn Văn Dũng',
    origin: 'Giảng viên Văn hóa học • Hà Nội',
    avatarClass: 'bg-tertiary-fixed text-tertiary',
    content:
      '“Hành trình 2 ngày 1 đêm ở Mỹ Nghiệp đã giúp các con tôi hiểu thế nào là cội nguồn văn hóa. Đêm nghe tiếng trống Ginăng bập bùng bên bếp lửa làng, mọi âu lo phố thị dường như tan biến. Cảm ơn Dana rất nhiều!”',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { path: 'cong-di-san', icon: 'temple_buddhist', label: 'Cổng di sản' },
  { path: 'hanh-trinh-kham-pha', icon: 'explore', label: 'Hành trình' },
  { path: 'ban-do-thap-cham', icon: 'map', label: 'Bản đồ số' },
  { path: 'dat-tour-trai-nghiem', icon: 'calendar_month', label: 'Đặt tour' },
];

export const PC_NAV_LINKS: PcNavLink[] = [
  { href: '/', label: 'Trang chủ' },
  { href: '/tour', label: 'Hành trình' },
  {
    href: '/bai-viet',
    label: 'Bài Viết',
    children: [
      {
        href: '/bai-viet?category=tin-tuc',
        label: 'Tin tức',
        desc: 'Sự kiện, bảo tồn & nhịp sống bản địa',
      },
      {
        href: '/bai-viet?category=lich-su',
        label: 'Lịch sử',
        desc: 'Vương triều, khảo cổ học & di tích ngàn năm',
      },
      {
        href: '/bai-viet?category=van-hoa',
        label: 'Văn Hoá',
        desc: 'Đền tháp, làng nghề gốm - dệt & lễ hội',
      },
    ],
  },
  {
    href: '/so-hoa-di-san',
    label: 'Số hoá di sản',
    children: [
      {
        href: '/so-hoa-di-san?tab=hinh-anh',
        label: 'Hình ảnh Văn hoá',
        desc: 'Kho ảnh nghệ thuật điền dã & bảo tàng số',
      },
      {
        href: '/so-hoa-di-san?tab=ngon-ngu',
        label: 'Ngôn ngữ Chăm Akhar Thrah',
        desc: 'Ký tự cổ tương tác, âm thanh & từ điển số',
      },
      {
        href: '/so-hoa-di-san?tab=van-bia',
        label: 'Giải mã Văn bia Cổ',
        desc: 'Bản dập bia ký sa thạch Sanskrit - Chăm',
      },
    ],
  },
];

export const DESTINATION_OPTIONS = [
  'Tất cả vùng di sản',
  'Tháp Po Klong Garai (Đô Vinh)',
  'Làng gốm Bàu Trúc (Phước Dân)',
  'Dệt thổ cẩm Mỹ Nghiệp (Ninh Phước)',
  'Đền tháp thiêng Po Rome (Hậu Sanh)',
  'Bảo tàng Văn hóa Chăm Ninh Thuận',
];

export const EXPERIENCE_OPTIONS = [
  'Gốm nung lộ thiên & Muk',
  'Giải mã bia ký & Khảo cổ',
  'Đêm hội Katê & Thổ cẩm',
  'Nhiếp ảnh Di sản Chuyên sâu',
];

export const TRAVELER_OPTIONS = [
  '2 khách (Trải nghiệm riêng tư)',
  '1 khách (Hành hương cá nhân)',
  '4 - 6 khách (Gia đình/Nhóm bạn)',
  'Đoàn khảo cứu (> 8 khách)',
];
