/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--bg)",
        textColor: "var(--textColor)",
        softBg: "var(--softBg)",
        softTextColor: "var(--softTextColor)",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

