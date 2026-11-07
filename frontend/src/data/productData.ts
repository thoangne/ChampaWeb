export interface CraftProduct {
  id: string;
  name: string;
  slug: string;
  category: 'gom-bau-truc' | 'tho-cam-my-nghiep' | 'nhac-cu-huu-duc' | 'dieu-khac-my-nghe';
  categoryLabel: string;
  village: string;
  artisanId: number;
  artisanName: string;
  artisanTitle: string;
  artisanAvatar: string;
  priceEstimate: string;
  rawPrice?: number;
  materials: string[];
  dimensions: string;
  craftingTime: string;
  badge: string;
  badgeType: 'exclusive' | 'traditional' | 'unesco' | 'ocop';
  summary: string;
  description: string;
  culturalMeaning: string;
  craftingSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  images: string[];
  isFeatured: boolean;
  preservationStatus: string;
}

export const CRAFT_CATEGORIES = [
  { id: 'all', label: 'Tất cả tác phẩm', count: 8 },
  { id: 'gom-bau-truc', label: 'Gốm Bàu Trúc', count: 3, village: 'Làng gốm Bàu Trúc' },
  { id: 'tho-cam-my-nghiep', label: 'Thổ cẩm Mỹ Nghiệp', count: 2, village: 'Làng dệt Mỹ Nghiệp' },
  { id: 'nhac-cu-huu-duc', label: 'Nhạc khí Hữu Đức', count: 2, village: 'Làng Chăm Hữu Đức' },
  { id: 'dieu-khac-my-nghe', label: 'Điêu khắc Mỹ nghệ', count: 1, village: 'Xưởng nghệ thuật Chăm' },
] as const;

export const CRAFT_PRODUCTS: CraftProduct[] = [
  {
    id: 'sp-01',
    name: 'Bình Gốm Ngấn Khói Bàu Trúc Cổ Truyền',
    slug: 'binh-gom-ngan-khoi-bau-truc',
    category: 'gom-bau-truc',
    categoryLabel: 'Gốm cổ Bàu Trúc',
    village: 'Làng gốm Bàu Trúc',
    artisanId: 1,
    artisanName: 'Muk Đàng Thị Phan',
    artisanTitle: 'Nghệ nhân Ưu tú Bàu Trúc',
    artisanAvatar: '/images/dana-life/IMG_9911.JPG',
    priceEstimate: '1.850.000 ₫',
    rawPrice: 1850000,
    materials: ['Đất sét trầm tích sông Quao', 'Cát mịn mỏ đất hạt thô', 'Khói rơm & vỏ trấu lộ thiên'],
    dimensions: 'Cao 45cm x Đường kính 28cm (Trọng lượng ~4.2kg)',
    craftingTime: '18 - 22 ngày tạo tác',
    badge: 'Độc bản UNESCO',
    badgeType: 'unesco',
    summary: 'Bình gốm vuốt tay thủ công 100% không bàn xoay, vệt khói loang độc bản hình thành tự nhiên trong hỏa lò lộ thiên rực rỡ.',
    description:
      'Tác phẩm tiêu biểu của Nghệ nhân Ưu tú Muk Đàng Thị Phan. Sử dụng kỹ thuật đi giật lùi truyền thống quay quanh khối đất nguyên bản. Từng đường vuốt ngón tay miết từ đáy lên miệng bình tạo nên độ cong thanh thoát. Sau khi nung lộ thiên bằng củi và vỏ trấu, bình được rưới nước thảo mộc vỏ quả trâm bầu bí truyền để tạo ngấn khói đen - đỏ đặc trưng không bình nào trùng lặp.',
    culturalMeaning:
      'Hình dáng bình tượng trưng cho bầu vú Mẹ Xứ Sở Po Ino Nagar – cội nguồn sinh dưỡng của muôn loài. Đặt trong không gian sống mang lại năng lượng tĩnh tại, mộc mạc và chở che.',
    craftingSteps: [
      { step: 1, title: 'Khai thác & Ủ đất sông Quao', description: 'Đất sét dẻo mịn lấy sâu dưới lòng sông Quao, phơi nỏ và đập nhỏ rồi ủ nước 7 ngày.' },
      { step: 2, title: 'Đi giật lùi nắn vuốt tạo hình', description: 'Nghệ nhân dùng chân và thân mình xoay giật lùi quanh trụ đất, miết vải ướt tạo dáng.' },
      { step: 3, title: 'Khắc hoa văn sóng nước Makara', description: 'Dùng que tre vót nhọn hoặc vỏ sò chải nhẹ các đường răng cưa kỷ hà truyền thống.' },
      { step: 4, title: 'Nung lộ thiên & Phun khói trấu', description: 'Đốt củi khô và rơm rạ ngoài trời ở nhiệt độ 700-900°C, vùi trấu tạo vệt khói huyền bí.' },
    ],
    images: [
      '/images/dana-life/IMG_9911.JPG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
      '/images/dana-life/IMG_9898.JPG',
    ],
    isFeatured: true,
    preservationStatus: 'Di sản phi vật thể đại diện nhân loại (UNESCO)',
  },
  {
    id: 'sp-02',
    name: 'Khăn Choàng Thổ Cẩm Hoa Văn Chim Công Katê',
    slug: 'khan-choang-tho-cam-chim-cong-kate',
    category: 'tho-cam-my-nghiep',
    categoryLabel: 'Thổ cẩm Mỹ Nghiệp',
    village: 'Làng dệt Mỹ Nghiệp',
    artisanId: 2,
    artisanName: 'Nghệ nhân Phú Thị Mỡ',
    artisanTitle: 'Nghệ nhân Thổ cẩm Mỹ Nghiệp',
    artisanAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA',
    priceEstimate: '1.250.000 ₫',
    rawPrice: 1250000,
    materials: ['Sợi bông tự nhiên (Khlok)', 'Thuốc nhuộm chàm & vỏ cây rưng mặn', 'Sợi chỉ kim tuyến cổ truyền'],
    dimensions: 'Dài 190cm x Rộng 65cm (Tua rua 8cm)',
    craftingTime: '12 - 15 ngày dệt khung',
    badge: 'Đồ án Phục chế XVII',
    badgeType: 'exclusive',
    summary: 'Dệt luồn con thoi cổ trên khung dệt nằm truyền thống, phối đồ án hoa văn Chim Công (Bimong) cung đình Champa quý phái.',
    description:
      'Được dệt bằng đôi bàn tay tài hoa của nghệ nhân Phú Thị Mỡ. Mẫu hoa văn chim công (Bimong) kết hợp đồ án quả trám và hoa văn búp sen (Kala) từng được hoàng tộc Champa sử dụng trong các đại lễ tế thần. Màu xanh đen ánh kim được nhuộm thủ công 10 lần từ cây chàm đồi cát Ninh Thuận, giữ màu vĩnh cửu theo thời gian.',
    culturalMeaning:
      'Chim Công trong tâm thức Chăm là biểu trưng cho vẻ đẹp tinh khiết, đức hạnh của người phụ nữ và sự hanh thông, trường thọ cho người mang theo.',
    craftingSteps: [
      { step: 1, title: 'Bật bông & Kéo sợi thủ công', description: 'Trồng bông vải tự nhiên, dùng cung bật tơi sợi và xa quay kéo thành từng búp chỉ.' },
      { step: 2, title: 'Nhuộm màu thảo mộc thiên nhiên', description: 'Ngâm sợi trong hũ chàm lên men và nước rễ cây mộc rừng để đạt sắc độ trầm cổ.' },
      { step: 3, title: 'Mắc sợi lên khung dệt cổ', description: 'Căng hàng nghìn sợi dọc theo chuẩn mực đồ án hoa văn hoàng gia thế kỷ XVII.' },
      { step: 4, title: 'Dệt luồn cài hoa văn nổi', description: 'Dùng thanh tre luồn từng sợi chỉ màu kim tuyến, dập thoi đều tay tạo họa tiết nổi hai mặt.' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA',
      '/images/dana-life/IMG_3237.JPG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
    ],
    isFeatured: true,
    preservationStatus: 'Bảo tồn làng nghề dệt thủ công truyền thống Chăm',
  },
  {
    id: 'sp-03',
    name: 'Kèn Saranai Gỗ Mun Cổ Truyền',
    slug: 'ken-saranai-go-mun-co-truyen',
    category: 'nhac-cu-huu-duc',
    categoryLabel: 'Nhạc khí Hữu Đức',
    village: 'Làng Chăm Hữu Đức',
    artisanId: 3,
    artisanName: 'Nghệ nhân Đàng Xem',
    artisanTitle: 'Bậc Thầy Chế Tác Nhạc Cụ Chăm',
    artisanAvatar: '/images/dana-life/IMG_9901.JPG',
    priceEstimate: '2.400.000 ₫',
    rawPrice: 2400000,
    materials: ['Gỗ mun rừng khô 10 năm', 'Dăm lá buông thiêng', 'Chuông đồng thao đúc thủ công'],
    dimensions: 'Dài 42cm, Loa kèn đường kính 11cm',
    craftingTime: '25 ngày gọt đẽo & căn âm',
    badge: 'Nhạc khí thiêng Katê',
    badgeType: 'traditional',
    summary: 'Nhạc khí linh hồn trong mọi nghi lễ tôn giáo và ngày hội Champa, chế tác chuẩn cung bậc ngũ âm thiêng liêng.',
    description:
      'Kèn Saranai là khí cụ lĩnh xướng cao quý nhất trong dàn nhạc nghi lễ Chăm, gồm 3 phần cấu thành tượng trưng cho Trời, Đất và Con người. Thân kèn được đẽo từ gỗ mun nguyên khối, khoét 7 lỗ âm phía trên và 1 lỗ bấm phía dưới. Dăm kèn kẹp bằng lá buông hái vào đầu mùa khô, cho âm vực vang vọng như tiếng gió đại ngàn Panduranga.',
    culturalMeaning:
      'Âm thanh kèn Saranai nối liền cõi trần với cõi thần linh tiền nhân, đánh thức lòng tự hào và xua tan điềm dữ trong các nghi thức mở tháp đầu năm.',
    craftingSteps: [
      { step: 1, title: 'Chọn phôi gỗ mun già', description: 'Gỗ mun sừng phơi râm 10 năm không mối mọt, thớ gỗ đanh chắc giữ độ chuẩn xác âm thanh.' },
      { step: 2, title: 'Tiện thân & Khoét 8 lỗ định âm', description: 'Định vị chính xác từng cung bậc theo thang âm nghi lễ Katê cổ truyền.' },
      { step: 3, title: 'Chế tác dăm lá buông thiêng', description: 'Lá buông cắt mỏng, ép nhiệt giữ dăm khép khít cho hơi thổi sắc sảo và ngân vang.' },
      { step: 4, title: 'Căn chỉnh âm điệu cùng trống Ginăng', description: 'Thử kèn trực tiếp trong không gian đền tháp để âm hòa quyện hoàn hảo.' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzljZH7__gmKglHYhA2NZtHh2wp1_j6eufhB24fW5dLEg6Q3iVPhcklfXTyfQfftG0s3kkeFa45XwJi0fI0t965d-lV9hy3Bp86bWdiRgQjJMFwqoPZzvC1Puek_bg_vu8Hy90bDTysgtbAXLReE5kLRMopjTkjh5Fgl-uWE2PDhyzuKEA3B_xFsrORw9XqbKdNdrSvBBD0BLP1ezotbfBBmrZCZNeWb86lbUY2kjNCncvJkPSIpv7pA',
      '/images/dana-life/IMG_9901.JPG',
    ],
    isFeatured: true,
    preservationStatus: 'Di sản diễn xướng âm nhạc cổ truyền Panduranga',
  },
  {
    id: 'sp-04',
    name: 'Phù Điêu Vũ Nữ Apsara Gốm Nung Mỹ Nghệ',
    slug: 'phu-dieu-vu-nu-apsara-gom-nung',
    category: 'dieu-khac-my-nghe',
    categoryLabel: 'Điêu khắc Mỹ nghệ',
    village: 'Làng gốm Bàu Trúc',
    artisanId: 4,
    artisanName: 'Nghệ nhân Đàng Năng Xoay',
    artisanTitle: 'Nghệ nhân Điêu Khắc Gốm Phù Điêu',
    artisanAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
    priceEstimate: '3.600.000 ₫',
    rawPrice: 3600000,
    materials: ['Đất sét sông Quao nung lộ thiên', 'Màu khoáng tự nhiên', 'Khung gỗ muồng đen'],
    dimensions: 'Kích thước 60cm x 40cm x Dày 6cm',
    craftingTime: '30 ngày đắp nổi & nung củi',
    badge: 'Mỹ thuật Điêu khắc Chăm',
    badgeType: 'exclusive',
    summary: 'Tái hiện điệu múa thiêng của vũ nữ thiên giới Champa từ phong cách tháp Po Klong Garai thế kỷ XIII.',
    description:
      'Tác phẩm kết hợp giữa kỹ thuật làm gốm Bàu Trúc và nghệ thuật chạm khắc phù điêu cổ. Đắp nổi tay từng chi tiết vương miện búp sen, vòng tay hạt ngọc và dáng uốn lượn Tribhanga tam khúc huyền diệu. Sắc nung đỏ ấm ánh khói loang mang lại vẻ đẹp cổ kính như một phiến đá đền tháp ngàn năm tuổi.',
    culturalMeaning:
      'Vũ nữ Apsara là biểu tượng của niềm hoan ca, sự may mắn, mang đến điềm lành và thanh lọc không khí tĩnh lặng cho gia thất.',
    craftingSteps: [
      { step: 1, title: 'Chuẩn bị phôi phiến đất phẳng', description: 'Đầm nén đất sét sông Quao đạt mật độ kết dính cao chống nứt vỡ khi sấy.' },
      { step: 2, title: 'Điêu khắc đắp nổi hình thể Apsara', description: 'Tạc thủ công dáng múa cổ điển và chạm khắc trang sức miện hoa sen tinh vi.' },
      { step: 3, title: 'Ủ khô tự nhiên 14 ngày trong bóng râm', description: 'Tránh nắng gắt để phiến đất co ngót đều đặn, không cong vênh.' },
      { step: 4, title: 'Nung lộ thiên đốt trấu tạo ngấn khói cổ', description: 'Tạo lớp vỏ oxit sắt và carbon tự nhiên mang màu trầm mặc của di tích.' },
    ],
    images: [
      '/images/dana-life/IMG_9898.JPG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwp2O4wPSnQhuVaJC7FhDwhbAV99dJiNseJ8THl9kE3ZY-0-aWLkok7zJ2WFFTllPxI8xy6UnD4bMHSYOHgQU5jLBoC0NaOBbfExmtQi-oGTw0h6220cmB-zNjl2Auo4xUsIq4FaUBuWrFmt7pP8me2uC0ICy0quUbgeXQoTgwFNk2AyMdZY6qHNz4BvpEXd_cTS1l7HXgiVYib2QZVdvIbOYTgbdANF3PE9u-YLVSos0Gm8q7U22f8Q',
    ],
    isFeatured: true,
    preservationStatus: 'Phục dựng mỹ thuật tượng Chăm thế kỷ XIII',
  },
  {
    id: 'sp-05',
    name: 'Trống Paranưng Bịt Da Dê Cổ Truyền',
    slug: 'trong-paranung-bit-da-de',
    category: 'nhac-cu-huu-duc',
    categoryLabel: 'Nhạc khí Hữu Đức',
    village: 'Làng Chăm Hữu Đức',
    artisanId: 3,
    artisanName: 'Nghệ nhân Đàng Xem',
    artisanTitle: 'Bậc Thầy Chế Tác Nhạc Cụ Chăm',
    artisanAvatar: '/images/dana-life/IMG_9901.JPG',
    priceEstimate: '3.200.000 ₫',
    rawPrice: 3200000,
    materials: ['Thân gỗ cà chít nguyên khối', 'Mặt da dê đực thuộc tay', 'Dây chằng mây dẻo'],
    dimensions: 'Đường kính mặt 45cm x Chiều cao tang 12cm',
    craftingTime: '20 ngày thuộc da & kéo căng',
    badge: 'Nhạc khí nghi lễ',
    badgeType: 'traditional',
    summary: 'Trống một mặt vỗ tay độc đáo, biểu trưng cho ngực mẹ và nhịp tim cộng đồng trong các vũ điệu thiêng.',
    description:
      'Được chế tác hoàn toàn thủ công bởi Nghệ nhân Đàng Xem. Tang trống làm từ gỗ cà chít già khoét rỗng, mặt bịt bằng da dê đực phơi khô tự nhiên. Người nghệ nhân dùng các nêm gỗ nhỏ xung quanh để điều chỉnh độ căng và âm độ trầm bổng khi dùng lòng bàn tay và các ngón tay gõ vỗ.',
    culturalMeaning:
      'Paranưng đại diện cho mặt đất và lòng mẹ nhân hậu, hòa tấu cùng Ginăng (đại diện cho cha) và Saranai (tiếng của thần linh) tạo thành bộ ba âm thanh tối thượng của lễ hội Chăm.',
    craftingSteps: [
      { step: 1, title: 'Tiện tang trống gỗ cà chít', description: 'Gỗ cà chít chắc nặng, đục rỗng lòng tang đều đặn tạo vòm cộng hưởng tròn tiếng.' },
      { step: 2, title: 'Thuộc da dê bằng tro bếp', description: 'Tẩy lông và thuộc mềm da dê bằng nước tro tự nhiên, không dùng hóa chất công nghiệp.' },
      { step: 3, title: 'Đan mây chằng viền trống', description: 'Kéo căng mặt da bằng hệ thống dây mây rừng dẻo dai bện đôi.' },
      { step: 4, title: 'Nêm căn âm ngũ cung Champa', description: 'Dùng chốt gỗ gõ nhẹ xung quanh tang trống để đạt âm sắc trầm ấm đặc thù.' },
    ],
    images: [
      '/images/dana-life/IMG_9901.JPG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzljZH7__gmKglHYhA2NZtHh2wp1_j6eufhB24fW5dLEg6Q3iVPhcklfXTyfQfftG0s3kkeFa45XwJi0fI0t965d-lV9hy3Bp86bWdiRgQjJMFwqoPZzvC1Puek_bg_vu8Hy90bDTysgtbAXLReE5kLRMopjTkjh5Fgl-uWE2PDhyzuKEA3B_xFsrORw9XqbKdNdrSvBBD0BLP1ezotbfBBmrZCZNeWb86lbUY2kjNCncvJkPSIpv7pA',
    ],
    isFeatured: false,
    preservationStatus: 'Nhạc khí nghi lễ Katê truyền thống',
  },
  {
    id: 'sp-06',
    name: 'Tấm Vải Dệt Katê Hoa Văn Đền Tháp Cổ',
    slug: 'tam-vai-det-kate-hoa-van-den-thap',
    category: 'tho-cam-my-nghiep',
    categoryLabel: 'Thổ cẩm Mỹ Nghiệp',
    village: 'Làng dệt Mỹ Nghiệp',
    artisanId: 2,
    artisanName: 'Nghệ nhân Phú Thị Mỡ',
    artisanTitle: 'Nghệ nhân Thổ cẩm Mỹ Nghiệp',
    artisanAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA',
    priceEstimate: '1.650.000 ₫',
    rawPrice: 1650000,
    materials: ['Chỉ tơ tằm phối sợi bông nhuộm củ nâu', 'Sợi vàng ánh đồng cổ', 'Kỹ thuật dệt nổi 2 mặt'],
    dimensions: 'Dài 220cm x Rộng 80cm',
    craftingTime: '18 ngày tạo tác',
    badge: 'OCOP 4 Sao Tỉnh Ninh Thuận',
    badgeType: 'ocop',
    summary: 'Mẫu vải truyền thống dùng trong lễ dâng y phục vua thần, họa tiết tháp Kalan và vân mây thiêng.',
    description:
      'Tấm vải Katê quý phái này được dệt theo thể thức hoàng cung xưa. Các chi tiết cửa giả tháp Chăm và đài hoa sen được nghệ nhân Phú Thị Mỡ cẩn thận luồn từng sợi chỉ kim sắc màu đỏ son và vàng đồng trên nền đen chàm, tạo cảm giác uy nghiêm và ấm cúng.',
    culturalMeaning:
      'Tấm vải tượng trưng cho chiếc áo giáp tâm linh, mang lại bình an và sự thuận hòa cho người sở hữu khi mặc hoặc trang trí phòng thờ, phòng khách.',
    craftingSteps: [
      { step: 1, title: 'Kỹ thuật nhuộm vỏ củ nâu & chàm', description: 'Nhuộm nhiều đợt để đạt sắc độ son tháp Chăm trầm ấm đặc trưng.' },
      { step: 2, title: 'Thiết kế hoa văn mẫu trên que giát', description: 'Đếm từng sợi chỉ định vị đồ án tháp Kalan trên khung dệt đứng.' },
      { step: 3, title: 'Dệt luồn con thoi đôi tay', description: 'Đồng thời luồn hai màu chỉ đan xen tạo độ nổi 3D cho bề mặt vải.' },
      { step: 4, title: 'Hấp nhiệt xông thảo mộc', description: 'Xông lá thơm tự nhiên giữ nếp dệt bền chặt và hương thơm thảo mộc lâu năm.' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA',
      '/images/dana-life/IMG_3237.JPG',
    ],
    isFeatured: false,
    preservationStatus: 'Sản phẩm OCOP đặc sắc tiêu biểu Ninh Thuận',
  },
  {
    id: 'sp-07',
    name: 'Lu Đất Nung Lộ Thiên Bàu Trúc Thô Mộc',
    slug: 'lu-dat-nung-lo-thien-bau-truc',
    category: 'gom-bau-truc',
    categoryLabel: 'Gốm cổ Bàu Trúc',
    village: 'Làng gốm Bàu Trúc',
    artisanId: 1,
    artisanName: 'Muk Đàng Thị Phan',
    artisanTitle: 'Nghệ nhân Ưu tú Bàu Trúc',
    artisanAvatar: '/images/dana-life/IMG_9911.JPG',
    priceEstimate: '950.000 ₫',
    rawPrice: 950000,
    materials: ['Đất sét sông Quao pha cát hạt to', 'Nước thảo mộc vỏ điều nung củi'],
    dimensions: 'Cao 38cm x Đường kính bụng 32cm',
    craftingTime: '14 ngày tạo tác',
    badge: 'Gốm mẹ Bàu Trúc',
    badgeType: 'traditional',
    summary: 'Vật phẩm giữ nước mát lạnh tự nhiên quanh năm nhờ cấu trúc xốp vi mô thở của gốm Chăm không tráng men.',
    description:
      'Chiếc lu đất thô mộc mang trọn vẹn tinh thần sống hòa cùng tự nhiên của người Chăm. Không cần bất cứ lớp men hóa học nào, độ xốp tự nhiên của đất sét sông Quao nung lộ thiên cho phép nước bên trong bay hơi vi lượng qua mao dẫn, giữ cho nước luôn mát dịu như nước đầu nguồn giữa cái nắng gay gắt Ninh Thuận.',
    culturalMeaning:
      'Chiếc lu tượng trưng cho lòng mẹ bao dung tích trữ nguồn sống, là hình ảnh thân thương trong chái bếp mỗi gia đình Chăm ngàn năm qua.',
    craftingSteps: [
      { step: 1, title: 'Nhào đất pha cát hạt thô', description: 'Cát hạt thô tạo độ xốp vi mô đặc biệt giúp gốm chịu nhiệt và giữ nước mát.' },
      { step: 2, title: 'Vuốt vành lu bằng khăn ướt', description: 'Muk Phan dùng bàn tay vuốt tạo hình miệng loe cong hoàn hảo không dùng máy xoay.' },
      { step: 3, title: 'Đánh bóng mặt gốm bằng hột trái trâm', description: 'Chà miết vỏ hột trâm tạo độ bóng láng mịn tự nhiên cho thân lu.' },
      { step: 4, title: 'Nung củi gộc ngoài trời', description: 'Chất đống nung 6 tiếng ngoài trời rơm rạ, để khói và lửa vẽ nên hoa văn tự nhiên.' },
    ],
    images: [
      '/images/dana-life/IMG_9911.JPG',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
    ],
    isFeatured: false,
    preservationStatus: 'Di sản phi vật thể nhân loại UNESCO',
  },
  {
    id: 'sp-08',
    name: 'Bình Kala Cổ Nghi Lễ Phục Chức',
    slug: 'binh-kala-co-nghi-le-phuc-chuc',
    category: 'gom-bau-truc',
    categoryLabel: 'Gốm cổ Bàu Trúc',
    village: 'Làng gốm Bàu Trúc',
    artisanId: 4,
    artisanName: 'Nghệ nhân Đàng Năng Xoay',
    artisanTitle: 'Nghệ nhân Điêu Khắc Gốm Phù Điêu',
    artisanAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
    priceEstimate: '2.800.000 ₫',
    rawPrice: 2800000,
    materials: ['Đất sét mịn sông Quao', 'Nước vỏ hạt điều nhuộm khói'],
    dimensions: 'Cao 52cm x Rộng 26cm',
    craftingTime: '24 ngày tạo tác',
    badge: 'Phục dựng Cổ vật',
    badgeType: 'exclusive',
    summary: 'Tái hiện nguyên bản bình thiêng Kala thế kỷ XIV dùng đựng nước thơm tẩy trần trong lễ phong chức Po Gru.',
    description:
      'Chiếc bình Kala linh thiêng được phục chế công phu từ các mảnh vỡ khảo cổ tại tháp Po Rome. Cổ bình thon cao tượng trưng cho cổ thiên nga Hamsa, miệng bình xòe hình cánh sen đón ánh thái dương. Vết khói loang chuyển tiếp từ hổ phách sang đen tuyền tạo vẻ huyền bí trang trọng.',
    culturalMeaning:
      'Bình Kala tượng trưng cho sự thanh tẩy, đón nhận trí tuệ và sự che chở của các vị thần linh tối cao xứ Panduranga.',
    craftingSteps: [
      { step: 1, title: 'Đối chiếu tư liệu bảo tàng', description: 'Đo đạc tỷ lệ chuẩn xác từ hiện vật gốc thế kỷ XIV tại Bảo tàng văn hóa Chăm.' },
      { step: 2, title: 'Điêu khắc cổ bình thiên nga', description: 'Tạo hình cổ cao thanh thoát chịu lực hoàn toàn bằng bàn tay vuốt đất dẻo.' },
      { step: 3, title: 'Khắc hoa văn sóng Makara', description: 'Đi nét răng cưa sóng nước biểu thị nguồn nước thiêng từ thượng giới.' },
      { step: 4, title: 'Nung rơm vỏ điều bí truyền', description: 'Rưới nước vỏ điều lúc gốm còn đỏ rực trong hố tro để tạo màu sắc cổ kính.' },
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg',
      '/images/dana-life/IMG_9911.JPG',
    ],
    isFeatured: true,
    preservationStatus: 'Phục dựng theo nguyên mẫu di sản thế kỷ XIV',
  },
];

