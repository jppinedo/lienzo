/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {

    colors: {
      // Colors are mapped from CSS variables in `src/css/tokens.css`
      'gray-100': 'rgb(var(--lz-gray-100) / <alpha-value>)',
      'gray-300': 'rgb(var(--lz-gray-300) / <alpha-value>)',
      'gray-600': 'rgb(var(--lz-gray-600) / <alpha-value>)',
      'gray-700': 'rgb(var(--lz-gray-700) / <alpha-value>)',
      'gray-800': 'rgb(var(--lz-gray-800) / <alpha-value>)',
      'gray-900': 'rgb(var(--lz-gray-900) / <alpha-value>)',
      'gray-opacity-14': 'rgb(var(--lz-gray-300) / 0.14)',
      'gray-opacity-20': 'rgb(var(--lz-gray-300) / 0.2)',
      'gray-opacity-30': 'rgb(var(--lz-gray-300) / 0.3)',
      'white': 'rgb(var(--lz-white) / <alpha-value>)',
      'white-opacity-14': 'rgb(var(--lz-white) / 0.14)',
      'black': 'rgb(var(--lz-black) / <alpha-value>)',
      'black-opacity-14': 'rgb(var(--lz-black) / 0.14)',
      'black-opacity-20': 'rgb(var(--lz-black) / 0.2)',
      'red': 'rgb(var(--lz-red) / <alpha-value>)',
      'red-dark': 'rgb(var(--lz-red-dark) / <alpha-value>)',
      'red-bright': 'rgb(var(--lz-red-bright) / <alpha-value>)',
      'red-opacity-14': 'rgb(var(--lz-red) / 0.14)',
      'red-opacity-20': 'rgb(var(--lz-red) / 0.2)',
      'red-opacity-30': 'rgb(var(--lz-red) / 0.3)',
      'red-300': 'rgb(var(--lz-red-300) / <alpha-value>)',
      'yellow': 'rgb(var(--lz-yellow) / <alpha-value>)',
      'yellow-dark': 'rgb(var(--lz-yellow-dark) / <alpha-value>)',
      'yellow-bright': 'rgb(var(--lz-yellow-bright) / <alpha-value>)',
      'yellow-ghost': 'rgb(var(--lz-yellow) / 0.14)',
      'green': 'rgb(var(--lz-green) / <alpha-value>)',
      'green-bright': 'rgb(var(--lz-green-bright) / <alpha-value>)',
      'green-opacity-14': 'rgb(var(--lz-green) / 0.14)',
      'green-opacity-20': 'rgb(var(--lz-green) / 0.2)',
      'green-opacity-30': 'rgb(var(--lz-green) / 0.3)',
      'green-300': 'rgb(var(--lz-green-300) / <alpha-value>)',
      'blue-200': 'rgb(var(--lz-blue-200) / <alpha-value>)',
      'blue-400': 'rgb(var(--lz-blue-400) / <alpha-value>)',
      'blue-600': 'rgb(var(--lz-blue-600) / <alpha-value>)',

      'slate-700': 'rgb(var(--lz-slate-700) / <alpha-value>)',
      'sage-600': 'rgb(var(--lz-sage-600) / <alpha-value>)',
      'transparent': 'transparent',
  
      // ── New colors extracted from the full Pio Chart UI ──
  
      // Chart background / card (very light warm off-white)
      'pio-bg': 'rgb(var(--lz-pio-bg) / <alpha-value>)', // main container background
      'pio-bg-light': 'rgb(var(--lz-pio-bg-light) / <alpha-value>)', // slightly darker variant if needed
      'pio-bg-opacity-90': 'rgb(var(--lz-pio-bg-opacity-90) / 0.9)',
  
      // Active tab/button color (dark teal/cyan used in the selected "Chart" pill)
      'pio-teal-dark': 'rgb(var(--lz-pio-teal-dark) / <alpha-value>)', // ≈ button background
      'pio-teal-dark-hover': 'rgb(var(--lz-pio-teal-dark-hover) / <alpha-value>)', // slight hover/lighter variant
      'pio-teal-dark-opacity-20': 'rgb(var(--lz-pio-teal-dark) / 0.2)',
      'pio-teal-black': 'rgb(var(--lz-pio-teal-black) / <alpha-value>)',
  
      // Accent colors from the lines & points (refined from visual match)
      'pio-coral': 'rgb(var(--lz-pio-coral) / <alpha-value>)', // red/coral points (Mon, Fri, Sun, etc.)
      'pio-teal': 'rgb(var(--lz-pio-teal) / <alpha-value>)', // teal/cyan points (Tue, Wed, Sat)
      'pio-amber': 'rgb(var(--lz-pio-amber) / <alpha-value>)', // orange/amber points & lines (Thu, Fri/Sat trend)
      'pio-stone': 'rgb(var(--lz-pio-stone) / <alpha-value>)', // brown/earthy points & lines (Mon, Thu, Sun)
  
      // Opacity variants for accents (matching your style)
      'pio-coral-opacity-14': 'rgb(var(--lz-pio-coral) / 0.14)',
      'pio-teal-opacity-14': 'rgb(var(--lz-pio-teal) / 0.14)',
      'pio-amber-opacity-14': 'rgb(var(--lz-pio-amber) / 0.14)',
      'pio-stone-opacity-14': 'rgb(var(--lz-pio-stone) / 0.14)',
  
      // Text & subtle elements
      'pio-text': 'rgb(var(--lz-pio-text) / <alpha-value>)', // main chart title & labels (very dark gray)
      'pio-text-muted': 'rgb(var(--lz-pio-text-muted) / <alpha-value>)', // secondary text like days/numbers if not using gray-600
      'pio-grid': 'rgb(var(--lz-pio-grid) / <alpha-value>)', // subtle grid lines / axis (light gray)
  
      // Optional: if you want numbered shades like Tailwind defaults
      'pio-coral-500': 'rgb(var(--lz-pio-coral) / <alpha-value>)',
      'pio-teal-500': 'rgb(var(--lz-pio-teal) / <alpha-value>)',
      'pio-amber-500': 'rgb(var(--lz-pio-amber) / <alpha-value>)',
      'pio-stone-700': 'rgb(var(--lz-pio-stone) / <alpha-value>)',
    },

    extend: {
      colors: {
        'dark-canvas': 'rgb(var(--lz-dark-canvas) / <alpha-value>)',
        'light-canvas': 'rgb(var(--lz-light-canvas) / <alpha-value>)',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'regular': 400,
        'bold': 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,html,jsx,ts,tsx}',
  ],
  safelist: [
    'dark:bg-dark-canvas',
    'bg-light-canvas'
  ],
  plugins: [],
}