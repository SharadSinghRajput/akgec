/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content: {
        'link': 'url("/image/rank-side-star.webp")',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "offwhite-gradient": 'linear-gradient(90deg, rgb(242, 244, 248) 70%, rgba(242, 244, 248, .1))',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-image': "url('/image/slider-home/asfdasda.jpg')",
        'About': "url('/image/about-dd-image.jpg')",
        'svgElement': "url('/image/skills-sprite.webp')",
        'BG2': "url('/image/MainBG2.jpg')",
        'BG3': "url('/image/MainBG.jpg')",
        'BG4': "url('/image/dotted-map-bg.webp')",
        'BG5': "url('/image/dotted-map-bg.png')",
        'BG6': "url('/image/feature-bg-new.webp')",
      },
      boxShadow: {
        'cardShadow': '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
      },
      screens: {
        'break1': '1800px',
        'break2': '1400px',
        'break3': '1200px',
        'break4': '992px',
      },
    },
    fontFamily: {
      novaReg: ['nova-regular', 'proximanova-regular'],
      novaSemi: ['nova-semibold', 'proximanova-semibold'],
      novaBold: ['nova-bold', 'proximanova-bold'],
      novaLight: ['nova-light', 'proximanova-light'],
      novaThin: ['nova-thin', 'proximanova-thin'],
      slick: ['slick', 'slick'],
    },
    keyframes: {
      zoomInOut: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
      },
    },
    animation: {
      zoomInOut: 'zoomInOut 20s ease-in-out infinite',
    },
  },
  plugins: [],
};
