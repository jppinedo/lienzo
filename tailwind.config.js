/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'blue-200': 'rgb(var(--lz-blue-200) / <alpha-value>)',
      'blue-400': 'rgb(var(--lz-blue-400) / <alpha-value>)',
      'blue-600': 'rgb(var(--lz-blue-600) / <alpha-value>)',
      'transparent': 'transparent',
  
      // Chart background / card (very light warm off-white)
      'pio-bg': 'rgb(var(--lz-pio-bg) / <alpha-value>)',
      'pio-bg-light': 'rgb(var(--lz-pio-bg-light) / <alpha-value>)',
      'pio-bg-soft': 'rgb(var(--lz-pio-bg-soft) / <alpha-value>)',
      'pio-bg-opacity-90': 'rgb(var(--lz-pio-bg-opacity-90) / 0.9)',
  
      // Success / positive / selected (green variant)
      'pio-teal-dark': 'rgb(var(--lz-pio-teal-dark) / <alpha-value>)',
      'pio-teal-dark-hover': 'rgb(var(--lz-pio-teal-dark-hover) / <alpha-value>)',
      'pio-teal-dark-muted': 'rgb(var(--lz-pio-teal-dark-muted) / <alpha-value>)',
      'pio-teal-dark-pale': 'rgb(var(--lz-pio-teal-dark-pale) / <alpha-value>)',
      'pio-teal-dark-opacity-14': 'rgb(var(--lz-pio-teal-dark) / 0.14)',
      'pio-teal-dark-opacity-20': 'rgb(var(--lz-pio-teal-dark) / 0.2)',
      'pio-teal-black': 'rgb(var(--lz-pio-teal-black) / <alpha-value>)',
  
      // Error / destructive (red variant)
      'pio-coral': 'rgb(var(--lz-pio-coral) / <alpha-value>)',
      'pio-coral-hover': 'rgb(var(--lz-pio-coral-hover) / <alpha-value>)',
      'pio-coral-dark': 'rgb(var(--lz-pio-coral-dark) / <alpha-value>)',
      'pio-coral-muted': 'rgb(var(--lz-pio-coral-muted) / <alpha-value>)',
      'pio-coral-pale': 'rgb(var(--lz-pio-coral-pale) / <alpha-value>)',
      'pio-coral-opacity-14': 'rgb(var(--lz-pio-coral) / 0.14)',
      'pio-coral-opacity-20': 'rgb(var(--lz-pio-coral) / 0.2)',
  
      // Warning (yellow variant)
      'pio-amber': 'rgb(var(--lz-pio-amber) / <alpha-value>)',
      'pio-amber-hover': 'rgb(var(--lz-pio-amber-hover) / <alpha-value>)',
      'pio-amber-dark': 'rgb(var(--lz-pio-amber-dark) / <alpha-value>)',
      'pio-amber-muted': 'rgb(var(--lz-pio-amber-muted) / <alpha-value>)',
      'pio-amber-pale': 'rgb(var(--lz-pio-amber-pale) / <alpha-value>)',
      'pio-amber-opacity-14': 'rgb(var(--lz-pio-amber) / 0.14)',
      'pio-amber-opacity-20': 'rgb(var(--lz-pio-amber) / 0.2)',

      // Chart / data accent (not a control variant)
      'pio-stone': 'rgb(var(--lz-pio-stone) / <alpha-value>)',
      'pio-stone-dark': 'rgb(var(--lz-pio-stone-dark) / <alpha-value>)',
      'pio-stone-pale': 'rgb(var(--lz-pio-stone-pale) / <alpha-value>)',
      'pio-stone-opacity-14': 'rgb(var(--lz-pio-stone) / 0.14)',
  
      // Text & subtle elements
      'pio-text': 'rgb(var(--lz-pio-text) / <alpha-value>)',
      'pio-text-muted': 'rgb(var(--lz-pio-text-muted) / <alpha-value>)',
      'pio-grid': 'rgb(var(--lz-pio-grid) / <alpha-value>)',
      'pio-border-subtle': 'rgb(var(--lz-pio-border-subtle) / <alpha-value>)',
    },

    extend: {
      colors: {
        'dark-canvas': 'rgb(var(--lz-dark-canvas) / <alpha-value>)',
        'light-canvas': 'rgb(var(--lz-light-canvas) / <alpha-value>)',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'jetbrains': ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'pio-soft': '0 10px 30px -5px rgba(47, 109, 104, 0.05), 0 4px 12px -2px rgba(255, 107, 87, 0.04)',
        'pio-card': '0 12px 36px -8px rgba(31, 36, 33, 0.06), 0 4px 12px rgba(0, 0, 0, 0.02)',
        'pio-float': '0 12px 32px -6px rgba(31, 36, 33, 0.12), 0 4px 12px -2px rgba(31, 36, 33, 0.06)',
        'pio-glow-coral': '0 0 25px -3px rgba(255, 107, 87, 0.4)',
        'pio-glow-teal': '0 0 25px -3px rgba(58, 125, 118, 0.35)',
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
