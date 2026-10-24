export interface SouvenirProduct {
  id: string;
  name: string;
  category: 'gom-bau-truc' | 'tho-cam-my-nghiep' | 'nhac-cu' | 'vat-pham-phong-thuy';
  badge: string;
  badgeClass?: string;
  artisan: string;
  village: string;
  material: string;
  dimensions: string;
  description: string;
  culturalMeaning: string;
  imageUrl: string;
  tags: string[];
  hotline: string;
  zalo: string;
}

export interface SouvenirCategory {
  id: string;
  label: string;
  count: number;
  iconName?: string;
}

export const SOUVENIR_CATEGORIES: SouvenirCategory[] = [
  { id: 'all', label: 'Tất cả tác phẩm', count: 8 },
  { id: 'gom-bau-truc', label: 'Gốm cổ Bàu Trúc (UNESCO)', count: 3 },
  { id: 'tho-cam-my-nghiep', label: 'Thổ cẩm dệt tay Mỹ Nghiệp', count: 2 },
  { id: 'nhac-cu', label: 'Nhạc khí Cổ truyền Chăm', count: 2 },
  { id: 'vat-pham-phong-thuy', label: 'Khắc đá & Trầm hương', count: 1 },
];

export const SOUVENIR_PRODUCTS: SouvenirProduct[] = [
  {
    id: 'sp-01',
    name: 'Bình Gốm Phù Điêu Vũ Nữ Apsara Độc Bản',
    category: 'gom-bau-truc',
    badge: 'Độc bản Nghệ nhân',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    artisan: 'Nghệ nhân Ưu tú Đàng Thị Phan',
    village: 'Làng gốm Bàu Trúc, Ninh Phước',
    material: 'Đất sét mịn triền sông Quao, nung củi trấu lộ thiên không men',
    dimensions: 'Cao 42cm • Đường kính bụng 26cm • Trọng lượng 3.8kg',
    description:
      'Tác phẩm được vuốt tay thủ công 100% bằng kỹ thuật đi giật lùi truyền đời độc nhất vô nhị. Họa tiết vũ nữ Apsara uốn lượn mềm mại trên thân bình được chạm khắc khi đất còn dẻo quánh, sau đó hun màu tự nhiên bằng nước rễ cây chùm gọng bí truyền.',
    culturalMeaning:
      'Biểu tượng cho vẻ đẹp bất diệt, sự mềm mại và lời chúc phúc bình an, phồn thực từ các vị thần nữ Champa.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
    tags: ['Gốm Bàu Trúc', 'UNESCO', 'Độc bản', 'Apsara'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-02',
    name: 'Mô Hình Tháp Kalan Thu Nhỏ Nung Lửa Thiêng',
    category: 'gom-bau-truc',
    badge: 'Di sản UNESCO',
    badgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    artisan: 'Xưởng chế tác Bàu Trúc Heritage',
    village: 'Làng gốm Bàu Trúc, Ninh Phước',
    material: 'Đất sét đỏ nung rơm rạ lộ thiên, vệt ám khói phong sương',
    dimensions: 'Cao 28cm • Đáy vuông 14x14cm • Nặng 1.9kg',
    description:
      'Mô phỏng cấu trúc ngọn tháp Po Klong Garai huyền thoại với vòm cửa hình lá đề nhiều lớp và tượng thần Shiva trấn giữ. Màu gạch loang tự nhiên từ vàng cam sang đen khói do ngọn lửa lộ thiên tạo ra.',
    culturalMeaning:
      'Mang năng lượng bảo bọc của thần Shiva và tiền nhân, thích hợp trưng bày phòng khách, bàn làm việc hoặc không gian thiền định.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWzz5wVWN2Rre_bf3lzTZ89szZW61A19gyuIM1D6eHB2bgjSvLJ2IjqYRR2_FvWNOaiuYH_mZKTaaCYHyrAo6Y-MHZRm5QMjTQqVYlWO-UTZpP7j-38TvaXGvTC0E43MbjaK6OcYizspkYPA97vZ7ux2qQedU074FLdyFMB7zxmwJM_GGaJUJxVOmC--t3UtTdUYuMj2PhxbPFLX9SyKZLF-p5BPhi_fHZpOUSInajqnNWFka72rYwew',
    tags: ['Mô hình tháp', 'Po Klong Garai', 'Nung lộ thiên', 'Phong thủy'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-03',
    name: 'Đĩa Gốm Treo Tường Khắc Đồ Hình Mặt Trời Chăm',
    category: 'gom-bau-truc',
    badge: 'Mộc bản truyền thống',
    badgeClass: 'bg-surface-container text-on-surface',
    artisan: 'Nghệ nhân Đàng Chí Quyết',
    village: 'Hợp tác xã Gốm truyền thống Bàu Trúc',
    material: 'Đất phù sa cổ kết hợp cát mịn sàng lọc',
    dimensions: 'Đường kính 32cm • Dày 2.5cm • Kèm chân đế gỗ & móc treo',
    description:
      'Họa tiết tia sáng mặt trời biểu trưng cho quyền uy vương triều và ánh sáng trí tuệ soi đường. Bề mặt nhẵn bóng được miết thủ công bằng vỏ sò biển Phan Rang trước khi nung.',
    culturalMeaning:
      'Khai mở vượng khí, xua tan năng lượng u ám, tượng trưng cho sự khởi đầu hanh thông và tươi sáng.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGoBQ0YTbgeC_aU74pGXo1oL2EIQvXidi293uM-D3IC3ytJg2Kb6n6-zQS893aL4Y-1ZeWUHgOy0CXn1RYU6Xg5ERRBTu44GX82RIfmSysT1lBGe11NxBc90UySzTISL4VfCfy2kwAwDqdhlo7-qSU4n9Wq149H7EgzP6jyN0S770xNmbtg8Bb8Sgmfn2GG91FQp1KF8UL6tZrnZDkKMgDqHyyIWjTGrAQtlhGDBIJVsnjy0rGg1nHJw',
    tags: ['Đĩa gốm', 'Mặt trời', 'Miết vỏ sò', 'Trang trí'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-04',
    name: 'Khăn Choàng Thổ Cẩm Mỹ Nghiệp Sợi Chỉ Vàng',
    category: 'tho-cam-my-nghiep',
    badge: 'Nhuộm vỏ rừng tự nhiên',
    badgeClass: 'bg-primary-container text-on-primary-container',
    artisan: 'Nghệ nhân Phú Thị Mỡ',
    village: 'Làng dệt thổ cẩm Mỹ Nghiệp (Paley Caklaing)',
    material: '100% Sợi bông tự nhiên, nhuộm rễ cây nhàu và vỏ tràm cồn cát',
    dimensions: 'Dài 185cm • Rộng 68cm • Tua rua kết tay 8cm',
    description:
      'Dệt thủ công trên khung cửi cổ truyền hơn 20 ngày công. Họa tiết chim thần Garuda và hoa văn mắt công mẫu hệ được đan xen tinh xảo bằng chỉ tơ nhuộm màu vàng nghệ tự nhiên mềm mại, ấm cúng và thoáng khí.',
    culturalMeaning:
      'Sự che chở, ấm áp và kết nối tình thân mẫu hệ thiêng liêng của người phụ nữ Chăm.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnUVQIkkzk4sUIaAcHvZKq-_JFsMVjkwWi6wVJYz1b38pTtWTcB_NnJA9pUSrOog9MIIrHBMjNMwmZ07G62QeC68HKaFH2ZC3FLZR1ykISx0jftWhDdHrOTZyDGh6OxckvxscMAIC0lKtMK89ZXTNb9p4uIebpPghBC4Qz-x4S-IRHj1glQM0pYgcmuItDQ5ICUQO9VGBUbRyuV-L5vdNRAZPn1RVNCS2THNjEc9XBmkvxGOQuBI0ZjQ',
    tags: ['Thổ cẩm', 'Mỹ Nghiệp', 'Khung cửi cổ', 'Nhuộm tự nhiên'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-05',
    name: 'Túi Đeo Chéo Thổ Cẩm Hoa Văn Kỷ Hà Triều Đình',
    category: 'tho-cam-my-nghiep',
    badge: 'Thiết kế ứng dụng',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    artisan: 'Tổ hợp tác Nữ công Mỹ Nghiệp',
    village: 'Làng dệt thổ cẩm Mỹ Nghiệp, Phan Rang',
    material: 'Vải thổ cẩm dệt tay dày dặn, lót vải mộc tự nhiên, khóa đồng cổ',
    dimensions: 'Ngang 24cm • Cao 18cm • Dày 7cm • Dây đeo tăng chỉnh 120cm',
    description:
      'Sự kết hợp hoàn hảo giữa kỹ thuật dệt hoa văn hình thoi cổ điển và kiểu dáng túi hiện đại. Sản phẩm đựng vừa sổ tay, điện thoại, ví tiền và phụ kiện cá nhân khi du lịch hay dạo phố.',
    culturalMeaning:
      'Đại diện cho sự khéo léo bền bỉ, lưu giữ giá trị di sản trong nhịp sống đương đại.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9DOa0kU9XPSC4ElDUYdkw-HVXrxst6qmjl-lUQl29coyB3dJ9-vQbqfdakYBl6jppcYvq7Nih94eJY0xa602x9Lm9fSWkwUkez46Mou_js76LipE83WzU-xNC6p9A37bPiJRQnRypjtRBqPGz3udpwc7pbWEAirI405yrHUOQpBqIg_hKppN7Wr772Erm11GCx3XktevmV50KpaZjljmWw7I8dpauAhny2KblbS9-SwL6i64m5yCz0A',
    tags: ['Túi thổ cẩm', 'Mỹ Nghiệp', 'Ứng dụng', 'Hoa văn cổ'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-06',
    name: 'Kèn Saranai Gỗ Mun Khắc Tay Cổ Truyền',
    category: 'nhac-cu',
    badge: 'Nhạc khí thiêng',
    badgeClass: 'bg-primary-fixed-dim text-on-primary-fixed',
    artisan: 'Nghệ nhân Thần nhạc Trượng Tốn',
    village: 'Làng Chăm Hậu Sanh, Ninh Phước',
    material: 'Thân kèn gỗ mun sừng đồi đá, loa kèn gỗ gõ đỏ, dăm lá buông tự nhiên',
    dimensions: 'Dài 45cm • Loa kèn đường kính 10cm • Kèm hộp gỗ bảo quản',
    description:
      'Chiếc kèn biểu tượng của lễ hội Katê với âm sắc thanh thoát, vang vọng qua nhiều cây số. Thân kèn được tiện từ gỗ mun già, khoan 7 lỗ thoát âm tương ứng 7 cung bậc thiêng liêng, chạm trổ hoa văn hình sóng nước Champa.',
    culturalMeaning:
      'Tiếng kèn Saranai tượng trưng cho tiếng hót của phượng hoàng thiêng, cầu nối tâm linh giữa con người và thần linh tối cao.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByRjv3i0FgHFxRrA7jzb_vp4kh7-P-4NrSYq9Zkk1lt5uKtg0Nqhq3LnRPLql0yHGiNMjL6ZdJ4bvwAco_jKoi5cKVVQyrhDXC_CtMT08OA5ogzdkhkYr96QFa4Jly_q9fjQIvrK6GcFT1JJlUR6bxy0yVImxdXGO8N5wDrB4tcuYiFJUP6SevjiPWkYr2orVSIoCNJDpVkrUBSCZVndc03_Kqs_3OkB2XPFgcw_7FdSU08jQAjDT5ZQ',
    tags: ['Saranai', 'Gỗ mun', 'Lễ hội Katê', 'Nhạc cụ'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-07',
    name: 'Trống Paranưng Da Dê Gỗ Mít Cổ Bản',
    category: 'nhac-cu',
    badge: 'Chế tác theo đơn',
    badgeClass: 'bg-surface-container-high text-on-surface',
    artisan: 'Nghệ nhân Kiều Mậu Diễn',
    village: 'Làng Chăm Đô Vinh, TP. Phan Rang',
    material: 'Thân trống gỗ mít lõi đục rỗng nguyên khối, mặt bịt da dê tơ căng dây da',
    dimensions: 'Đường kính mặt trống 48cm • Chiều cao 16cm • Nặng 4.2kg',
    description:
      'Trống Paranưng vỗ tay là một trong ba nhạc cụ chủ đạo của dàn nhạc lễ Chăm. Được căng mặt bằng kỹ thuật cổ xưa giúp âm bass trầm ấm ngân vang như tiếng sấm đầu mùa gọi hạt mưa lành tưới mát nương rẫy.',
    culturalMeaning:
      'Tượng trưng cho lòng đất mẹ bao dung và nhịp đập sinh khí trường tồn của cộng đồng làng xóm.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAp5oGIUVAeSJNWnmsriAoE7Rx-gdVHGigsy1epg2Fah3OzIXtn7INt9avN5y3DYyr_5mgSbawDhhdB6AVM-eYtjoRZfxrq27rRi1-chffHIx6soB1QRX5R3xTS8gl_eF19cPeH7hONAuA5dgaNxeEG4JYrWaLNmlFYWVg8fXjwigzILTDoZgUaOHe27pOw-PL1DfizD5qy-ARG-iBr0tq2l090mbglxQI-yq7RDH_u_9aIirJEjUmV9Q',
    tags: ['Paranưng', 'Da dê', 'Gỗ mít', 'Nhạc cụ thiêng'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
  {
    id: 'sp-08',
    name: 'Bản Dập Phù Điêu Sa Thạch Po Rome Khắc Tay',
    category: 'vat-pham-phong-thuy',
    badge: 'Giới hạn 50 bản',
    badgeClass: 'bg-primary text-on-primary',
    artisan: 'Nhóm Khảo cứu & Bảo tồn Dana',
    village: 'Trung tâm Khảo cổ Di sản Panduranga',
    material: 'Giấy dó cổ truyền dập mực nho mộc bản sa thạch, đóng khung gỗ sồi',
    dimensions: 'Khung 50cm x 70cm • Mặt tranh 40cm x 60cm • Kèm chứng thư giám định',
    description:
      'Tái hiện nguyên bản đường nét văn bia và tượng vua Po Rome thế kỷ XVII bằng phương pháp dập thủ công truyền thống của các nhà khảo cổ học. Mỗi tác phẩm đều có số sê-ri độc nhất và chữ ký chứng thực của trưởng ban di sản làng.',
    culturalMeaning:
      'Lưu giữ tinh hoa văn tự và quyền uy hoàng gia Champa, mang lại sự uy nghiêm, vững chãi và hanh thông cho gia chủ.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzljZH7__gmKglHYhA2NZtHh2wp1_j6eufhB24fW5dLEg6Q3iVPhcklfXTyfQfftG0s3kkeFa45XwJi0fI0t965d-lV9hy3Bp86bWdiRgQjJMFwqoPZzvC1Puek_bg_vu8Hy90bDTysgtbAXLReE5kLRMopjTkjh5Fgl-uWE2PDhyzuKEA3B_xFsrORw9XqbKdNdrSvBBD0BLP1ezotbfBBmrZCZNeWb86lbUY2kjNCncvJkPSIpv7pA',
    tags: ['Bản dập', 'Sa thạch', 'Văn bia cổ', 'Giới hạn'],
    hotline: '(+84) 259 388 9988',
    zalo: '0912 345 678',
  },
];
