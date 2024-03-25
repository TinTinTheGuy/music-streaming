/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      /* Background Color */
      bgWhite: '#FFFFFF',
      bgDarkBg: '#121212',
  
      /* Text Color */
      textDarkText: '#FFFFFF',
  
      /* Primary Accent Color */
      bgDarkPrimary: '#1ED760',
  
      /* Secondary Accent Color */
      bgDarkSecondary: '#9E9E9E',
  
      /* Highlight Color */
      bgDarkHighlight: '#FF6D00',
  
      /* Inactive Color */
      bgDarkInactive: '#616161',
  },  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
