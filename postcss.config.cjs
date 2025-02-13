module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': require('./tailwind.config.ts'),
    'autoprefixer': {},
  }
} 