/** @type {import('tailwindcss').Config} */
module.exports = {
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
      }
    },
  },
  plugins: [],
}

