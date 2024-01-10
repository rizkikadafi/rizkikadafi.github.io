/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html, md, markdown}',
    './_posts/*.{html, md, markdown}',
    './_layouts/**/*.{md, markdown}',
    './_includes/**/*.{html, md, markdown}',
    './_drafts/**/*.{html, md, markdown}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

