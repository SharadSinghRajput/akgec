/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-image': "url('/image/slider-home/asfdasda.jpg')",
        'About': "url('/image/about-dd-image.jpg')",
        'BG2': "url('/image/MainBG2.jpg')",
        'BG3': "url('/image/MainBG.jpg')",
        'BG4': "url('/image/dotted-map-bg.webp')",
        'BG5': "url('/image/dotted-map-bg.png')",
      },
    },
    fontFamily: {
      novaReg: ['nova-regular', 'proximanova-regular'],
      novaSemi: ['nova-semibold', 'proximanova-semibold'],
      novaBold: ['nova-bold', 'proximanova-bold'],
      novaLight: ['nova-light', 'proximanova-light'],
      novaThin: ['nova-thin', 'proximanova-thin'],
    },
  },
  plugins: [],
};
