import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Khai báo các cỡ chữ tuỳ biến để tailwind-merge không nhầm chúng với màu chữ
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{
        text: ['body-md', 'body-sm', 'body-lg', 'label-sm', 'label-md', 'label-lg', 'title-md', 'title-lg',
          'headline-sm', 'headline-md', 'headline-lg', 'display-lg', 'display-lg-mobile', 'headline-lg-mobile'],
      }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
