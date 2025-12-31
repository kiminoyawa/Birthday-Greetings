// hinde nagana v4 ung tailwind not applicaple aray ko

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F8F9FA',
        'custom-red': '#E63946',
        'custom-black': '#2D2D2D',
        'custom-holder': '#A0A0A0',
        'custom-white': '#FFFFFF',
      },
      fontFamily: {
        'milkyway': ['Milkyway', 'sans-serif'],
        'segoe': ['Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'custom-24': '24px',
      },
      boxShadow: {
        'custom': '0 6px 12px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '100px': '100px',
      }
    }
  },
  plugins: [],
}