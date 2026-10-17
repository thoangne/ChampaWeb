import { BLOG_ARTICLES, BLOG_PILLARS } from "./blogData";

export interface BlogChapter {
  id: string;
  number: string;
  categoryTag: string;
  title: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
    source?: string;
  };
  highlightBox?: {
    type: "quote" | "comparison" | "archival" | "fact";
    title: string;
    description: string;
    details?: string[];
  };
  gallery?: {
    image: string;
    caption: string;
    alt: string;
  }[];
}

export interface BlogDetailArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  mainCategory: "tin-tuc" | "lich-su" | "van-hoa";
  categoryLabel: string;
  code: string;
  badge: string;
  badgeClass: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  fieldLocation: string;
  coverImage: string;
  coverCaption: string;
  coverSource: string;
  audioTitle: string;
  audioDuration: string;
  epigraphyQuote?: {
    chamText?: string;
    translation: string;
    source: string;
  };
  chapters: BlogChapter[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export const DETAILED_ARTICLES: Record<string, BlogDetailArticle> = {
  "po-klong-garai-brick": {
    id: "po-klong-garai-brick",
    slug: "po-klong-garai-brick",
    title: "Bí ẩn gạch nung không vữa mạch Po Klong Garai: Khi lửa và đất hóa thành lời kinh nguyện vĩnh cửu",
    subtitle: "Ngọn tháp sừng sững như ngọn lửa thiêng không bao giờ tắt trên đỉnh đồi Trầu qua tám thế kỷ thăng trầm gió cát.",
    mainCategory: "van-hoa",
    categoryLabel: "Kiến trúc & Tâm linh Champa",
    code: "KALAN-ARCH-001",
    badge: "Bài Khảo Cứu Tâm Điểm",
    badgeClass: "bg-primary text-on-primary",
    readTime: "12 phút đọc",
    date: "24/10/2024",
    author: "Hội đồng Chuyên môn Văn hóa Dana & TS. Bá Trung Phụ",
    authorRole: "Ban Cố vấn Văn hóa Dana & Hội đồng Chức sắc Balamôn Ninh Thuận",
    authorInitials: "ĐC",
    fieldLocation: "Đồi Trầu - Phường Đô Vinh, TP. Phan Rang - Tháp Chàm",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7XPGZZpV39JwKr39VX7oqm24fXTeq5cF10rpQpUdEKf_3urrVONYW10t2x1S_E3ovUJG7BkbVI6mVXvBpY6Y4rAwoU5II3UM01y4enAOS3rpjiYTgW5QikItO09gUNzYsBytXNWIIJZp_0sf2X6tqsMqd4rppHgK-rvfk1oieIk1ERb41Mj5l9NL09UZs_az1UGDnOmL6Z1F-st_-Bpa27b_T0YiH9400CjbcbfZQZeZk83gkVSD9eA",
    coverCaption: "Toàn cảnh cụm tháp Kalan Po Klong Garai ráng chiều hoàng hôn Đồi Trầu. Công trình xây dựng thế kỷ XIII, nơi từng khối gạch đỏ nung hòa hợp kỳ vĩ cùng sa thạch điêu khắc.",
    coverSource: "Kho tư liệu Bảo tàng Điêu khắc Chăm & Dana Community",
    audioTitle: "Thuyết minh Di sản: Bí ẩn gạch nung Po Klong Garai",
    audioDuration: "05:20",
    epigraphyQuote: {
      chamText: "ꨔꨯꨮꨣꨆꨤꨩꨘꨳ ꨚꨯꨅꨲꨤꨯꨢꨩ ꨚꨯ ꨆꨤꨯꨭꨮ ꨈꨣꨢꨵ",
      translation: "Thần linh ngự giữa lòng đất đỏ nung, gạch mài vào gạch như hai mảnh linh hồn tìm về một thể. Ngọn lửa thiêng của vũ trụ đã kết tinh ngàn viên đất mẹ, dựng nên cõi vĩnh hằng cho đức Vua Thần...",
      source: "Bản dịch từ văn bia cửa tháp Akhar Thrah thế kỷ XIV — Giáo sư P.B. Lafont, Viện Viễn Đông Bác Cổ (EFEO)",
    },
    chapters: [
      {
        id: "chuong-1",
        number: "01",
        categoryTag: "Khởi nguyên & Huyền sử",
        title: "Ngọn đồi Trầu và bản hòa ca của đất, lửa, con người",
        content: [
          "Trên đỉnh ngọn đồi Trầu (tiếng Chăm gọi là Balhlaok) lộng gió của xứ Panduranga, quần thể đền tháp Po Klong Garai trầm mặc đứng tựa lưng vào dãy Trường Sơn, phóng tầm mắt bao quát cả vùng đồng bằng Phan Rang khô cằn. Được xây dựng vào cuối thế kỷ XIII dưới triều vua Jaya Simhavarman III (thường được biết đến trong sử thi với danh xưng vua Chế Mân), đền tháp là nơi thờ tự đức vua Po Klong Garai – vị minh quân huyền thoại có công khai thông hệ thống kênh mương Nha Trinh dẫn nước tưới tắm cho hàng vạn mẫu ruộng đồng cát trắng.",
          "Trải qua hơn 700 năm phơi mình dưới cái nắng thiêu đốt và gió mặn thổi từ biển Đông, trong khi những công trình bê tông cốt thép hiện đại chỉ vài mươi năm đã nứt toác và rêu phong bám bẩn, gạch tháp Chăm vẫn giữ nguyên sắc đỏ chu sa rực rỡ như vừa mới ra lò hôm qua. Không có một cọng cỏ hay mầm rêu nào có thể bén rễ vào những kẽ gạch. Điều gì đã tạo nên sự bền bỉ kỳ lạ đến mức huyền bí này?",
          "Đối với người Chăm, ngọn tháp không chỉ là một công trình kiến trúc đơn thuần. Đó là hiện thân của Kalan – ngọn núi thiêng Meru thu nhỏ, trục vũ trụ kết nối con người với các vị thần bảo hộ Siva giáo. Mỗi viên gạch được xếp lên là một hành vi tế lễ, đòi hỏi độ tinh khiết tuyệt đối từ đất sét, nguồn nước nhào nặn đến tâm thức của phường thợ cả."
        ],
        quote: {
          text: "Mỗi viên gạch Kalan không đơn thuần là vật liệu xây dựng, mà là một tế bào của thân thể thần linh. Khi người thợ mài gạch, họ đang thực hiện một nghi thức giao hòa giữa nhân gian và cõi trời.",
          author: "Cả sư Đổng Bào",
          source: "Hội đồng Chức sắc Balamôn Ninh Thuận"
        }
      },
      {
        id: "chuong-2",
        number: "02",
        categoryTag: "Khảo cổ Kỹ thuật & Hóa nghiệm",
        title: "Kỹ thuật “Mài chập” & Bí ẩn chất kết dính từ nhựa vỏ cây Bời Lời",
        content: [
          "Suốt hàng thập kỷ của thế kỷ XX, giới nghiên cứu phương Tây và Việt Nam từng lưu truyền một giả thuyết ly kỳ: người Chăm đắp toàn bộ ngọn tháp bằng gạch mộc (chưa nung), sau đó chất củi khô và rơm rạ xung quanh rồi nổi lửa thiêu cả tòa tháp như một lò gốm khổng lồ lộ thiên. Giả thuyết này nghe đầy thi vị, nhưng dưới lăng kính vật lý kiến trúc và nhiệt động học hiện đại, nó hoàn toàn phi thực tế. Một ngọn tháp đồ sộ cao hơn 20 mét với tường dày gần 2 mét không thể nào đạt được độ nung đồng đều từ trong ra ngoài nếu đốt lửa hở, mà sẽ lập tức sụp đổ do biến dạng nhiệt cục bộ.",
          "Các cuộc khai quật và phân tích quang phổ huỳnh quang tia X (XRF) tại Viện Khảo cổ học Việt Nam phối hợp với các chuyên gia trùng tu UNESCO đã giải mã sự thật: Kỹ thuật mài chập kết hợp dung dịch nhựa thực vật bản địa.",
          "Người thợ cả dùng gạch đã nung sẵn có độ xốp vừa phải, nhúng vào nước pha nhựa vỏ cây bời lời rừng (tiếng Chăm gọi là Bak Kalo) rồi mài trực tiếp hai viên gạch vào nhau theo chuyển động tới lui. Bột gạch mịn sinh ra quyện với chất keo hữu cơ đóng vai trò như lớp keo dán sinh học siêu kết dính. Khi khô lại, hai viên gạch nóng chảy lạnh và hợp nhất làm một, đến mức một lưỡi dao mỏng cũng không thể lách qua."
        ],
        highlightBox: {
          type: "comparison",
          title: "Đối chiếu 3 Luồng Giả Thuyết Khảo Cổ Kỹ Thuật Gạch Champa",
          description: "So sánh kết quả nghiên cứu khoa học qua các thời kỳ thực nghiệm trùng tu di tích.",
          details: [
            "Giả thuyết 1 (Nung cả tháp sau khi xây): Bác bỏ bởi chuyên gia Ba Lan Kazimierz Kwiatkowski (KTS Kazik). Nhiệt độ không thể đạt 900°C đều khắp thân tháp.",
            "Giả thuyết 2 (Dùng mật mía và vôi vỏ sò): Không tìm thấy dấu vết canxi cacbonat (CaCO3) trong các mẫu phân tích phổ hồng ngoại mạch gạch gốc.",
            "Giả thuyết 3 (Mài chập + Nhựa Bời Lời): Được chứng minh chuẩn xác bằng thực nghiệm năm 2003 tại Mỹ Sơn và phục chế thành công tại tháp Po Klong Garai."
          ]
        }
      },
      {
        id: "chuong-3",
        number: "03",
        categoryTag: "Biểu tượng học & Điêu khắc",
        title: "Đồ hình vũ trụ học Mandala và kỹ nghệ đục chạm trực tiếp trên gạch",
        content: [
          "Một nét độc đáo vô tiền khoáng hậu của kiến trúc Champa là nghệ thuật chạm trổ hoa văn trực tiếp lên mặt tường gạch đã xây xong. Không phải chạm từng viên gạch rồi mới lắp ghép, phường thợ cả Champa dựng toàn bộ bức tường phẳng lỳ, sau đó những nghệ nhân bậc thầy mới cầm đục bằng đồng và sa thạch đục tỉa hoa văn lá lật (Kala), hoa sen cách điệu và các vũ nữ Apsara mềm mại.",
          "Độ nung của gạch Champa đạt sự cân bằng thần kỳ: vừa đủ cứng để chống chọi nắng mưa ngàn năm, nhưng lại vừa đủ mềm xốp và đồng nhất hạt đất để nhát đục lướt qua êm ái mà không làm vỡ vụn viên gạch.",
          "Mỗi cửa vòm tháp đều tuân theo nguyên lý cửa giả (Torana) đại diện cho bốn phương tám hướng trong vũ trụ học Ấn Độ giáo, nơi chỉ duy nhất cửa Đông mở ra đón ánh bình minh khai sáng, còn ba cửa còn lại là chốn ngự kín đáo của chư thần."
        ]
      },
      {
        id: "chuong-4",
        number: "04",
        categoryTag: "Bảo tồn & Trao truyền",
        title: "Thách thức trùng tu thế kỷ XXI: Khi tri thức bản địa lên tiếng",
        content: [
          "Trong những thập niên 80 và 90 của thế kỷ trước, nhiều dự án trùng tu vội vã dùng xi măng poóc-lăng để trát vá vào các kẽ nứt của tháp Chăm. Hậu quả là chỉ sau vài năm, muối khoáng trong xi măng sùi trắng, giữ nước bên trong làm mục ruỗng cả những viên gạch cổ nguyên bản xung quanh.",
          "Bài học đắt giá đó đã đưa các nhà khoa học quay trở về học hỏi từ chính cộng đồng người Chăm ở làng gốm Bàu Trúc và các bậc cao niên am hiểu rừng già. Việc phục chế tháp cổ ngày nay chỉ được phép dùng gạch nung củi truyền thống từ đất sét sông Dinh và chất keo thực vật bản địa, trả lại hơi thở tự nhiên cho di sản.",
          "Po Klong Garai vẫn đứng đó, như một đài thiên văn bằng đất nung, đo đếm nhịp điệu của thời gian và nhắc nhở chúng ta về một nền văn minh rực rỡ chưa từng tắt nắng."
        ]
      }
    ],
    keyTakeaways: [
      "Kỹ thuật mài chập trực tiếp kết hợp nhựa cây Bời Lời tạo nên liên kết phân tử không cần vữa mạch xi măng hay vôi cát.",
      "Gạch được nung sẵn ở nhiệt độ kiểm soát ~850-900°C, sau đó xây dựng thành khối rồi mới chạm trổ hoa văn trực tiếp lên thân tháp.",
      "Mọi nỗ lực trùng tu hiện đại bắt buộc phải dựa trên tri thức bản địa và vật liệu tương thích sinh học để không phá hủy di sản."
    ],
    relatedSlugs: ["lang-gom-bau-truc", "det-my-nghiep", "hinh-tuong-apsara-dvarapala"]
  },

  "khai-mac-dai-le-kate-2025": {
    id: "post-news-1",
    slug: "khai-mac-dai-le-kate-2025",
    title: "Khai mạc Đại lễ Katê 2025: Sắc màu rực rỡ và tiếng trống Ginăng thức giấc ngàn năm",
    subtitle: "Hàng vạn đồng bào Chăm cùng du khách tề tựu về ngọn tháp cổ kính trong trang phục truyền thống rực rỡ.",
    mainCategory: "tin-tuc",
    categoryLabel: "Tin tức & Sự kiện Di sản",
    code: "NEWS-RITUAL-2025",
    badge: "Sự Kiện Di Sản 2025",
    badgeClass: "bg-primary text-on-primary",
    readTime: "5 phút đọc",
    date: "12/10/2025",
    author: "Ban Quản lý Di tích & Phóng viên Dana",
    authorRole: "Đặc phái viên Thường trú Panduranga",
    authorInitials: "KT",
    fieldLocation: "Tháp Po Klong Garai & Đồi Trầu, Ninh Thuận",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp5oGIUVAeSJNWnmsriAoE7Rx-gdVHGigsy1epg2Fah3OzIXtn7INt9avN5y3DYyr_5mgSbawDhhdB6AVM-eYtjoRZfxrq27rRi1-chffHIx6soB1QRX5R3xTS8gl_eF19cPeH7hONAuA5dgaNxeEG4JYrWaLNmlFYWVg8fXjwigzILTDoZgUaOHe27pOw-PL1DfizD5qy-ARG-iBr0tq2l090mbglxQI-yq7RDH_u_9aIirJEjUmV9Q",
    coverCaption: "Đoàn rước y trang Nữ thần Xứ sở Po Sah Inư tiến lên đỉnh đồi Trầu trong sự hân hoan của cộng đồng.",
    coverSource: "Trung tâm Nghiên cứu Văn hóa Chăm Ninh Thuận",
    audioTitle: "Thanh âm Lễ hội Katê: Hòa tấu Paranưng & Kèn Saranai",
    audioDuration: "04:15",
    epigraphyQuote: {
      chamText: "ꨚꨯ ꨆꨤꨯꨭꨮ ꨈꨣꨢꨵ ꨣꨨꨯꨮꨠ ꨕꨪ ꨀꨘꨯꨮꨆꨵ ꨌꨯꨱꨮ",
      translation: "Cầu xin Thần Vua Po Klong Garai che chở cho con cháu, ban mưa thuận gió hòa, lúa thóc đầy bồ, nước về mương rạch mát lành vạn nẻo đồng hoang.",
      source: "Lời khấn cổ của thầy Cả sư Po Adhia trong nghi thức mở cửa tháp sáng mùng 1 tháng 7 Chăm lịch",
    },
    chapters: [
      {
        id: "chuong-1",
        number: "01",
        categoryTag: "Nghi lễ mở màn",
        title: "Bình minh trên Đồi Trầu và nghi thức rước Y trang Thần Vua",
        content: [
          "Sáng sớm tinh sương, khi những giọt sương mai còn đọng trên những bụi xương rồng triền đồi Trầu, con đường dẫn lên tháp Po Klong Garai đã rực rỡ muôn vàn sắc váy áo Chăm. Phụ nữ mặc áo dài Chăm truyền thống thắt dải khăn thổ cẩm Talei Kabak xanh đỏ kiêu hãnh, đầu đội mâm lễ trầu cau, chuối mật và bánh tét nếp dẻo.",
          "Nghi thức rước y trang từ đồng bào dân tộc Raglai – những người anh em út theo tục mẫu hệ giữ gìn bảo vật của vua chúa Chăm – diễn ra trang nghiêm và xúc động. Tiếng kèn Saranai xé toang không gian tĩnh mịch, hòa cùng tiếng trống Ginăng rộn rã bước chân hành hương."
        ]
      },
      {
        id: "chuong-2",
        number: "02",
        categoryTag: "Nghi thức tháp thiêng",
        title: "Tắm tượng thần Linga-Yoni và vũ điệu quạt thiêng của Muk Pajau",
        content: [
          "Tại gian chính của Kalan, Thầy Cả sư (Po Adhia) cùng ông Từ giữ tháp (Camanei) cử hành lễ mở cửa tháp và dùng nước trầm hương tắm tượng thần Po Klong Garai. Mùi thơm thảo mộc ngào ngạt lan tỏa khắp không gian tĩnh lặng nghìn năm tuổi.",
          "Phía bên ngoài sân tháp, bà bóng Muk Pajau cùng các thiếu nữ Chăm bắt đầu màn múa quạt huyền bí. Từng nhịp quạt mở ra khép lại như đôi cánh chim thần Garuda vút lên bầu trời, gửi gắm ước nguyện no ấm, hòa hợp âm dương cho một mùa màng mới."
        ]
      },
      {
        id: "chuong-3",
        number: "03",
        categoryTag: "Giao thoa cộng đồng",
        title: "Không gian kết nối di sản sống giữa truyền thống và du khách đương đại",
        content: [
          "Katê 2025 không chỉ là ngày hội riêng của đồng bào Chăm mà còn là điểm hẹn văn hóa quốc tế lớn nhất Nam Trung Bộ. Hàng ngàn du khách trong và ngoài nước được cùng tham gia vào các trò chơi dân gian, thưởng thức bánh gừng nướng, ngắm nhìn các nghệ nhân biểu diễn dệt thổ cẩm và hòa mình vào vòng xòe đắm say.",
          "Lễ hội Katê đã được Bộ Văn hóa công nhận là Di sản văn hóa phi vật thể quốc gia, chứng minh sức sống bền bỉ và vẻ đẹp tâm linh bác ái của cộng đồng người Chăm."
        ]
      }
    ],
    keyTakeaways: [
      "Katê diễn ra vào tháng 7 Chăm lịch (thường rơi vào tháng 10 dương lịch), là dịp người Chăm tưởng nhớ tổ tiên và các vị thần lập quốc.",
      "Mối quan hệ thiêng liêng giữa người Chăm và người Raglai được tái hiện sống động qua lễ rước Y trang.",
      "Lễ hội duy trì đầy đủ các thành tố âm nhạc, trang phục, nghi lễ và ẩm thực nguyên bản."
    ],
    relatedSlugs: ["nhac-khi-saranai-ginang", "po-klong-garai-brick", "det-my-nghiep"]
  },

  "huyen-tich-vua-po-klong-garai": {
    id: "post-history-1",
    slug: "huyen-tich-vua-po-klong-garai",
    title: "Huyền tích Vua Po Klong Garai: Từ cậu bé chăn bò ghẻ lở đến bậc quân vương trị thủy vĩ đại",
    subtitle: "Lật mở những trang sử thi huyền thoại về vị vua có công lớn nhất trong việc đắp đập đào mương nuôi sống đồng bằng Ninh Thuận.",
    mainCategory: "lich-su",
    categoryLabel: "Tiến trình Lịch sử & Vương triều",
    code: "HIST-KINGS-002",
    badge: "Tiến Trình Vương Triều",
    badgeClass: "bg-tertiary text-white",
    readTime: "9 phút đọc",
    date: "18/09/2024",
    author: "TS. Bá Trung Phụ",
    authorRole: "Nhà nghiên cứu Lịch sử Văn hóa Chăm",
    authorInitials: "BP",
    fieldLocation: "Đập Nha Trinh - Sông Dinh - Phường Đô Vinh",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzz5wVWN2Rre_bf3lzTZ89szZW61A19gyuIM1D6eHB2bgjSvLJ2IjqYRR2_FvWNOaiuYH_mZKTaaCYHyrAo6Y-MHZRm5QMjTQqVYlWO-UTZpP7j-38TvaXGvTC0E43MbjaK6OcYizspkYPA97vZ7ux2qQedU074FLdyFMB7zxmwJM_GGaJUJxVOmC--t3UtTdUYuMj2PhxbPFLX9SyKZLF-p5BPhi_fHZpOUSInajqnNWFka72rYwew",
    coverCaption: "Tượng điêu khắc Vua Po Klong Garai trong tư thế Mukha-Linga uy nghiêm tại chính điện tháp Đồi Trầu.",
    coverSource: "Viện Hàn lâm Khoa học Xã hội Việt Nam",
    audioTitle: "Sử thi Chăm: Trường ca Dam Po Klong Garai",
    audioDuration: "06:10",
    chapters: [
      {
        id: "chuong-1",
        number: "01",
        categoryTag: "Thời niên thiếu",
        title: "Cậu bé ghẻ lở Ja Katol và điềm báo rồng vàng liếm vết thương",
        content: [
          "Theo truyền thuyết dân gian Chăm chép trong trường ca Akayet Po Klong Garai, vị vua tương lai vốn có tên là Ja Katol, sinh ra trong một gia đình nghèo khổ tại buôn Balhlaok. Từ nhỏ, ông mang hình hài ghẻ lở xấu xí, hằng ngày phải đi chăn trâu bò thuê cho nhà phú hộ.",
          "Một buổi trưa hè oi ả, khi Ja Katol nằm ngủ dưới bóng cây đa cổ thụ, người bạn chăn trâu cùng kinh hoàng thấy hai con rồng lớn từ đầm nước bò lên quấn quanh người cậu, dùng lưỡi liếm sạch các vết thương trên da thịt. Khi rồng bay về trời, Ja Katol bừng tỉnh với thân hình tráng kiện, khuôn mặt sáng ngời phi phàm."
        ]
      },
      {
        id: "chuong-2",
        number: "02",
        categoryTag: "Thi tài dựng tháp",
        title: "Cuộc thi tài hòa bình tránh đổ máu cùng tướng giặc Chiêm Thành",
        content: [
          "Lên ngôi vua trong bối cảnh đất nước Panduranga bị quân xâm lăng uy hiếp, Po Klong Garai không dùng đao kiếm tương tàn mà đề nghị một cuộc thi tài hòa bình: Ai dựng xong một ngọn tháp hoàn chỉnh trước khi trời rạng sáng thì người đó thắng cuộc, bên thua phải rút quân về nước.",
          "Nhờ tài năng tổ chức thần kỳ và được muôn dân đồng lòng chung tay gom gạch mài đá, ngọn tháp trên đồi Balhlaok của vua Po Klong Garai đã vươn cao đón bình minh rạng rỡ trước khi đối phương kịp dựng xong móng. Quân giặc thán phục giữ đúng lời hứa rút lui trong hòa bình."
        ]
      },
      {
        id: "chuong-3",
        number: "03",
        categoryTag: "Kỳ tích trị thủy",
        title: "Đập Nha Trinh - Công trình thủy nông nghìn năm còn nguyên giá trị",
        content: [
          "Di sản vĩ đại nhất của Po Klong Garai để lại cho đời sau không chỉ là tháp cổ mà là hệ thống đập đá Nha Trinh ngăn dòng sông Krông Pha (sông Dinh) đưa nước ngọt vào mạng lưới mương rãnh chằng chịt khắp thung lũng Ninh Thuận.",
          "Đến tận ngày nay, hệ thống đập này vẫn đang bền bỉ tưới mát cho hơn 12.000 héc-ta lúa và nho, biến vùng đất cằn cỗi nắng cháy thành vựa lúa trù phú bậc nhất dải đất duyên hải miền Trung."
        ]
      }
    ],
    keyTakeaways: [
      "Vua Po Klong Garai trị vì vào khoảng cuối thế kỷ XIII, là biểu tượng minh quân thương dân và trí tuệ hòa bình.",
      "Hệ thống thủy nông đập Nha Trinh là kỳ tích kỹ thuật cổ xưa duy nhất còn hoạt động liên tục đến ngày nay.",
      "Hình tượng ngài được nhân dân suy tôn thành vị Thần Nông nghiệp và Thần Đất thiêng liêng bậc nhất."
    ],
    relatedSlugs: ["po-klong-garai-brick", "ban-do-gieng-co-thuy-loi-champa", "van-bia-thap-po-rome-the-ky-17"]
  },

  "lang-gom-bau-truc": {
    id: "bau-truc",
    slug: "lang-gom-bau-truc",
    title: "Làng gốm Bàu Trúc: Kỹ nghệ không bàn xoay độc bản bên bờ sông Quao",
    subtitle: "Tay làm chân quay, người phụ nữ Chăm đi giật lùi tạo nên những tác phẩm gốm mộc được UNESCO vinh danh di sản nhân loại.",
    mainCategory: "van-hoa",
    categoryLabel: "Làng nghề Cổ truyền & UNESCO",
    code: "CRAFT-POTTERY-001",
    badge: "UNESCO Vinh Danh",
    badgeClass: "bg-primary text-on-primary",
    readTime: "8 phút đọc",
    date: "05/11/2024",
    author: "Nghệ nhân Đàng Thị Phan & Nhóm Nghiên cứu",
    authorRole: "Nghệ nhân Nhân dân Làng gốm Bàu Trúc",
    authorInitials: "BT",
    fieldLocation: "Paley Hamu Trok - Làng Bàu Trúc, Ninh Phước",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd_yrvnJ_UmdnGzLVXjm5HJfxWX-epAuAP73cohAxtCHVP56EKuM52m07N2hY1obT1_Wmh6lUgDS8Ye5va33Sp_Ih3JQB5vwCQfB9tHTZWaggCM2XqEUXoaNx_-AKFbm6o3Qlh0IJLDyt4WaVcS1eO4R7ER_r7FvmnriVoglYc2JHMEote5IwsaQ4KO5jEbpEvgMErIntFFp0iOdJghlh9P7kXsJrT1xrzKEBAkfFj9OWLDV8DTpPJsg",
    coverCaption: "Nghệ nhân Bàu Trúc uyển chuyển lùi quanh trục đất, dùng bàn tay vuốt nắn từng đường cong mộc mạc.",
    coverSource: "Hồ sơ đệ trình UNESCO Nghệ thuật làm gốm của người Chăm",
    audioTitle: "Lời ca người thợ gốm: Âm hưởng đất và nước làng Hamu Trok",
    audioDuration: "04:40",
    chapters: [
      {
        id: "chuong-1",
        number: "01",
        categoryTag: "Độc bản kỹ nghệ",
        title: "Bàn xoay sống: Đôi chân lùi làm trục quay của vũ trụ",
        content: [
          "Khác với tất cả các làng gốm nổi tiếng trên thế giới dùng bàn xoay gốm cơ học hay điện tử, phụ nữ Bàu Trúc chỉ dùng chính đôi chân của mình làm bàn xoay sống. Đặt khối đất sét sông Quao dẻo quánh lên chiếc bệ tròn cố định, người nghệ nhân vừa đi giật lùi thoăn thoắt quanh khối đất, vừa dùng bàn tay khéo léo vuốt nặn miệng bình, bụng vò.",
          "Mỗi mét đất nặn là hàng ngàn bước chân lùi đều đặn như điệu múa thiêng dâng cúng Mẹ Xứ sở Po Inư Nưgar – vị tổ sư đã truyền dạy nghề gốm cho phụ nữ làng Paley Hamu Trok tự ngàn xưa."
        ]
      },
      {
        id: "chuong-2",
        number: "02",
        categoryTag: "Nung lộ thiên",
        title: "Hỏa biến tự nhiên giữa rơm rạ và củi rừng",
        content: [
          "Gốm Bàu Trúc hoàn toàn không dùng lò nung khép kín. Sau khi phơi khô dưới nắng gió Ninh Thuận, hàng trăm sản phẩm gốm được xếp lộ thiên thành đống lớn giữa bãi đất trống, phủ kín bằng rơm khô và củi me, củi bằng lăng rồi đốt lửa nung trong 4-6 giờ.",
          "Khi gốm đỏ rực như than hồng, các nghệ nhân nhanh tay gắp ra và vẩy nước ngâm từ vỏ quả thị rừng hoặc vỏ hạt điều. Nước quả sôi xèo xèo trên thân gốm nóng bỏng, tạo nên những mảng hoa văn màu khói loang, chấm nâu đỏ tự nhiên không bao giờ có thể lặp lại ở hai sản phẩm khác nhau."
        ]
      }
    ],
    keyTakeaways: [
      "Làng gốm cổ nhất Đông Nam Á còn bảo tồn trọn vẹn phương thức chế tác thủ công không dùng bàn xoay.",
      "Được UNESCO ghi danh vào Danh sách Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp vào năm 2022.",
      "Nghề gốm theo truyền thống mẫu hệ chỉ trao truyền cho phụ nữ trong gia đình."
    ],
    relatedSlugs: ["phan-biet-gom-tho-cung-gia-dung", "det-my-nghiep", "po-klong-garai-brick"]
  },

  "det-my-nghiep": {
    id: "my-nghiep",
    slug: "det-my-nghiep",
    title: "Dệt Mỹ Nghiệp: Sợi chỉ nhuộm vỏ cây rừng & đồ hình vũ trụ Champa",
    subtitle: "Từ rễ cây nhàu và vỏ cây tràm, người phụ nữ Mỹ Nghiệp gửi gắm triết lý âm dương qua hoa văn quả trám và búp sen thiêng.",
    mainCategory: "van-hoa",
    categoryLabel: "Thổ Cẩm Cổ Truyền",
    code: "CRAFT-WEAVING-002",
    badge: "Thổ Cẩm Cổ Truyền",
    badgeClass: "bg-secondary text-white",
    readTime: "6 phút đọc",
    date: "28/10/2024",
    author: "Nghệ nhân Thuận Thị Trụ",
    authorRole: "Nghệ nhân Thổ cẩm Chăm Mỹ Nghiệp",
    authorInitials: "TT",
    fieldLocation: "Paley Caklaing - Làng Mỹ Nghiệp, Ninh Phước",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnUVQIkkzk4sUIaAcHvZKq-_JFsMVjkwWi6wVJYz1b38pTtWTcB_NnJA9pUSrOog9MIIrHBMjNMwmZ07G62QeC68HKaFH2ZC3FLZR1ykISx0jftWhDdHrOTZyDGh6OxckvxscMAIC0lKtMK89ZXTNb9p4uIebpPghBC4Qz-x4S-IRHj1glQM0pYgcmuItDQ5ICUQO9VGBUbRyuV-L5vdNRAZPn1RVNCS2THNjEc9XBmkvxGOQuBI0ZjQ",
    coverCaption: "Khung cửi cổ truyền làng Mỹ Nghiệp và những dải khăn thổ cẩm hoa văn hình học giàu biểu tượng vũ trụ.",
    coverSource: "Hợp tác xã Thổ cẩm Chăm Mỹ Nghiệp",
    audioTitle: "Tiếng thoi dệt và lời ru con làng Caklaing",
    audioDuration: "03:55",
    chapters: [
      {
        id: "chuong-1",
        number: "01",
        categoryTag: "Màu sắc tự nhiên",
        title: "Bí quyết nhuộm màu từ thảo mộc rừng khô Panduranga",
        content: [
          "Người phụ nữ làng Mỹ Nghiệp (Paley Caklaing) gìn giữ một kho tàng tri thức về màu nhuộm tự nhiên kỳ diệu. Màu vàng ươm lấy từ rễ củ cây nhàu rừng, màu đỏ trầm ấm từ vỏ cây tràm gió, màu đen tuyền từ bùn ao ngâm lá chùm bầu, còn màu xanh chàm dịu mát chiết xuất từ lá cây chàm dại.",
          "Sợi bông vải tự nhiên sau khi nhuộm được nấu qua nước cháo gạo để định hình sắc tố, phơi dưới nắng giòn Phan Rang giúp màu bám chặt vào từng thớ vải hàng trăm năm không hề phai nhạt."
        ]
      },
      {
        id: "chuong-2",
        number: "02",
        categoryTag: "Giải mã hoa văn",
        title: "Đồ hình vũ trụ và ngôn ngữ của những dải khăn Talei",
        content: [
          "Mỗi tấm khăn thổ cẩm Chăm là một cuốn sách mở về vũ trụ quan. Hoa văn quả trám (Talei Patuk) tượng trưng cho mắt thần che chở; hoa văn rùa thần (Krak) biểu trưng cho sự trường tồn của đất mẹ; hoa văn vòm tháp Kalan nhắc nhở con cháu về cội nguồn thiêng liêng.",
          "Tiếng lách cách của thoi đưa nhịp nhàng trên khung dệt như nhịp đập trái tim không ngừng nghỉ của văn hóa Champa lưu truyền qua ngàn thế hệ."
        ]
      }
    ],
    keyTakeaways: [
      "Làng nghề dệt thủ công truyền thống lâu đời bậc nhất của người Chăm tại Nam Trung Bộ.",
      "100% màu sắc và sợi dệt có nguồn gốc từ thảo mộc và bông tự nhiên bản địa.",
      "Mỗi hoa văn đều mang thông điệp triết học sâu sắc về con người và vũ trụ."
    ],
    relatedSlugs: ["lang-gom-bau-truc", "khai-mac-dai-le-kate-2025", "po-klong-garai-brick"]
  }
};

/**
 * Trả về chi tiết bài viết dựa theo slug.
 * Nếu bài viết đã có dữ liệu chuyên sâu trong DETAILED_ARTICLES -> trả về trực tiếp.
 * Nếu chưa, tìm trong danh sách BLOG_ARTICLES / BLOG_PILLARS và tự động sinh bản khảo cứu đầy đủ.
 */
export function getBlogDetailBySlug(slug?: string): BlogDetailArticle {
  if (!slug || slug === "po-klong-garai-brick") {
    return DETAILED_ARTICLES["po-klong-garai-brick"];
  }

  // 1. Tìm trong DETAILED_ARTICLES
  if (DETAILED_ARTICLES[slug]) {
    return DETAILED_ARTICLES[slug];
  }

  // 2. Tìm trong BLOG_ARTICLES
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (article) {
    return {
      id: article.id,
      slug: article.slug,
      title: article.title,
      subtitle: article.desc,
      mainCategory: article.mainCategory,
      categoryLabel: article.mainCategory === "tin-tuc" ? "Tin tức & Sự kiện" : article.mainCategory === "lich-su" ? "Tiến trình Lịch sử" : "Văn hóa & Nghệ thuật",
      code: `DOC-${article.id.toUpperCase()}`,
      badge: article.badge,
      badgeClass: article.badgeClass,
      readTime: article.readTime,
      date: "Tháng 10/2024",
      author: article.author,
      authorRole: "Hội đồng Khảo cứu & Ký ức Bản địa Dana",
      authorInitials: article.author.substring(0, 2).toUpperCase(),
      fieldLocation: article.fieldLocation,
      coverImage: article.image,
      coverCaption: `Tư liệu điền dã chuyên sâu: ${article.title}`,
      coverSource: "Kho tư liệu khảo sát thực địa Dana Community",
      audioTitle: `Thuyết minh bản địa: ${article.title}`,
      audioDuration: "04:30",
      chapters: [
        {
          id: "chuong-1",
          number: "01",
          categoryTag: "Bối cảnh & Tổng quan",
          title: "Bối cảnh khảo cứu và giá trị cốt lõi của di sản",
          content: [
            article.desc,
            "Trải qua bao thăng trầm lịch sử xứ Panduranga, những giá trị này không hề bị mai một mà trái lại càng được bồi đắp và trao truyền bền bỉ qua từng thế hệ con cháu bản địa.",
            "Tại địa bàn " + article.fieldLocation + ", các vết tích văn hóa và phong tục tập quán vẫn đang hiện hữu sống động trong từng nếp nhà, lời ca và sinh hoạt cộng đồng thường nhật."
          ]
        },
        {
          id: "chuong-2",
          number: "02",
          categoryTag: "Khảo cứu chuyên sâu",
          title: "Những phát hiện mới qua lăng kính nghiên cứu điền dã",
          content: [
            "Các tư liệu điền dã mới nhất cho thấy sự giao thoa kỳ diệu giữa tín ngưỡng cổ xưa và kỹ nghệ thực hành thủ công tài hoa của cha ông.",
            "Không chỉ mang ý nghĩa bảo tồn đơn thuần, đây còn là nguồn cảm hứng bất tận cho việc số hóa di sản và phát triển du lịch bền vững có trách nhiệm với cộng đồng."
          ]
        },
        {
          id: "chuong-3",
          number: "03",
          categoryTag: "Trao truyền & Tiếp nối",
          title: "Bảo tồn di sản sống trong nhịp thở đương đại",
          content: [
            "Việc gìn giữ tri thức bản địa đòi hỏi sự chung tay của cả cộng đồng, các nhà khoa học và những du khách trân quý văn hóa đích thực.",
            "Mỗi cuộc trò chuyện cùng nghệ nhân, từng chuyến đi trải nghiệm có chiều sâu đều góp phần thắp sáng ngọn lửa tự hào về nền văn minh Champa rực rỡ."
          ]
        }
      ],
      keyTakeaways: [
        `Tư liệu chuyên đề thuộc phân hệ ${article.mainCategory.toUpperCase()} của kho tàng Panduranga.`,
        `Ghi nhận trực tiếp từ địa bàn điền dã: ${article.fieldLocation}.`,
        "Kết hợp phương pháp nghiên cứu lịch sử truyền thống và khảo tả nhân học bản địa."
      ],
      relatedSlugs: ["po-klong-garai-brick", "khai-mac-dai-le-kate-2025", "lang-gom-bau-truc"]
    };
  }

  // 3. Tìm trong BLOG_PILLARS
  const pillar = BLOG_PILLARS.find((p) => p.slug === slug);
  if (pillar) {
    return {
      id: pillar.id,
      slug: pillar.slug,
      title: pillar.title,
      subtitle: pillar.desc,
      mainCategory: "van-hoa",
      categoryLabel: "Trụ cột Văn hóa Champa",
      code: `PILLAR-${pillar.id.toUpperCase()}`,
      badge: pillar.badge,
      badgeClass: pillar.badgeClass,
      readTime: pillar.readTime,
      date: "Tháng 10/2024",
      author: "Ban Cố vấn Di sản Dana",
      authorRole: "Hội đồng Chuyên gia Văn hóa",
      authorInitials: "DN",
      fieldLocation: pillar.village,
      coverImage: pillar.image,
      coverCaption: `Trụ cột di sản độc bản: ${pillar.title}`,
      coverSource: "Kho hình ảnh văn hóa Dana Community Heritage",
      audioTitle: `Thanh âm di sản: ${pillar.title}`,
      audioDuration: "05:00",
      chapters: [
        {
          id: "chuong-1",
          number: "01",
          categoryTag: "Nguồn cội bản địa",
          title: "Ký ức ngàn năm tại " + pillar.village,
          content: [
            pillar.desc,
            "Tại " + pillar.village + ", từng thớ đất, từng sợi chỉ hay nhịp trống đều là kết tinh của trí tuệ và linh hồn cha ông để lại qua hàng chục thế hệ."
          ]
        },
        {
          id: "chuong-2",
          number: "02",
          categoryTag: "Tri thức nghệ nhân",
          title: "Bàn tay tài hoa và bí quyết gia truyền độc nhất vô nhị",
          content: [
            "Những kỹ nghệ này không thể học qua sách vở thông thường mà phải được truyền dạy bằng phương thức trực quan 'cầm tay chỉ việc' giữa các thế hệ trong dòng tộc.",
            "Chính tình yêu mãnh liệt với cội nguồn đã giúp các nghệ nhân giữ vững ngọn lửa nghề bất chấp những thăng trầm của thời cuộc kinh tế thị trường."
          ]
        }
      ],
      keyTakeaways: [
        `Địa bàn làng nghề / trung tâm di sản: ${pillar.village}.`,
        "Giá trị văn hóa phi vật thể tiêu biểu đã được các tổ chức văn hóa công nhận.",
        "Điểm đến không thể bỏ qua trong các chuyến du lịch văn hóa trải nghiệm có chiều sâu."
      ],
      relatedSlugs: ["po-klong-garai-brick", "det-my-nghiep", "lang-gom-bau-truc"]
    };
  }

  // Fallback mặc định về bài viết Po Klong Garai
  return DETAILED_ARTICLES["po-klong-garai-brick"];
}
