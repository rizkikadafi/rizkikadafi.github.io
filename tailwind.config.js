/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.{html, md, markdown}',
    './_posts/*.{html, md, markdown}',
    './_layouts/**/*.{html, md, markdown}',
    './_includes/**/*.{html, md, markdown}',
    './_drafts/**/*.{html, md, markdown}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('/assets/image/hero1.jpg')",
        'hero2': "url('/assets/image/hero2.jpg')",
      },
      boxShadow: {
        'custom': "4px 6px 15px 0px rgba(0, 0, 0, 0.50)"
      }
    },
  },
  plugins: [],
}

