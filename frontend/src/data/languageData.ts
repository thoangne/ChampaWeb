export interface AkharLetter {
  char: string;
  name: string;
  transliteration: string;
  type: 'consonant' | 'vowel' | 'sign';
  ipa: string;
  sampleWord: string;
  meaning: string;
}

export interface ChamWord {
  id: string;
  cham: string;
  transliteration: string;
  vietnamese: string;
  category: 'greeting' | 'number' | 'family' | 'craft' | 'culture';
  exampleSentence?: string;
  exampleMeaning?: string;
}

export interface ChamProverb {
  id: string;
  cham: string;
  transliteration: string;
  vietnamese: string;
  philosophy: string;
}

export const AKHAR_LETTERS: AkharLetter[] = [
  {
    char: 'ꨀ',
    name: 'Inâ Akhar A',
    transliteration: 'A',
    type: 'vowel',
    ipa: '/aː/',
    sampleWord: 'Asaw',
    meaning: 'Con chó',
  },
  {
    char: 'ꨁ',
    name: 'Inâ Akhar I',
    transliteration: 'I',
    type: 'vowel',
    ipa: '/iː/',
    sampleWord: 'Inâ',
    meaning: 'Mẹ, giống cái, cội nguồn',
  },
  {
    char: 'ꨂ',
    name: 'Inâ Akhar U',
    transliteration: 'U',
    type: 'vowel',
    ipa: '/uː/',
    sampleWord: 'Urăng',
    meaning: 'Người ta, con người',
  },
  {
    char: 'ꨆ',
    name: 'Măt Akhar Ka',
    transliteration: 'Ka',
    type: 'consonant',
    ipa: '/ka/',
    sampleWord: 'Kalan',
    meaning: 'Đền tháp thiêng Champa',
  },
  {
    char: 'ꨇ',
    name: 'Măt Akhar Kha',
    transliteration: 'Kha',
    type: 'consonant',
    ipa: '/kʰa/',
    sampleWord: 'Khat',
    meaning: 'Cắt, gặt lúa',
  },
  {
    char: 'ꨈ',
    name: 'Măt Akhar Ga',
    transliteration: 'Ga',
    type: 'consonant',
    ipa: '/ga/',
    sampleWord: 'Ginăng',
    meaning: 'Trống đôi Ginăng cổ truyền',
  },
  {
    char: 'ꨌ',
    name: 'Măt Akhar Ca',
    transliteration: 'Ca',
    type: 'consonant',
    ipa: '/ca/',
    sampleWord: 'Caklaing',
    meaning: 'Làng dệt thổ cẩm Mỹ Nghiệp',
  },
  {
    char: 'ꨎ',
    name: 'Măt Akhar Ja',
    transliteration: 'Ja',
    type: 'consonant',
    ipa: '/ɟa/',
    sampleWord: 'Ja',
    meaning: 'Ông, tiền tố tôn xưng nam giới',
  },
  {
    char: 'ꨓ',
    name: 'Măt Akhar Ta',
    transliteration: 'Ta',
    type: 'consonant',
    ipa: '/ta/',
    sampleWord: 'Tanran',
    meaning: 'Đất sét nắn gốm',
  },
  {
    char: 'ꨕ',
    name: 'Măt Akhar Da',
    transliteration: 'Da',
    type: 'consonant',
    ipa: '/ɗa/',
    sampleWord: 'Dana',
    meaning: 'Sự cúng dường, hạt ngọc di sản',
  },
  {
    char: 'ꨚ',
    name: 'Măt Akhar Pa',
    transliteration: 'Pa',
    type: 'consonant',
    ipa: '/pa/',
    sampleWord: 'Paley',
    meaning: 'Làng, buôn sóc người Chăm',
  },
  {
    char: 'ꨠ',
    name: 'Măt Akhar Ma',
    transliteration: 'Ma',
    type: 'consonant',
    ipa: '/ma/',
    sampleWord: 'Muk',
    meaning: 'Bà, mẹ cả, người phụ nữ đáng kính',
  },
  {
    char: 'ꨢ',
    name: 'Măt Akhar Ya',
    transliteration: 'Ya',
    type: 'consonant',
    ipa: '/ja/',
    sampleWord: 'Yang',
    meaning: 'Thần linh, trời đất thiêng liêng',
  },
  {
    char: 'ꨣ',
    name: 'Măt Akhar Ra',
    transliteration: 'Ra',
    type: 'consonant',
    ipa: '/ra/',
    sampleWord: 'Rija',
    meaning: 'Mùa lễ hội chuyển mùa Rija Nưgar',
  },
  {
    char: 'ꨤ',
    name: 'Măt Akhar La',
    transliteration: 'La',
    type: 'consonant',
    ipa: '/la/',
    sampleWord: 'Linga',
    meaning: 'Bảo vật biểu tượng sinh thực khí nam',
  },
  {
    char: 'ꨥ',
    name: 'Măt Akhar Sa',
    transliteration: 'Sa',
    type: 'consonant',
    ipa: '/sa/',
    sampleWord: 'Saranai',
    meaning: 'Chiếc kèn thiêng 7 lỗ của người Chăm',
  },
];

export const CHAM_WORDS: ChamWord[] = [
  {
    id: 'w-1',
    cham: 'ꨌꨯꨱꨡ ꨧꨤꨭꨩꨠꨄ',
    transliteration: 'Côi Salumai',
    vietnamese: 'Xin chào / Kính chúc an lành',
    category: 'greeting',
    exampleSentence: 'Côi salumai muk mik abih!',
    exampleMeaning: 'Kính chào bà con cô bác tất cả mọi người!',
  },
  {
    id: 'w-2',
    cham: 'ꨓꨮꨡ ꨲꨔꨮꨡ',
    transliteration: 'Taon hu / Kamơn',
    vietnamese: 'Cảm ơn rất nhiều',
    category: 'greeting',
    exampleSentence: 'Kamơn yaom khang ka drây!',
    exampleMeaning: 'Chân thành cảm ơn sự đồng hành giúp đỡ!',
  },
  {
    id: 'w-3',
    cham: 'ꨧ',
    transliteration: 'Sa',
    vietnamese: 'Số một (01)',
    category: 'number',
  },
  {
    id: 'w-4',
    cham: 'ꨕꨶ',
    transliteration: 'Dua',
    vietnamese: 'Số hai (02)',
    category: 'number',
  },
  {
    id: 'w-5',
    cham: 'ꨆꨤꨯꨱ',
    transliteration: 'Klau',
    vietnamese: 'Số ba (03)',
    category: 'number',
  },
  {
    id: 'w-6',
    cham: 'ꨚꨆ',
    transliteration: 'Pak',
    vietnamese: 'Số bốn (04)',
    category: 'number',
  },
  {
    id: 'w-7',
    cham: 'ꨤꨪꨠ',
    transliteration: 'Lima',
    vietnamese: 'Số năm (05)',
    category: 'number',
  },
  {
    id: 'w-8',
    cham: 'ꨚꨤꨯꨮꨈ',
    transliteration: 'Paley',
    vietnamese: 'Làng xóm / Quê hương',
    category: 'culture',
    exampleSentence: 'Paley Champa bingu riya.',
    exampleMeaning: 'Làng người Chăm hoa nở thắm tươi.',
  },
  {
    id: 'w-9',
    cham: 'ꨆꨤꨗ',
    transliteration: 'Kalan',
    vietnamese: 'Đền tháp gạch nung',
    category: 'culture',
  },
  {
    id: 'w-10',
    cham: 'ꨠꨭꨆ',
    transliteration: 'Muk',
    vietnamese: 'Bà / Mẹ cả',
    category: 'family',
  },
  {
    id: 'w-11',
    cham: 'ꨀꨠꨮ',
    transliteration: 'Amư',
    vietnamese: 'Cha / Bố',
    category: 'family',
  },
  {
    id: 'w-12',
    cham: 'ꨕꨨꨤꨆ',
    transliteration: 'Dahlak',
    vietnamese: 'Tôi / Bản thân tôi',
    category: 'greeting',
  },
  {
    id: 'w-13',
    cham: 'ꨆꨓꨯꨮ',
    transliteration: 'Katê',
    vietnamese: 'Đại lễ Katê truyền thống',
    category: 'culture',
  },
  {
    id: 'w-14',
    cham: 'ꨆꨚꨧ',
    transliteration: 'Kapas',
    vietnamese: 'Cây bông vải dệt thổ cẩm',
    category: 'craft',
  },
];

export const CHAM_PROVERBS: ChamProverb[] = [
  {
    id: 'p-1',
    cham: 'ꨕꨳꨯꨮꨡ ꨆꨤꨁꨭꨡ ꨧꨪꨓꨪꨡ ꨤꨪꨠꨯꨱꨡ ꨀꨤꨵꨯꨮꨡ.',
    transliteration: 'Dua klau sitik, limow alow.',
    vietnamese: 'Hai ba lời nhỏ nhẹ, năm bảy mối hòa êm.',
    philosophy:
      'Đề cao sự khiêm nhường, hòa ái trong giao tiếp thường nhật của cộng đồng cư dân ven đồi cát Panduranga.',
  },
  {
    id: 'p-2',
    cham: 'ꨕꨮꨡ ꨕꨶꨤ ꨆꨱꨤꨰꨡ ꨕꨮꨡ ꨚꨤꨯꨮꨈ.',
    transliteration: 'Daok dua glai, daok paley.',
    vietnamese: 'Sống giữ lấy rừng, ở giữ lấy làng.',
    philosophy:
      'Triết lý tôn trọng thiên nhiên và gắn kết cộng đồng làng mẫu hệ bền chặt qua bao thế kỷ thăng trầm.',
  },
  {
    id: 'p-3',
    cham: 'ꨡꨪꨡ ꨨꨭ ꨆꨵꨯꨱꨡ ꨕꨳꨯꨮꨡ ꨓꨯꨱꨡ ꨆꨤꨗ.',
    transliteration: 'Oh hu glơ dua tagok kalan.',
    vietnamese: 'Không có lòng chí kính, chớ bước lên tháp thiêng.',
    philosophy:
      'Lời răn dạy con cháu về lòng tôn kính cội nguồn và thánh địa của các vị quân vương hộ quốc.',
  },
];
