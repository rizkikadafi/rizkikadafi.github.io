/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{md, markdown, html}',
    './_posts/*.{md, markdown, html}',
    './_layouts/**/*.{md, markdown, html}',
    './_includes/**/*.{md, markdown, html}',
    './_drafts/**/*.{md, markdown, html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

