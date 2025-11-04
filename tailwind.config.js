/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // app klasörü içindeki tüm dosyalar
    "./components/**/*.{js,jsx,ts,tsx}", // components klasörü içindeki tüm dosyalar
    "./*.{js,jsx,ts,tsx}", // app.js, index.js vb. kök dosyalardaki sınıflar
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
  },
  plugins: [],
};
