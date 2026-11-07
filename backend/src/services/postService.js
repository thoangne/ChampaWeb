const supabase = require("../config/supabaseClient");
const { db } = require("../config/db");

// Danh sách bài viết ban đầu (seed data chuẩn hóa văn hóa & di sản Champa)
const INITIAL_POSTS = [
  {
    id: "post-seed-001",
    title: "Kỹ thuật nung gốm lộ thiên Bàu Trúc: Ngọn lửa 800 năm không tắt",
    slug: "ky-thuat-nung-gom-lo-thien-bau-truc",
    excerpt: "Khám phá bí quyết tạo nên lớp vỏ ngấn khói đen bóng đặc trưng của gốm Chăm cổ truyền không dùng bàn xoay.",
    content: `## 1. Di sản phi vật thể nhân loại được UNESCO vinh danh\n\nLàng gốm Bàu Trúc (Paley Hamu Craok) tọa lạc tại thị trấn Phước Dân, huyện Ninh Phước, tỉnh Ninh Thuận, được xem là một trong những làng gốm cổ xưa nhất Đông Nam Á còn bảo lưu phương thức chế tác nguyên bản từ thời kỳ vương quốc Panduranga.\n\nĐiểm độc nhất vô nhị của gốm Bàu Trúc là nghệ nhân hoàn toàn **không dùng bàn xoay**. Người phụ nữ Chăm "tay làm nguội, chân quay lùi", đi vòng quanh khối đất sét sông Quao để tạo dáng hình cho từng chiếc bình, lu, ấm.\n\n> "Gốm Bàu Trúc là sự giao hòa tuyệt mỹ giữa Đất - Nước - Lửa và bàn tay kiên định của người mẹ Chăm. Không có chiếc bình nào giống hệt chiếc bình nào."\n\n## 2. Kỹ nghệ nung lộ thiên bí truyền\n\nKhông dùng lò nung khép kín như gốm Bát Tràng hay gốm Chu Đậu, gốm Bàu Trúc được nung lộ thiên giữa bãi đất trống. Từng lớp sản phẩm được xếp xen kẽ với củi khô, rơm vàng và vỏ trấu. Ngọn lửa thiêng bùng cháy trong 4-6 giờ ở nhiệt độ 700 - 800°C.\n\nKhi gốm vừa chín đỏ rực, nghệ nhân dùng nước rưới chiết xuất từ vỏ cây thị (chưng cất thảo dược) để tạo nên màu ngấn khói vĩnh cửu.`,
    coverImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    mainCategory: "van-hoa",
    category: "craft",
    badge: "UNESCO Vinh Danh",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    fieldLocation: "Làng gốm Bàu Trúc, Ninh Phước, Ninh Thuận",
    readTime: "6 phút đọc",
    authorId: "usr-admin-001",
    authorName: "Ban Nghiên Cứu Di Sản Panduranga",
    status: "published",
    viewsCount: 1420,
    createdAt: new Date("2026-01-15T08:00:00Z").toISOString(),
    updatedAt: new Date("2026-01-15T08:00:00Z").toISOString(),
    publishedAt: new Date("2026-01-15T08:00:00Z").toISOString(),
  },
  {
    id: "post-seed-002",
    title: "Bí ẩn gạch nung không vữa tại Kalan Po Klong Garai",
    slug: "bi-an-gach-nung-khong-vua-po-klong-garai",
    excerpt: "Giải mã chất kết dính thảo mộc tự nhiên và kỹ thuật mài chập tạo nên cụm tháp hùng vĩ trên đồi Trầu qua hơn 8 thế kỷ.",
    content: `## 1. Đỉnh cao kiến trúc đền tháp Panduranga\n\nTháp Po Klong Garai được xây dựng vào cuối thế kỷ XIII đầu thế kỷ XIV dưới triều vua Chế Mân (Jaya Simhavarman III) để tôn vinh vị vua huyền thoại Po Klong Garai.\n\nCụm di tích gồm 3 ngôi tháp gạch đồ sộ: Tháp Chính (Kalan), Tháp Cổng (Gopura) và Tháp Lửa (Yom), ngự trị kiêu hãnh trên đỉnh đồi Trầu (Đô Vinh, Phan Rang).\n\n## 2. Kỹ thuật mài chập và nhựa dầu rái\n\nCác viên gạch Chăm có trọng lượng nhẹ, xốp nhưng chịu lực và chống thấm cực tốt. Người thợ xây dựng mài khít từng viên gạch với nhau đến mức không thể lách mũi dao mỏng vào khe tiếp giáp.\n\nCác nghiên cứu khảo cổ học hiện đại cho thấy chất liên kết được chế tạo từ nhựa thực vật (dầu rái chưng cất) trộn với bột gạch mịn, tạo nên sự liên kết vĩnh cửu bền vững qua hàng trăm năm bão gió.`,
    coverImage: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
    mainCategory: "lich-su",
    category: "kalan",
    badge: "Di tích Quốc gia Đặc biệt",
    badgeClass: "bg-secondary/10 text-secondary border-secondary/20",
    fieldLocation: "Đồi Trầu, Đô Vinh, Phan Rang - Tháp Chàm",
    readTime: "8 phút đọc",
    authorId: "usr-admin-001",
    authorName: "TS. Sử học Trương Văn Chăm",
    status: "published",
    viewsCount: 2350,
    createdAt: new Date("2026-02-10T09:30:00Z").toISOString(),
    updatedAt: new Date("2026-02-10T09:30:00Z").toISOString(),
    publishedAt: new Date("2026-02-10T09:30:00Z").toISOString(),
  },
  {
    id: "post-seed-003",
    title: "Tiếng kèn Saranai & Nhịp trống Baranưng trong Lễ hội Rija Nưgar",
    slug: "tieng-ken-saranai-va-nhip-trong-baranung",
    excerpt: "Hành trình giải mã tầng ý nghĩa tâm linh và âm hưởng huyền thoại của bộ ba nhạc cụ thiêng trong nghi lễ đầu năm.",
    content: `## 1. Tam tấu nhạc cụ linh thiêng\n\nTrong kho tàng nhạc khí cổ truyền Champa, bộ ba gồm: Trống Ginăng (đại diện cho sấm sét và người cha), trống Paranưng (đại diện cho trời đất và người mẹ) cùng kèn Saranai (đại diện cho linh hồn và con người) tạo nên cấu trúc âm vang huyền nhiệm.\n\nTiếng kèn Saranai réo rắt dẫn dắt các điệu múa thiêng của Maduen (thầy vỗ) và Ka-ing (thầy múa), kết nối thế giới thực tại với tổ tiên nguồn cội.`,
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    mainCategory: "tin-tuc",
    category: "music",
    badge: "Mùa Lễ Hội 2026",
    badgeClass: "bg-primary-container text-on-primary-container",
    fieldLocation: "Khu vực Panduranga Ninh Thuận & Bình Thuận",
    readTime: "5 phút đọc",
    authorId: "usr-admin-001",
    authorName: "Ban Văn Hóa Lễ Hội",
    status: "published",
    viewsCount: 980,
    createdAt: new Date("2026-03-01T14:00:00Z").toISOString(),
    updatedAt: new Date("2026-03-01T14:00:00Z").toISOString(),
    publishedAt: new Date("2026-03-01T14:00:00Z").toISOString(),
  },
];

class PostService {
  constructor() {
    this.isSupabaseConfigured =
      Boolean(process.env.SUPABASE_URL) &&
      !process.env.SUPABASE_URL.includes("placeholder-project") &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY) &&
      !String(process.env.SUPABASE_ANON_KEY).includes("placeholder");

    // In-memory posts cache/store for fast dev testing
    this.mockPosts = new Map();
    INITIAL_POSTS.forEach((post) => {
      this.mockPosts.set(post.id, { ...post });
    });
  }

  // 1. Lấy danh sách bài viết công khai (chỉ bài 'published')
  async getPublishedPosts({ mainCategory = "all", category = "all", search = "", limit = 20, page = 1 } = {}) {
    if (db) {
      try {
        let query = db("blog_articles")
          .where(function () {
            this.where("is_published", true).orWhere("status", "published");
          });

        if (mainCategory && mainCategory !== "all") {
          query = query.where("main_category", mainCategory);
        }
        if (category && category !== "all") {
          query = query.where("category_id", category);
        }
        if (search && search.trim()) {
          const q = `%${search.trim()}%`;
          query = query.where(function () {
            this.where("title", "ilike", q)
              .orWhere("summary", "ilike", q)
              .orWhere("field_location", "ilike", q);
          });
        }

        const countRes = await query.clone().count("id as count").first();
        const total = parseInt(countRes?.count || "0", 10);

        const rows = await query
          .orderBy("created_at", "desc")
          .limit(limit)
          .offset((page - 1) * limit);

        if (rows.length > 0 || total > 0) {
          return {
            posts: rows.map(this._mapDbArticleToModel),
            total,
            page,
            limit,
          };
        }
      } catch (err) {
        console.warn("Lỗi đọc posts từ DB, dùng fallback:", err.message);
      }
    }

    if (this.isSupabaseConfigured) {
      let query = supabase
        .from("posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (mainCategory && mainCategory !== "all") {
        query = query.eq("main_category", mainCategory);
      }
      if (category && category !== "all") {
        query = query.eq("category", category);
      }
      if (search) {
        query = query.ilike("title", `%${search}%`);
      }

      const from = (page - 1) * limit;
      const to = from + limit - 1;
      const { data, error, count } = await query.range(from, to);

      if (!error && data) {
        return {
          posts: data.map(this._mapDbPostToModel),
          total: count || data.length,
          page,
          limit,
        };
      }
    }

    // Dev In-memory fallback
    let list = Array.from(this.mockPosts.values()).filter((p) => p.status === "published");

    if (mainCategory && mainCategory !== "all") {
      list = list.filter((p) => p.mainCategory === mainCategory);
    }
    if (category && category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.fieldLocation.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt));

    const total = list.length;
    const startIndex = (page - 1) * limit;
    const paginated = list.slice(startIndex, startIndex + limit);

    return {
      posts: paginated,
      total,
      page,
      limit,
    };
  }

  // 2. Lấy chi tiết bài viết theo Slug (công khai)
  async getPostBySlug(slug) {
    if (!slug) return null;

    if (db) {
      try {
        const row = await db("blog_articles")
          .where("slug", slug)
          .where(function () {
            this.where("is_published", true).orWhere("status", "published");
          })
          .first();

        if (row) {
          await db("blog_articles").where("id", row.id).increment("views_count", 1);
          return this._mapDbArticleToModel({ ...row, views_count: (row.views_count || 0) + 1 });
        }
      } catch (err) {
        console.warn("Lỗi đọc post detail từ DB, dùng fallback:", err.message);
      }
    }

    if (this.isSupabaseConfigured) {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (!error && data) {
        // Tăng lượt xem bất đồng bộ
        supabase.rpc("increment_post_views", { post_slug: slug }).catch(() => {});
        return this._mapDbPostToModel(data);
      }
    }

    // Dev In-memory fallback
    for (const post of this.mockPosts.values()) {
      if (post.slug === slug && post.status === "published") {
        post.viewsCount = (post.viewsCount || 0) + 1;
        return { ...post };
      }
    }

    return null;
  }

  // 3. Quản trị: Lấy toàn bộ bài viết (kể cả draft)
  async getAllPostsForAdmin({ status = "all", search = "" } = {}) {
    if (this.isSupabaseConfigured) {
      let query = supabase.from("posts").select("*").order("created_at", { ascending: false });

      if (status && status !== "all") {
        query = query.eq("status", status);
      }
      if (search) {
        query = query.ilike("title", `%${search}%`);
      }

      const { data, error } = await query;
      if (!error && data) {
        return data.map(this._mapDbPostToModel);
      }
    }

    // Dev In-memory fallback
    let list = Array.from(this.mockPosts.values());
    if (status && status !== "all") {
      list = list.filter((p) => p.status === status);
    }
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q));
    }
    list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return list;
  }

  // 4. Quản trị: Tạo bài viết mới (Chỉ Admin)
  async createPost(postData, authorUser) {
    if (!postData.title || !postData.title.trim()) {
      throw new Error("Tiêu đề bài viết không được để trống!");
    }

    const slug = postData.slug && postData.slug.trim()
      ? this._slugify(postData.slug)
      : this._slugify(postData.title);

    // Kiểm tra trùng lặp slug
    const isSlugTaken = Array.from(this.mockPosts.values()).some((p) => p.slug === slug);
    const finalSlug = isSlugTaken ? `${slug}-${Date.now().toString().slice(-4)}` : slug;

    const newPost = {
      id: `post-${Date.now()}`,
      title: postData.title.trim(),
      slug: finalSlug,
      excerpt: postData.excerpt?.trim() || postData.content?.slice(0, 160) || "",
      content: postData.content || "",
      coverImage:
        postData.coverImage ||
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
      mainCategory: postData.mainCategory || "van-hoa",
      category: postData.category || "craft",
      badge: postData.badge || "Khảo Cứu Di Sản",
      badgeClass: postData.badgeClass || "bg-primary/10 text-primary border-primary/20",
      fieldLocation: postData.fieldLocation || "Panduranga - Ninh Thuận",
      readTime: postData.readTime || this._calculateReadTime(postData.content),
      authorId: authorUser?.id || "usr-admin-001",
      authorName: postData.authorName || authorUser?.fullName || "Ban Quản Trị Di Sản",
      status: postData.status === "draft" ? "draft" : "published",
      viewsCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: postData.status === "published" ? new Date().toISOString() : null,
    };

    if (this.isSupabaseConfigured) {
      const dbPayload = this._mapModelToDbPost(newPost);
      const { data, error } = await supabase.from("posts").insert(dbPayload).select().single();
      if (!error && data) {
        const created = this._mapDbPostToModel(data);
        this.mockPosts.set(created.id, created);
        return created;
      }
    }

    this.mockPosts.set(newPost.id, newPost);
    return newPost;
  }

  // 5. Quản trị: Cập nhật bài viết (Chỉ Admin)
  async updatePost(id, postData, authorUser) {
    const existing = this.mockPosts.get(id);
    if (!existing) {
      const err = new Error("Không tìm thấy bài viết cần chỉnh sửa!");
      err.status = 404;
      throw err;
    }

    let slug = existing.slug;
    if (postData.slug && postData.slug.trim()) {
      slug = this._slugify(postData.slug);
    }

    const updated = {
      ...existing,
      ...postData,
      id: existing.id,
      slug,
      updatedAt: new Date().toISOString(),
      publishedAt:
        postData.status === "published" && !existing.publishedAt
          ? new Date().toISOString()
          : existing.publishedAt,
    };

    if (this.isSupabaseConfigured) {
      const dbPayload = this._mapModelToDbPost(updated);
      await supabase.from("posts").update(dbPayload).eq("id", id);
    }

    this.mockPosts.set(id, updated);
    return updated;
  }

  // 6. Quản trị: Xóa bài viết (Chỉ Admin)
  async deletePost(id) {
    if (!this.mockPosts.has(id)) {
      const err = new Error("Không tìm thấy bài viết cần xóa!");
      err.status = 404;
      throw err;
    }

    if (this.isSupabaseConfigured) {
      await supabase.from("posts").delete().eq("id", id);
    }

    this.mockPosts.delete(id);
    return { success: true, message: "Đã xóa bài viết thành công!" };
  }

  // Helpers
  _slugify(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  _calculateReadTime(text) {
    if (!text) return "3 phút đọc";
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} phút đọc`;
  }

  _mapDbArticleToModel(row) {
    return {
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.summary || row.excerpt || "",
      content: row.content,
      coverImage: row.featured_image || row.cover_image || "",
      mainCategory: row.main_category,
      category: row.category_id || row.category || "craft",
      badge: row.badge,
      badgeClass: row.badge_class,
      fieldLocation: row.field_location,
      readTime: row.read_time,
      authorId: row.author_id,
      authorName: row.author_name,
      authorAvatar: row.author_avatar,
      status: row.status || (row.is_published ? "published" : "draft"),
      viewsCount: row.views_count || 0,
      likesCount: row.likes_count || 0,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      publishedAt: row.created_at,
    };
  }

  _mapDbPostToModel(row) {
    return {
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      content: row.content,
      coverImage: row.cover_image,
      mainCategory: row.main_category,
      category: row.category,
      badge: row.badge,
      badgeClass: row.badge_class,
      fieldLocation: row.field_location,
      readTime: row.read_time,
      authorId: row.author_id,
      authorName: row.author_name,
      status: row.status,
      viewsCount: row.views_count,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      publishedAt: row.published_at,
    };
  }

  _mapModelToDbPost(model) {
    return {
      title: model.title,
      slug: model.slug,
      excerpt: model.excerpt,
      content: model.content,
      cover_image: model.coverImage,
      main_category: model.mainCategory,
      category: model.category,
      badge: model.badge,
      badge_class: model.badgeClass,
      field_location: model.fieldLocation,
      read_time: model.readTime,
      author_id: model.authorId,
      author_name: model.authorName,
      status: model.status,
      views_count: model.viewsCount || 0,
      published_at: model.publishedAt,
    };
  }
}

module.exports = new PostService();

