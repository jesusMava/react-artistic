/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // creamos un nuevo font family llamado title
        // agregamos los " " porq son importadas de google font
        title: ['"Pacifico"','cursive']
      }
    },
  },
  plugins: [],
}

