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
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

