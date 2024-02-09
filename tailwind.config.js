const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7757',
        'secondry': '#172432'
      },
      fontFamily: {
        'playfair' : "'Playfair Display', serif",
        'rubik' : "'Rubik', sans-serif"
      }
    },
  },
  plugins: [],
});