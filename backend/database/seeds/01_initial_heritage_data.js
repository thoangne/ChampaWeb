/**
 * Seed data: 01_initial_heritage_data.js
 * Cung cấp dữ liệu ban đầu cho môi trường phát triển cục bộ (Local PostgreSQL)
 * Bao gồm: Quản trị viên, Nghệ nhân, Danh mục, Bài viết khảo cứu, Tác phẩm thủ công & Tour trải nghiệm
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // 1. Hồ sơ người dùng mẫu
  const adminId = "00000000-0000-0000-0000-000000000001";
  const demoUserId = "00000000-0000-0000-0000-000000000002";

  // Tạo tài khoản auth.users mẫu nếu có
  await knex.raw(`
    INSERT INTO auth.users (id, email)
    VALUES 
      ('${adminId}', 'admin@champaweb.vn'),
      ('${demoUserId}', 'demo@champaweb.vn')
    ON CONFLICT (id) DO NOTHING;
  `).catch(() => {});

  await knex("profiles")
    .insert([
      {
        id: adminId,
        email: "admin@champaweb.vn",
        full_name: "Quản Trị Viên Di Sản Champa",
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        role: "admin",
        provider: "email",
        phone_number: "+84901234567",
        bio: "Quản trị viên nền tảng du lịch cộng đồng Dana Panduranga.",
      },
      {
        id: demoUserId,
        email: "demo@champaweb.vn",
        full_name: "Nguyễn Chăm Demo",
        avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        role: "customer",
        provider: "email",
        phone_number: "+84912345678",
        bio: "Khách du lịch yêu mến văn hóa di sản.",
      },
    ])
    .onConflict("id")
    .merge();

  // 2. Danh mục bài viết khảo cứu
  await knex("blog_categories")
    .insert([
      {
        id: "van-hoa",
        label: "Văn Hóa & Phong Tục",
        description: "Các bài viết về lễ hội, tín ngưỡng và phong tục tập quán Champa.",
        main_category: "van-hoa",
        display_order: 1,
      },
      {
        id: "lich-su",
        label: "Lịch Sử & Kiến Trúc",
        description: "Khảo cứu lịch sử vương quốc Champa và kỹ thuật kiến trúc đền tháp.",
        main_category: "lich-su",
        display_order: 2,
      },
      {
        id: "tin-tuc",
        label: "Tin Tức Di Sản",
        description: "Thông tin bảo tồn di sản và hoạt động cộng đồng Dana.",
        main_category: "tin-tuc",
        display_order: 3,
      },
    ])
    .onConflict("id")
    .merge();

  // 3. Bài viết khảo cứu mẫu
  await knex("blog_articles")
    .insert([
      {
        slug: "ky-thuat-nung-gom-lo-thien-bau-truc",
        title: "Kỹ thuật nung gốm lộ thiên Bàu Trúc: Ngọn lửa 800 năm không tắt",
        main_category: "van-hoa",
        category_id: "van-hoa",
        badge: "UNESCO Vinh Danh",
        badge_class: "bg-amber-100 text-amber-800",
        field_location: "Làng gốm Bàu Trúc, Ninh Phước, Ninh Thuận",
        read_time: "6 phút đọc",
        author_id: adminId,
        author_name: "Ban Nghiên Cứu Di Sản Panduranga",
        author_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        summary: "Khám phá bí quyết tạo nên lớp vỏ ngấn khói đen bóng đặc trưng của gốm Chăm cổ truyền không dùng bàn xoay.",
        content: "Làng gốm Bàu Trúc (Paley Hamu Craok) tọa lạc tại thị trấn Phước Dân, huyện Ninh Phước, tỉnh Ninh Thuận, được xem là một trong những làng gốm cổ xưa nhất Đông Nam Á còn bảo lưu phương thức chế tác nguyên bản từ thời kỳ vương quốc Panduranga. Điểm độc nhất vô nhị của gốm Bàu Trúc là nghệ nhân hoàn toàn không dùng bàn xoay.",
        featured_image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
        gallery_images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80"],
        is_featured: true,
        is_published: true,
        views_count: 1420,
        likes_count: 85,
      },
      {
        slug: "bi-an-gach-nung-khong-vua-po-klong-garai",
        title: "Bí ẩn gạch nung không vữa tại Kalan Po Klong Garai",
        main_category: "lich-su",
        category_id: "lich-su",
        badge: "Di tích Quốc gia Đặc biệt",
        badge_class: "bg-red-100 text-red-800",
        field_location: "Đồi Trầu, Đô Vinh, Phan Rang - Tháp Chàm",
        read_time: "8 phút đọc",
        author_id: adminId,
        author_name: "TS. Sử học Trương Văn Chăm",
        author_avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        summary: "Giải mã chất kết dính thảo mộc tự nhiên và kỹ thuật mài chập tạo nên cụm tháp hùng vĩ trên đồi Trầu qua hơn 8 thế kỷ.",
        content: "Tháp Po Klong Garai được xây dựng vào cuối thế kỷ XIII đầu thế kỷ XIV dưới triều vua Chế Mân (Jaya Simhavarman III) để tôn vinh vị vua huyền thoại Po Klong Garai. Các viên gạch Chăm có trọng lượng nhẹ, xốp nhưng chịu lực và chống thấm cực tốt.",
        featured_image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
        gallery_images: ["https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80"],
        is_featured: true,
        is_published: true,
        views_count: 2350,
        likes_count: 120,
      },
    ])
    .onConflict("slug")
    .merge();

  // 4. Nghệ nhân tiêu biểu
  await knex("artisans")
    .insert([
      {
        id: 1,
        name: "Đàng Thị Phan",
        slug: "dang-thi-phan",
        title: "Nghệ nhân Ưu tú Gốm Bàu Trúc",
        experience: "Hơn 55 năm gắn bó",
        years_of_dedication: 55,
        village: "Làng gốm Bàu Trúc",
        specialty: "Gốm ngấn khói thủ công",
        workshop_location: "Khu phố 7, thị trấn Phước Dân, Ninh Phước",
        quote: "Đất có linh hồn, người thợ gốm chỉ là người đánh thức vẻ đẹp tiềm ẩn của đất Mẹ.",
        bio: "Bà Đàng Thị Phan là một trong những cây đại thụ của làng gốm Bàu Trúc, từng đại diện Việt Nam trình diễn nghệ thuật gốm Chăm tại nhiều diễn đàn văn hóa quốc tế.",
        schedule: "8:00 - 17:00 hàng ngày",
        avatar_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
        hands_image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
        is_active: true,
      },
      {
        id: 2,
        name: "Thuận Thị Trụ",
        slug: "thuan-thi-tru",
        title: "Nghệ nhân Thổ cẩm Mỹ Nghiệp",
        experience: "40 năm gìn giữ khung dệt cổ",
        years_of_dedication: 40,
        village: "Làng dệt Mỹ Nghiệp",
        specialty: "Thổ cẩm hoa văn Atâu & Makara",
        workshop_location: "Thị trấn Phước Dân, Ninh Phước, Ninh Thuận",
        quote: "Từng sợi chỉ màu là nhịp đập của trái tim người phụ nữ Chăm trao gửi cho thế hệ mai sau.",
        bio: "Nghệ nhân Thuận Thị Trụ đã phục dựng thành công hơn 20 mẫu hoa văn thổ cẩm cổ thời Panduranga đang có nguy cơ thất truyền.",
        schedule: "8:30 - 16:30 hàng ngày",
        avatar_image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        hands_image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80",
        is_active: true,
      },
    ])
    .onConflict("id")
    .merge();

  // Reset auto-increment sequence for artisans
  await knex.raw("SELECT setval(pg_get_serial_sequence('artisans', 'id'), coalesce(max(id), 1)) FROM artisans;").catch(() => {});

  // 5. Danh mục sản phẩm thủ công
  await knex("craft_categories")
    .insert([
      {
        id: "gom-bau-truc",
        label: "Gốm Bàu Trúc",
        village: "Bàu Trúc",
        description: "Gốm đất nung lộ thiên truyền thống độc bản.",
        display_order: 1,
      },
      {
        id: "tho-cam-my-nghiep",
        label: "Thổ Cẩm Mỹ Nghiệp",
        village: "Mỹ Nghiệp",
        description: "Vải dệt thủ công hoa văn di sản Champa.",
        display_order: 2,
      },
    ])
    .onConflict("id")
    .merge();

  // 6. Sản phẩm thủ công
  await knex("craft_products")
    .insert([
      {
        id: "prod-gom-001",
        name: "Bình Gốm Phù Điêu Apsara Độc Bản",
        slug: "binh-gom-phu-dieu-apsara-doc-ban",
        category_id: "gom-bau-truc",
        village: "Bàu Trúc",
        artisan_id: 1,
        price_estimate: "1.250.000 ₫",
        raw_price: 1250000,
        materials: ["Đất sét sông Quao", "Nước vỏ cây thị", "Cát mịn"],
        dimensions: "Cao 35cm, Đường kính 22cm",
        crafting_time: "5 ngày chế tác & nung lộ thiên",
        badge: "Độc Bản",
        summary: "Bình gốm tạo tác hoàn toàn bằng tay không bàn xoay, họa tiết nữ thần Apsara múa thiêng.",
        cultural_meaning: "Nữ thần Apsara biểu trưng cho sự hòa bình, thịnh vượng và vẻ đẹp thanh cao trong văn hóa Champa.",
        images: ["https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=800&q=80"],
        is_featured: true,
        stock_quantity: 3,
        views_count: 450,
      },
      {
        id: "prod-tc-002",
        name: "Khăn Choàng Thổ Cẩm Hoa Văn Atâu Cổ",
        slug: "khan-choang-tho-cam-hoa-van-atau-co",
        category_id: "tho-cam-my-nghiep",
        village: "Mỹ Nghiệp",
        artisan_id: 2,
        price_estimate: "680.000 ₫",
        raw_price: 680000,
        materials: ["Sợi bông tự nhiên", "Màu nhuộm vỏ cây rừng"],
        dimensions: "Dài 180cm, Rộng 50cm",
        crafting_time: "3 ngày dệt tay",
        badge: "Thủ Công Tinh Xảo",
        summary: "Khăn choàng dệt thủ công với hoa văn cổ Atâu mang ý nghĩa hộ mệnh và may mắn.",
        cultural_meaning: "Họa tiết Atâu là biểu tượng cổ xưa kết nối tâm thức con người với đất trời và tổ tiên.",
        images: ["https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80"],
        is_featured: true,
        stock_quantity: 10,
        views_count: 320,
      },
    ])
    .onConflict("id")
    .merge();

  // 7. Tour du lịch văn hóa
  await knex("tours")
    .insert([
      {
        id: 1,
        slug: "hanh-trinh-di-san-kalan-po-klong-garai",
        title: "Hành Trình Di Sản Đền Tháp Po Klong Garai",
        badge: "Tour Đặc Sắc",
        badge_class: "bg-red-100 text-red-800",
        duration: "1 Ngày (8:00 - 17:00)",
        location: "Đồi Trầu, Ninh Thuận",
        price: "750.000 ₫ / khách",
        adult_price: 750000,
        child_price: 375000,
        description: "Hành trình trải nghiệm kiến trúc huyền bí của ngọn tháp gạch thế kỷ XIII, thưởng thức hòa tấu kèn Saranai và ẩm thực truyền thống Chăm.",
        image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
        category: "heritage",
        rating: 4.9,
        reviews_count: 68,
        keeper_id: 1,
        is_active: true,
        views_count: 890,
      },
      {
        id: 2,
        slug: "trai-nghiem-lang-nghe-bau-truc-my-nghiep",
        title: "Trải Nghiệm Đất & Sợi: Làng Nghề Bàu Trúc - Mỹ Nghiệp",
        badge: "Tương Tác Cộng Đồng",
        badge_class: "bg-amber-100 text-amber-800",
        duration: "Nửa ngày (8:30 - 12:30)",
        location: "Huyện Ninh Phước, Ninh Thuận",
        price: "450.000 ₫ / khách",
        adult_price: 450000,
        child_price: 225000,
        description: "Tự tay nặn gốm không bàn xoay cùng nghệ nhân Ưu tú Đàng Thị Phan và trải nghiệm quay tơ dệt thổ cẩm tại Mỹ Nghiệp.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
        category: "craft",
        rating: 5.0,
        reviews_count: 94,
        keeper_id: 2,
        is_active: true,
        views_count: 1120,
      },
    ])
    .onConflict("id")
    .merge();

  await knex.raw("SELECT setval(pg_get_serial_sequence('tours', 'id'), coalesce(max(id), 1)) FROM tours;").catch(() => {});

  // 8. Đăng ký nhận tin mẫu
  await knex("newsletter_subscriptions")
    .insert([
      {
        email: "di.san.champa@champaweb.vn",
        is_active: true,
      },
    ])
    .onConflict("email")
    .merge();

  console.log("✅ [SEED] Đã nạp thành công bộ dữ liệu mẫu di sản Champa vào cơ sở dữ liệu!");
};

