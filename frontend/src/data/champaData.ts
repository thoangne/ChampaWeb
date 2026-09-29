import type { NavItem, Testimonial, Tour, Waypoint } from '../types/heritage';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA8pmruKOFThAklkUBt3Dr_Efa4HrMrgSyhUnMLwlzXi2AfaZ6MJo900yTWgO87EFl4toG7ZcFPI1GtRNfkcZpSNNGvw9HusC53kNh4_CUYnlJr4TU9zHMhRZemrVjSY1SzRoTJfM5GWHcDadv-UYF-jDtdhEAci3gnsfPk6ut7yXAwF-yhzgvPZ0hmEmCOSYPIIcJY8Nicufsa3RIh6RFJ3jX6UBfNhYIq86WF_VdNQHu6Hi2LS8Rpg';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGi4ZrMVPgv0DZTeazcl9xBmgMPbILKbLeMkQwoseksXokyUW9M8iaEq2PgXSgTLXoKVfxP-ilB2ne6SG-w5Q6ZRxyzWBTgPCBCmbYSD0K5u7NMMn1PTKseCFVnwHYuA4YdPZIm06yUhfhsM3x7mRhtPGfUrVcwgoLq4C_nQo9RVmLzaX070J4RNxYKLU09b5h0udtgbDoV6v_mE1pM-BSTuZT1Af_55SVE1LgIJYLoT5X1V1rwlXBg';

export const MAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUfYzm1NZ4arEZYOjXP-ADVRrL2xvxRYpA11bkxwybvUPyaLDDHcbzdna3ORWQdNhRZ691hmCL8NhJzSAjGU5gLcf6loBzxm9LlDDjY-bDf5UiEUEa8dCbgRQO5NwMElBhJX6SjLnotVvZ4SesvgT8Thywsaeywlcgwf1tW1jO8xFQbtJMa3R7BXOwL3MrVqNKr5Y-maFTUq9d3YpEzE5Uvj6QVImJxg-rCyKTWSyfkqmmjoELc7hWkA';

export const ARTISAN_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYK61rpwBLH-q6nuL4Fc2DSMV9wr3oVAQcsOsGtsTGkC7XQtBHaJD10id6leier9i_IEzuuC0kQnfsC3MLmtbGE7hzPWe9tK2NnAvFrri6y_DZnh2jCysg0z4sPZ_05rIDK7P5nOI7S7ab8joooFe403Bv0yGSWQYKvenEBx0Q_nVxOxRkoaaXviW-0R95317JKv8ffX4p9n6b4o3_S6hjDwM5iONcMyTPKoRT2epucw4SpZrWl_E4nA';

export const MANIFESTO_STATS = [
  { value: '100%', label: 'Nghệ nhân bản địa', className: 'text-primary' },
  { value: '02', label: 'Làng cổ Đông Nam Á', className: 'text-secondary' },
  { value: 'UNESCO', label: 'Di sản bảo tồn', className: 'text-tertiary' },
];

export const TOURS: Tour[] = [
  {
    id: 1,
    badge: 'UNESCO Heritage',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    duration: '1 Ngày',
    location: 'Làng Gốm Bàu Trúc',
    price: 'Từ 650.000đ',
    title: 'Ký ức Bàu Trúc: Đất sét, Lửa & Bàn tay Người Mẹ',
    description: 'Học kỹ thuật nặn gốm “tay quay, chân chạy” không bàn xoay, chứng kiến nghi thức nổi lửa nung lộ thiên rơm rạ rực khói chiều hoàng hôn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA1qd3wd4H9rql4c2RFG4UARX3D0o_ONETTWqT3p4q6AJ6m42r9JYLWkDmljAwvW0tuBiZXltd9MQMFI_pENmpWTkO-5fABt5t_kiYfrMQ3QmUnF1BmLSRQ3uBLQ4H6oT6rGuR8aAM48fEev59ST_V5kCjhnw6qGFOo0QYQhl5NLpKV9brvunkPoJGCC3LB9bKOuZLgmCcsRyZT5vgdLeVFLUhIN0jcdXPeOWIIRsE5fyvB0th-WhFrA',
    chips: [
      { label: 'Gốm không bàn xoay', className: 'text-primary' },
      { label: 'Nung lộ thiên rơm', className: 'text-on-surface-variant' },
      { label: 'Trò chuyện Muk Phan', className: 'text-secondary' },
    ],
  },
  {
    id: 2,
    badge: 'Kiến trúc & Lịch sử',
    badgeClass: 'bg-primary-container text-on-primary-container',
    duration: 'Nửa ngày',
    location: 'Cụm Tháp Đô Vinh',
    price: 'Từ 450.000đ',
    title: 'Huyền thoại Kalan: Tháp cổ dưới vòm trời Panduranga',
    description: 'Giải mã bí ẩn kỹ thuật mài chập gắn kết gạch Chăm ngàn năm không vôi vữa, lắng nghe văn bia cổ và hòa mình vào độc tấu kèn Saranai.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoJTrQmxZalm9DCpbg-OrKoyI2aUB70X1NhQ5-L0MfEUQk1KwqxnkOyxF5jkTIr1e-Ruk3Pftm1O304UAxlSgvXYM0J_v-HCO2S-Hv1xlKiNHWSvQwB2IuK-rasesk6bz6hm0AsCPJs1-q9xuvTqqy58gghWm3jVeaGATgeQWf78xR8frvovrSisrfEFEk7t9nC78-E4EQoT0rKXMRcSwc8T07Ie6E3JwUdWKeQhSMZTLZYp4-2k2nsw',
    chips: [
      { label: 'Ghép gạch không vữa', className: 'text-primary' },
      { label: 'Văn bia cổ Phạn - Chăm', className: 'text-on-surface-variant' },
      { label: 'Độc tấu Saranai', className: 'text-secondary' },
    ],
  },
  {
    id: 3,
    badge: 'Trải nghiệm Sâu',
    badgeClass: 'bg-tertiary-container text-on-tertiary-container',
    duration: '2N1Đ',
    location: 'Làng Mỹ Nghiệp',
    price: 'Từ 1.850.000đ',
    title: 'Đêm Katê thiêng liêng & Nhịp thở Làng dệt',
    description: 'Nghỉ đêm homestay bản địa, khoác thử trang phục truyền thống Chăm hoa văn dệt Mỹ Nghiệp và thưởng thức mâm cơm cổ truyền Um Bơk thắm tình.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZcQx9kfudplqxbFYgc1MQlzLzO77p1zpSRmFiwjJAs7lPSYNafVxcAeX1dcNS5H8bQRsXueo70hk0lANEw8ZtjwbF5nvlAj3fIImf--2QSp0kvr9sg2prm0zbrYctKapJXNssEwslR5pJBoUff0TzZH9PIg4IMSIeHSJGu9QcfUemNgAxKtSKAblFqx-MZJowbK3F4s6qbM4VgytBa-m-HygAHkqTaIOKezz1IWzUAQx54YAzUW3Dsw',
    chips: [
      { label: 'Homestay Chăm mộc mạc', className: 'text-primary' },
      { label: 'Dệt thổ cẩm cổ truyền', className: 'text-on-surface-variant' },
      { label: 'Ẩm thực Um Bơk', className: 'text-secondary' },
    ],
  },
];

export const WAYPOINTS: Waypoint[] = [
  { id: 1, icon: 'temple_hindu', shortName: '1. Po Klong Garai', district: 'Đô Vinh', title: 'Tháp Po Klong Garai', sub: 'Cách Phan Rang 7km • 07:00 - 17:30', rules: 'Trang phục kín đáo qua đầu gối, áo có tay. Không leo trèo lên gạch tháp.' },
  { id: 2, icon: 'potted_plant', shortName: '2. Gốm Bàu Trúc', district: 'Phước Dân', title: 'Làng Gốm Bàu Trúc', sub: 'Cách Phan Rang 10km • Mở cửa cả ngày', rules: 'Trang phục thoải mái, tháo giày dép khi bước vào sân nhà cổ Muk.' },
  { id: 3, icon: 'texture', shortName: '3. Dệt Mỹ Nghiệp', district: 'Ninh Phước', title: 'Làng Dệt Mỹ Nghiệp', sub: 'Cách Bàu Trúc 2km • 08:00 - 18:00', rules: 'Tôn trọng khung dệt cổ, hỏi ý kiến trước khi chụp cận cảnh nghệ nhân luồn sợi.' },
  { id: 4, icon: 'account_balance', shortName: '4. Tháp Po Rome', district: 'Hậu Sanh', title: 'Tháp Thiêng Po Rome', sub: 'Cách Phan Rang 18km • 07:30 - 17:00', rules: 'Tháp còn nghi lễ thờ cúng linh thiêng, giữ trật tự và bỏ nón khi vào kalan.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, initials: 'TM', name: 'Thảo My', origin: 'TP. Hồ Chí Minh', avatarClass: 'bg-secondary-container text-on-secondary-container', content: '“Đi tour của Dana, lần đầu tiên mình hiểu vì sao phụ nữ Chăm lại đi lùi quanh khối đất để làm gốm. Cảm xúc trân quý vô cùng! Cảm giác như được chạm vào mạch nguồn văn hóa chứ không phải cưỡi ngựa xem hoa.”' },
  { id: 2, initials: 'DM', name: 'David Miller', origin: 'Melbourne, Úc', avatarClass: 'bg-tertiary-container text-on-tertiary-container', content: '“Authentic and deeply respectful. Not a tourist trap, but a real connection with living heritage. The sound of the Saranai horn at dusk next to the ancient Kalan tower will stay with me forever.”' },
];

export const NAV_ITEMS: NavItem[] = [
  { path: 'cong-di-san', icon: 'temple_buddhist', label: 'Cổng di sản' },
  { path: 'hanh-trinh-kham-pha', icon: 'explore', label: 'Hành trình' },
  { path: 'ban-do-thap-cham', icon: 'map', label: 'Bản đồ số' },
  { path: 'dat-tour-trai-nghiem', icon: 'calendar_month', label: 'Đặt tour' },
];

export const DESTINATION_OPTIONS = [
  'Trọn vẹn Panduranga (3 ngày 2 đêm)',
  'Làng Gốm Bàu Trúc & Dệt Mỹ Nghiệp (1 ngày)',
  'Cụm tháp Po Klong Garai & Po Rome (1 ngày)',
  'Tour Đêm hội Katê huyền bí (2 ngày 1 đêm)',
];

export const TRAVELER_OPTIONS = [
  '2 Người (Cặp đôi / Bạn bè)',
  '3 - 5 Người (Gia đình)',
  'Đoàn trên 6 người',
  'Đi một mình (Solo traveler)',
];
