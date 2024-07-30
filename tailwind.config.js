/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "fn-primary": "#B88E2F",
        "product-comission": "#E97171",
        "product-content": "#F4F5F7",
        "product-new": "#2EC1AC"
      },
    },
  },
  plugins: [],
}

