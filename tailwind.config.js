/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content: {
        'link': 'url("/image/rank-side-star.webp")',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "offwhite-gradient": 'linear-gradient(90deg, rgb(242, 244, 248) 70%, rgba(242, 244, 248, .1))',
        "edgeGradient": 'linear-gradient(to right, #00949a, #f7cc23, #000)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'text-gradient': 'linear-gradient(to right, #dc2626, #1d4ed8)',
        'custom-image': "url('/image/slider-home/asfdasda.jpg')",
        'About': "url('/image/about-dd-image.jpg')",
        'svgElement': "url('/image/skills-sprite.webp')",
        'world-map': "url('/image/placements/world-map.png')",
        'staff-bg': "url('/image/placements/staff-bg.jpg')",
        'Header': "url('/image/header-img.jpg')",

        'Edge': "url('/image/edge-banner.jpg')",
        'Empathy': "url('/image/core-value/empathy.webp')",
        'HumanDignity': "url('/image/core-value/human-dignity.webp')",
        'Giving': "url('/image/core-value/giving.webp')",
        'PaperBackground': "url('/image/background-paper.png')",
        'BG2': "url('/image/MainBG2.jpg')",
        'BG3': "url('/image/MainBG.jpg')",
        'BG4': "url('/image/dotted-map-bg.webp')",
        'BG5': "url('/image/dotted-map-bg.png')",
        'BG6': "url('/image/AKG_Student.jpg')",
        'BG7': "url('/image/academic-overview/bg-1.jpg')",
        'BG8': "url('/image/academic-overview/bg-2.jpg')",
        'BG9': "url('/image/academic-overview/bg-3.jpg')",
        'BG10': "url('/image/academic-overview/bg-4.jpg')",
        'BG11': "url('/image/woman-bg.jpg')",
        'BG12': "url('/image/main-banner.jpg')",
        'BG13': "url('/image/esteemed-partners-bg.jpg')",
        'BG14': "url('/image/research.jpg')",
        'BG15': "url('/image/placements/8464.png')",
        'BG16': "url('/image/placements/banner-2.jpg')",
        'BG17': "url('/image/recognitions-and-approvals/bottom-banner-bg.jpg')",
        'BG18': "url('/image/scholarship/bottom-banner-bg.jpg')",
        'BG19': "url('/image/awards-and-ranking/banner-bg.jpg')",
        'BG20': "url('/image/Pages/545.jpg')",
        'BG21': "url('/image/Pages/546.jpg')",
        'BG22': "url('/image/Pages/547.jpg')",
        'BG23': "url('/image/Pages/548.jpg')",
        'BG24': "url('/image/Pages/549.jpg')",
        'BG25': "url('/image/Pages/550.jpg')",
        'BG26': "url('/image/placements/middle-banner.jpg')",
        'BG27': "url('/image/campus-life/convocation-banner.jpg')",
        'BG28': "url('/image/placements/career-banner.jpg')",
        'BG29': "url('/image/environment-protection/middle-banner.webp')",
        
        
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
      montserrat: ['montserrat', 'montserrat'],
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
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
