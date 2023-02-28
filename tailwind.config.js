/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  important: true,
}
