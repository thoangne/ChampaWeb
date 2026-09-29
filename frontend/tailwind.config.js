import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
const be = ['Be Vietnam Pro', 'sans-serif'];
const pf = ['Playfair Display', 'serif'];

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- shadcn/ui tokens (map vào bảng màu Champa) ---
        border: '#dfc0b8', input: '#dfc0b8', ring: '#972f12', foreground: '#241915',
        card: { DEFAULT: '#ffffff', foreground: '#241915' },
        popover: { DEFAULT: '#ffffff', foreground: '#241915' },
        muted: { DEFAULT: '#f9e4dd', foreground: '#58423c' },
        accent: { DEFAULT: '#ffe9e2', foreground: '#241915' },
        destructive: { DEFAULT: '#ba1a1a', foreground: '#ffffff' },

        'on-surface-variant': '#58423c', 'secondary-fixed-dim': '#ffb77a', 'primary-fixed-dim': '#ffb4a1',
        'on-secondary-fixed-variant': '#6d3a00', 'tertiary-container': '#526e87', 'inverse-on-surface': '#ffede7',
        'on-primary-container': '#ffe8e3', 'surface-container-lowest': '#ffffff', 'inverse-primary': '#ffb4a1',
        'on-error': '#ffffff', 'on-tertiary-fixed': '#001e31', 'secondary-container': '#fea047', 'surface-tint': '#a73a1d',
        'on-surface': '#241915', 'surface-container': '#ffe9e2', 'on-tertiary-container': '#e0efff', 'surface-bright': '#fff8f6',
        'tertiary-fixed': '#cce5ff', secondary: { DEFAULT: '#8f4e00', foreground: '#ffffff' }, 'tertiary-fixed-dim': '#accae6', 'primary-container': '#b84628',
        'surface-container-highest': '#f3ded7', 'surface-container-high': '#f9e4dd', 'secondary-fixed': '#ffdcc2',
        tertiary: '#39566d', outline: '#8b716b', 'on-primary-fixed': '#3c0800', 'surface-container-low': '#fff1ec',
        'on-error-container': '#93000a', 'on-background': '#241915', 'on-secondary-container': '#6d3a00',
        'on-tertiary': '#ffffff', 'on-secondary': '#ffffff', 'on-primary': '#ffffff', 'on-tertiary-fixed-variant': '#2d4a61',
        'on-primary-fixed-variant': '#862206', error: '#ba1a1a', background: '#fff8f6', 'on-secondary-fixed': '#2e1500',
        'surface-variant': '#f3ded7', 'outline-variant': '#dfc0b8', 'error-container': '#ffdad6', surface: '#fff8f6',
        primary: { DEFAULT: '#972f12', foreground: '#ffffff' }, 'inverse-surface': '#3a2e29', 'surface-dim': '#ebd6cf', 'primary-fixed': '#ffdbd2',
      },
      borderRadius: { DEFAULT: '0.125rem', lg: '0.25rem', xl: '0.5rem', full: '0.75rem' },
      spacing: {
        'space-xl': '2.5rem', 'space-xs': '0.25rem', margin: '3rem', gutter: '1.5rem', 'gutter-mobile': '1rem',
        'space-sm': '0.5rem', 'margin-mobile': '1.25rem', 'space-lg': '1.5rem', 'space-md': '1rem',
      },
      fontFamily: {
        'body-md': be, 'label-sm': be, 'title-md': be, 'body-sm': be, 'label-lg': be, 'label-md': be, 'title-lg': be, 'body-lg': be,
        'headline-lg': pf, 'headline-md': pf, 'headline-sm': pf, 'display-lg': pf, 'display-lg-mobile': pf, 'headline-lg-mobile': pf,
      },
      fontSize: {
        'body-md': ['15px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        'label-sm': ['10px', { lineHeight: '14px', letterSpacing: '0.12em', fontWeight: '600' }],
        'title-md': ['16px', { lineHeight: '24px', letterSpacing: '0.01em', fontWeight: '600' }],
        'body-sm': ['13px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '400' }],
        'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['28px', { lineHeight: '36px', letterSpacing: '0', fontWeight: '500' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.06em', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '500' }],
        'title-lg': ['18px', { lineHeight: '26px', letterSpacing: '0', fontWeight: '600' }],
        'headline-sm': ['22px', { lineHeight: '30px', letterSpacing: '0.01em', fontWeight: '500' }],
        'display-lg': ['56px', { lineHeight: '68px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0.01em', fontWeight: '400' }],
        'display-lg-mobile': ['38px', { lineHeight: '46px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '0', fontWeight: '600' }],
      },
    },
  },
  plugins: [animate],
};
