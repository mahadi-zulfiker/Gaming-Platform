/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pic-1': "url('/pic-bg/bg-pic-1.jpg')",
  
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

