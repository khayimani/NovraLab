module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0b0b0b',
        muted: '#6b7280',
        accent: '#0ea5a4'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial']
      }
    }
  },
  plugins: [],
}
