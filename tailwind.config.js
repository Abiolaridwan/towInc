/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",      
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  
        secondary: '#FACC15', 
        accent: '#10B981',   
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};
