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
        'radial-gradient-center': 'radial-gradient(at center, #334155 0%, transparent 40%)',
        'radial-gradient-top-left': 'radial-gradient(at top left, #334155 0%, transparent 60%)',
        'radial-gradient-center-left': 'radial-gradient(at center left, #334155 0%, transparent 60%)',
        'radial-gradient-bottom-left': 'radial-gradient(at bottom left, #334155 0%, transparent 60%)',
        'radial-gradient-top-right': 'radial-gradient(at top right, #334155 0%, transparent 60%)',
        'radial-gradient-center-right': 'radial-gradient(at center right, #334155 0%, transparent 60%)',
        'radial-gradient-bottom-right': 'radial-gradient(at bottom right, #334155 0%, transparent 60%)',
        'radial-gradient-center': 'radial-gradient(at center, #334155 0%, transparent 60%)',
        'radial-gradient-diagonal': 'radial-gradient(at top left, #334155 0%, transparent 60%), radial-gradient(at bottom right, #334155 0%, transparent 60%)',
        'radial-gradient-diagonal-reverse': 'radial-gradient(at top right, #334155 0%, transparent 60%), radial-gradient(at bottom left, #334155 0%, transparent 60%)',
      },
      boxShadow: {
        'custom': "4px 6px 8px 0px rgba(0, 0, 0, 0.3)",
        'custom-lg': "4px 6px 15px 0px rgba(0, 0, 0, 0.5)",
        'custom-xl': "0px 0px 30px 5px rgba(0, 0, 0, 0.6)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

