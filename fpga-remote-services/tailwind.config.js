/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',
        'primary-dark': '#4338CA',
        'secondary': '#10B981',
        'secondary-dark': '#059669',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}