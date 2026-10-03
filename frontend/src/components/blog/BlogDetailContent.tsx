import {
  ArrowUp,
  BookOpen,
  CheckCircle2,
  Feather,
  Flame,
  Quote,
  Scale,
  XCircle,
  ZoomIn,
} from "lucide-react";

export default function BlogDetailContent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="lg:col-span-8 flex flex-col gap-space-xl">
      {/* CHAPTER 1 */}
      <section className="scroll-mt-24 flex flex-col gap-space-md" id="chuong-1">
        <div className="flex items-center gap-space-xs">
          <span className="font-mono text-primary font-bold text-lg">01 /</span>
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
            Khởi nguyên & Huyền sử
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
          Ngọn đồi Trầu và bản hòa ca của đất, lửa, con người
        </h2>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            <span className="float-left text-5xl sm:text-6xl leading-[0.8] pr-3 pt-1 font-serif font-bold text-primary select-none">
              T
            </span>
            rên đỉnh ngọn đồi Trầu (tiếng Chăm gọi là <em>Balhlaok</em>) lộng gió của xứ Panduranga, quần thể đền tháp Po Klong Garai trầm mặc đứng tựa lưng vào dãy Trường Sơn, phóng tầm mắt bao quát cả vùng đồng bằng Phan Rang khô cằn. Được xây dựng vào cuối thế kỷ XIII dưới triều vua Jaya Simhavarman III (thường được biết đến trong sử thi với danh xưng vua Chế Mân), đền tháp là nơi thờ tự đức vua Po Klong Garai – vị minh quân huyền thoại có công khai thông hệ thống kênh mương Nha Trinh dẫn nước tưới tắm cho hàng vạn mẫu ruộng đồng cát trắng.
          </p>
          <p>
            Trải qua hơn 700 năm phơi mình dưới cái nắng thiêu đốt và gió mặn thổi từ biển Đông, trong khi những công trình bê tông cốt thép hiện đại chỉ vài mươi năm đã nứt toác và rêu phong bám bẩn, gạch tháp Chăm vẫn giữ nguyên sắc đỏ chu sa rực rỡ như vừa mới ra lò hôm qua. Không có một cọng cỏ hay mầm rêu nào có thể bén rễ vào những kẽ gạch. Điều gì đã tạo nên sự bền bỉ kỳ lạ đến mức huyền bí này?
          </p>
        </div>

        {/* Highlight Epigraphy / Bia ký cổ Callout Box */}
        <div className="bg-surface-container rounded-2xl p-space-md sm:p-space-lg shadow-sm relative overflow-hidden my-space-sm border border-outline-variant/40">
          <div className="absolute -right-4 -bottom-6 text-primary/10 select-none pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>
          <div className="flex items-start gap-space-sm relative z-10">
            <Quote className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                Trích Văn bia Cửa Tháp Cổng (Akhar Thrah • Thế kỷ XIV)
              </span>
              <p className="font-serif text-lg sm:text-xl text-on-surface italic leading-relaxed">
                "Thần linh ngự giữa lòng đất đỏ nung, gạch mài vào gạch như hai mảnh linh hồn tìm về một thể. Ngọn lửa thiêng của vũ trụ đã kết tinh ngàn viên đất mẹ, dựng nên cõi vĩnh hằng cho đức Vua Thần..."
              </p>
              <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant font-medium mt-1">
                — Bản dịch từ tiếng Chăm cổ của Giáo sư P.B. Lafont, Viện Viễn Đông Bác Cổ (EFEO).
              </span>
            </div>
          </div>
        </div>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            Đối với người Chăm, ngọn tháp không chỉ là một công trình kiến trúc đơn thuần. Đó là hiện thân của <strong>Kalan</strong> – ngọn núi thiêng Meru thu nhỏ, trục vũ trụ kết nối con người với các vị thần bảo hộ Siva giáo. Mỗi viên gạch được xếp lên là một hành vi tế lễ, đòi hỏi độ tinh khiết tuyệt đối từ đất sét, nguồn nước nhào nặn đến tâm thức của phường thợ cả.
          </p>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section className="scroll-mt-24 flex flex-col gap-space-md" id="chuong-2">
        <div className="flex items-center gap-space-xs">
          <span className="font-mono text-primary font-bold text-lg">02 /</span>
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
            Khảo cổ Kỹ thuật & Hóa nghiệm
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
          Kỹ thuật “Mài chập” & Bí ẩn chất kết dính từ nhựa vỏ cây Bời Lời
        </h2>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            Suốt hàng thập kỷ của thế kỷ XX, giới nghiên cứu phương Tây và Việt Nam từng lưu truyền một giả thuyết ly kỳ: người Chăm đắp toàn bộ ngọn tháp bằng gạch mộc (chưa nung), sau đó chất củi khô và rơm rạ xung quanh rồi nổi lửa thiêu cả tòa tháp như một lò gốm khổng lồ lộ thiên. Giả thuyết này nghe đầy thi vị, nhưng dưới lăng kính vật lý kiến trúc và nhiệt động học hiện đại, nó hoàn toàn phi thực tế. Một ngọn tháp đồ sộ cao hơn 20 mét với tường dày gần 2 mét không thể nào đạt được độ nung đồng đều từ trong ra ngoài nếu đốt lửa hở, mà sẽ lập tức sụp đổ do biến dạng nhiệt cục bộ.
          </p>
          <p>
            Các cuộc khai quật và phân tích quang phổ huỳnh quang tia X (XRF) tại Viện Khảo cổ học Việt Nam phối hợp với các chuyên gia trùng tu UNESCO đã giải mã sự thật: <strong>Kỹ thuật mài chập kết hợp dung dịch nhựa thực vật bản địa</strong>.
          </p>
        </div>

        {/* COMPARATIVE DIAGRAM / CALLOUT (3 Luồng giả thuyết) */}
        <div className="bg-surface-container-high rounded-2xl p-space-md shadow-sm my-space-sm border border-outline-variant/40">
          <div className="flex items-center justify-between mb-space-sm flex-wrap gap-2">
            <span className="font-title-md text-sm sm:text-base font-semibold text-on-surface flex items-center gap-2">
              <Scale className="h-4 w-4 text-secondary" />
              Đối chiếu 3 Luồng Giả Thuyết Khảo Cổ Kỹ Thuật Gạch Champa
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface text-on-surface-variant font-label-sm text-xs font-semibold">
              Báo cáo UNESCO 2018
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
            {/* Hypothesis 1 */}
            <div className="bg-surface p-space-sm rounded-xl shadow-sm flex flex-col gap-1 opacity-75 border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-error font-bold uppercase">
                  Giả thuyết 1 • Bác bỏ
                </span>
                <XCircle className="h-4 w-4 text-error" />
              </div>
              <h4 className="font-title-md text-sm font-semibold text-on-surface mt-1">
                Nung toàn khối sau xây
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Đắp tháp bằng gạch sống rồi chất củi đốt toàn bộ tòa tháp. Đã bị chứng minh là bất khả thi về mặt phân bố nhiệt độ và ứng suất kết cấu.
              </p>
            </div>

            {/* Hypothesis 2 */}
            <div className="bg-surface p-space-sm rounded-xl shadow-sm flex flex-col gap-1 border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-secondary font-bold uppercase">
                  Giả thuyết 2 • Bổ trợ
                </span>
                <CheckCircle2 className="h-4 w-4 text-secondary" />
              </div>
              <h4 className="font-title-md text-sm font-semibold text-on-surface mt-1">
                Keo nhựa thực vật bản địa
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Chiết xuất nhựa từ cây Dầu rái (<em>Dipterocarpus</em>) hoặc vỏ cây Bời lời rừng giã nhuyễn làm chất kết nối hữu cơ vi lượng chống thấm tuyệt đối.
              </p>
            </div>

            {/* Hypothesis 3 */}
            <div className="bg-surface p-space-sm rounded-xl shadow-sm flex flex-col gap-1 border-l-4 border-l-primary border border-outline-variant/20 bg-surface-container-lowest">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs text-primary font-bold uppercase">
                  Giả thuyết 3 • Xác thực
                </span>
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-title-md text-sm font-semibold text-on-surface mt-1">
                Mài chập cơ học & gạch non
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Gạch được nung non ở 800°C. Thợ cả tưới nước nhũ thảo mộc rồi mài trực tiếp hai mặt gạch vào nhau cho đến khi bột gạch tự gắn kết nguyên tử với nhau.
              </p>
            </div>
          </div>
        </div>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            Quy trình mài chập là một kỳ công thủ công phi thường. Những viên gạch non xốp, sau khi thấm đẫm dung dịch chiết xuất từ vỏ cây bời lời nhớt và mật mía, được những người thợ mài sát liên tục vào nhau theo phương ngang. Bột gạch mịn màng sinh ra từ quá trình ma sát hòa cùng dung dịch hữu cơ tạo thành một lớp bùn dẻo siêu vi mô (micro-paste). Khi khô lại, áp lực nén của trọng lượng tháp cùng phản ứng tái khoáng hóa khiến hai viên gạch kết liền thành một khối đồng nhất, không chừa ra dù chỉ 0.2 mm khoảng trống.
          </p>
        </div>

        {/* MACRO DETAIL MEDIA INSET (Magnifier zoom callout) */}
        <div className="my-space-md bg-surface-container rounded-2xl overflow-hidden shadow-md border border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Ảnh cận cảnh hiển vi bức tường gạch Champa Po Klong Garai không mạch vữa"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAYF-ns-weyLDJIEoOSROkdJoRSWvem00syLjV-oOOmVYSIqtV1kbGpJHLSRS_grkK-VMad8AAPaxTXsyCAuvRZg9YgUY88He-MsqdxwKNkFcnBksnyaqBe3JN7Q-zIE4o4fPQIoTH-6Iqp0DsvXRJjkbgnvBUgs5Mj1komg4R4YOAhHBsjcju3ZUzoPjRmO46RfHTZeOkhvjbT8ks3CZ4_oEoVxEgvczeuc1AnsUmZAGgSZ68nrPk3Q"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-surface/90 backdrop-blur rounded-full font-label-sm text-xs text-primary font-bold uppercase tracking-wider">
                Mặt tường Kalan chính
              </div>
            </div>

            <div className="p-space-md sm:p-space-lg flex flex-col justify-between gap-space-sm bg-surface-container-low">
              <div>
                <div className="flex items-center gap-space-xs text-secondary font-label-sm text-xs uppercase font-semibold">
                  <ZoomIn className="h-4 w-4" />
                  <span>Phân tích hiển vi điện tử SEM (Độ phóng đại 150x)</span>
                </div>
                <h4 className="font-serif text-xl text-on-surface mt-1 font-semibold">
                  Mạch ghép vi mô &lt; 0.3mm
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Ảnh chụp vi phẫu cho thấy các hạt khoáng sét (illite và quartz) ở bề mặt hai viên gạch đã thâm nhập chéo vào nhau qua lớp keo bời lời nung nhẹ. Tinh thể silica đan xen ngăn ngừa hoàn toàn mao dẫn nước, khiến nước mưa không thể xâm nhập và không tạo điều kiện cho rêu mốc phát triển.
                </p>
              </div>

              <div className="pt-space-xs bg-surface p-3 rounded-xl text-on-surface-variant font-label-sm text-xs flex items-center justify-between border border-outline-variant/30">
                <span>Mật độ kết cấu gạch: <strong>1.98 g/cm³</strong></span>
                <span>Độ hút nước: <strong>&lt; 6.2%</strong></span>
              </div>
            </div>
          </div>
          <div className="px-space-md py-2.5 bg-surface text-on-surface-variant text-xs text-center italic border-t border-surface-container/60">
            Hình 2.1: Cận cảnh mạch gạch khít khao tại vòm cửa phía Đông tháp Kalan. Không tìm thấy bất kỳ dấu vết vôi vữa như trong kiến trúc La Mã hay Angkor.
          </div>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section className="scroll-mt-24 flex flex-col gap-space-md" id="chuong-3">
        <div className="flex items-center gap-space-xs">
          <span className="font-mono text-primary font-bold text-lg">03 /</span>
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
            Biểu tượng & Điêu khắc
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
          Ngôn ngữ biểu tượng: Ngọn lửa hóa đá và cửa giả hư ảo
        </h2>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            Điểm đặc sắc tột cùng của Po Klong Garai không dừng lại ở sự liền khối của gạch, mà nằm ở <strong>nghệ thuật điêu khắc trực tiếp lên khối gạch đã xây</strong>. Sau khi tòa tháp đã được mài chập hoàn chỉnh thành một khối trụ vững như bàn thạch, các nghệ nhân điêu khắc Chăm mới bắt đầu trèo lên giàn giáo tre, dùng đục bạt và dao gọt trực tiếp vào thân gạch đỏ để tạo tác nên những phù điêu thần linh sống động.
          </p>
          <p>
            Ngay trên vòm cửa chính hướng Đông là bức phù điêu trứ danh bằng sa thạch tạc <strong>Vũ điệu Thần Shiva</strong> múa 6 tay – điệu múa sáng tạo và hủy diệt cõi luân hồi. Từng cánh tay cầm các pháp khí thiêng liêng: chén sọ Kapala, đinh ba Trisula, chuỗi tràng hạt Rudraksha, tạo nên nhịp điệu chuyển động linh thiêng tương phản mạnh mẽ với cấu trúc tĩnh tại của khối gạch.
          </p>
        </div>

        {/* Dual Imagery Grid: Shiva & False Door */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-sm">
          <div className="bg-surface-container rounded-2xl overflow-hidden shadow-sm flex flex-col border border-outline-variant/30">
            <div className="h-60 overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                alt="Phù điêu Thần Shiva Vũ Điệu Múa 6 Tay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAcTo9XsMg42z7huYN7cnsAp9rYPItzAEYJ2t1uL4ruxXUl98gvqzvACyrp3caFgwxIML-dD-RKXcjWGifHobSy96UzVdcaIjmx8nzKufFNyXm2tqQjK5l7Ex64LxYWY_yMDJwy5ERStlviEB4nzY3qaqqmeYGUzkUjzShDh5pK0BY_PXfFsbVch9FmPmcOG_EMC59AKPVgJwnRxxfD4xSW5ZaXqag8KKAXDMBOaIqcryFqbvZ1NsPqg"
              />
              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/75 text-on-primary font-label-sm text-[11px] backdrop-blur-sm">
                Trán cửa chính (Tympanum)
              </span>
            </div>
            <div className="p-space-md flex flex-col gap-1">
              <span className="font-title-md text-base font-semibold text-on-surface">
                Phù điêu Thần Shiva Vũ Điệu Múa 6 Tay
              </span>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Tượng trưng cho sự xoay vần của vũ trụ; bàn chân đặt trên lưng thần bò Nandin biểu tượng cho sự chế ngự dục vọng trần thế.
              </p>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl overflow-hidden shadow-sm flex flex-col border border-outline-variant/30">
            <div className="h-60 overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                alt="Hệ thống Cửa Giả tháp Po Klong Garai"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl-UhwYyl4FrEcQkpN2qGC_PPNdTaQXwI9hROd3rXlCBJkMisfK2YG1vQzyRI3_11NSgDwIOjj9eY7eka25G9xm_AyEMDS5cI7COYI_WJd4jvYgzEaJmjKxurAkOyZogujSxNVacODJ7fbCuk3U66A7Xb0VPjE0CvcwOfG_VKgcSpkGP83qd2_6dKJ7ss8tJdjrJnX7jliLqGr8Xxc3NtJM5eHCHT8RloKpqZF4d91UYZt2d0-_G-fcg"
              />
              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/75 text-on-primary font-label-sm text-[11px] backdrop-blur-sm">
                Hệ thống Cửa Giả (False Doors)
              </span>
            </div>
            <div className="p-space-md flex flex-col gap-1">
              <span className="font-title-md text-base font-semibold text-on-surface">
                Ba ô cửa giả hướng Tây, Nam, Bắc
              </span>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Nơi ngự của các vị thần che chở tam giới. Vòm cửa xếp lớp mô phỏng ngọn lửa vươn thẳng lên đỉnh cõi trời Meru.
              </p>
            </div>
          </div>
        </div>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            Càng lên cao, các tầng tháp Kalan càng thu nhỏ dần lại theo nguyên lý phối cảnh ảo ảnh không gian (forced perspective). Các góc mái được trang trí bằng hình tượng chim thần Garuda xòe cánh, hoa sen cách điệu và những tháp góc thu nhỏ nhọn hoắt như những búp măng lửa (flame motifs) đang bốc cháy lên nền trời xanh thẳm của Ninh Thuận.
          </p>
        </div>
      </section>

      {/* CHAPTER 4: CONSERVATION CRISIS & SCIENTIFIC APPEAL */}
      <section className="scroll-mt-24 flex flex-col gap-space-md" id="chuong-4">
        <div className="flex items-center gap-space-xs">
          <span className="font-mono text-primary font-bold text-lg">04 /</span>
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
            Trăn trở đương đại
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold">
          Thách thức bảo tồn trong kỷ nguyên mới: Lắng nghe tiếng thở của gạch
        </h2>

        <div className="font-body-lg text-base sm:text-lg text-on-surface-variant space-y-space-md leading-relaxed text-justify">
          <p>
            Di sản cổ xưa đang đối mặt với những mối đe dọa chưa từng có. Tác động của biến đổi khí hậu làm gia tăng hiện tượng sa mạc hóa và sương muối từ biển Đông thâm nhập sâu vào đất liền. Nhưng nghiêm trọng hơn cả là những sai lầm trong quá khứ khi dùng xi măng poóc-lăng hiện đại để trát vá các vết nứt của tháp trong những thập niên 1980 - 1990.
          </p>
          <p>
            Xi măng cứng và không thở được đã ngăn cản sự bốc hơi nước tự nhiên của khối gạch cổ, tạo ra hiện tượng tụ muối sunfat bên trong lõi tường và phá nát mặt ngoài của gạch Chăm từ bên trong. Chỉ khi các nhà khoa học Ba Lan (tiêu biểu là cố KTS. Kazimierz Kwiatkowski - người bạn lớn của di sản Chăm) cùng các nghệ nhân làng gốm Bàu Trúc bắt tay phục chế loại gạch nung non bằng củi me tây và nhựa thực vật truyền thống, "vết thương" của tháp mới dần được khép lại bằng phương pháp tương thích sinh học.
          </p>
        </div>

        {/* Conservation Callout Box */}
        <div className="p-space-lg rounded-2xl bg-surface-container-high/60 shadow-sm flex flex-col md:flex-row items-center gap-space-md border border-outline-variant/30">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Flame className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h3 className="font-serif text-xl text-on-surface font-semibold">
              Sứ mệnh Hoàn lưu Di sản Dana Champa
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Mỗi lượt khách tham gia hành trình trải nghiệm hay ủng hộ ấn bản khảo cứu này đều đóng góp trực tiếp 70% ngân quỹ cho dự án lưu trữ số hóa 3D scan Li-DAR và quỹ hỗ trợ các nghệ nhân cao niên tại làng Mỹ Nghiệp và Bàu Trúc trong việc truyền dạy bí quyết luyện gốm & đất nung cổ.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GLOSSARY FOOTNOTES */}
      <section className="mt-space-lg pt-space-lg bg-surface-container-low p-space-md sm:p-space-lg rounded-2xl shadow-sm border border-outline-variant/30">
        <h3 className="font-serif text-xl text-on-surface mb-space-sm flex items-center gap-2 font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          <span>Thuật ngữ Di sản & Chú giải Chuyên môn (Glossary)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm text-xs sm:text-sm">
          <div className="bg-surface p-space-sm rounded-xl shadow-sm border border-outline-variant/20">
            <span className="font-title-md font-semibold text-primary block">
              Kalan (Đền Tháp)
            </span>
            <span className="text-on-surface-variant mt-1 block leading-relaxed">
              Ngôi đền thờ chính có cửa quay về hướng Đông, nơi lưu giữ ngẫu tượng Yoni-Linga hoặc tượng thần vua hóa thân.
            </span>
          </div>

          <div className="bg-surface p-space-sm rounded-xl shadow-sm border border-outline-variant/20">
            <span className="font-title-md font-semibold text-secondary block">
              Akhar Thrah (Chữ Chăm)
            </span>
            <span className="text-on-surface-variant mt-1 block leading-relaxed">
              Hệ thống văn tự truyền thống có nguồn gốc từ chữ Brahmi Ấn Độ, dùng để ghi chép kinh thư tôn giáo và minh văn trên vách đá.
            </span>
          </div>

          <div className="bg-surface p-space-sm rounded-xl shadow-sm border border-outline-variant/20">
            <span className="font-title-md font-semibold text-primary block">
              Paley (Làng / Plei)
            </span>
            <span className="text-on-surface-variant mt-1 block leading-relaxed">
              Cộng đồng cư dân làng truyền thống của người Chăm, nơi duy trì chế độ mẫu hệ và các dòng họ nghệ nhân thủ công.
            </span>
          </div>

          <div className="bg-surface p-space-sm rounded-xl shadow-sm border border-outline-variant/20">
            <span className="font-title-md font-semibold text-secondary block">
              Mukha-Linga
            </span>
            <span className="text-on-surface-variant mt-1 block leading-relaxed">
              Biểu tượng ngẫu tượng sinh thực khí Linga có khắc tạc khuôn mặt của vị thần Siva hoặc vị vua được tôn thờ tại gian chính điện Kalan.
            </span>
          </div>
        </div>
      </section>

      {/* AUTHOR SIGN-OFF */}
      <div className="flex items-center justify-between p-space-md bg-surface-container rounded-2xl border border-outline-variant/30 flex-wrap gap-2">
        <div className="flex items-center gap-space-sm">
          <Feather className="h-5 w-5 text-secondary shrink-0" />
          <span className="font-body-md text-xs sm:text-sm text-on-surface italic">
            Khảo cứu hoàn tất tại Đô Vinh, tháng 10 năm 2024. Bản thảo lưu trữ số #DNC-2024-K01.
          </span>
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-container transition-colors cursor-pointer"
          type="button"
        >
          <ArrowUp className="h-4 w-4" />
          <span>Lên đầu trang</span>
        </button>
      </div>
    </article>
  );
}
