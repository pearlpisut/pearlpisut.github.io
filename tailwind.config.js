/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
      }
  },
  plugins: [],
}

