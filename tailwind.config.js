/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dejavuSans: ['Dejavu Sans', 'sans-serif'],
      },
      colors: {
        'nav-border': '#252F3D',
        'light-white': '#FAFAFB',
        'light-white-100': '#F1F4F5',
        'light-white-200': '#d7d7d7',
        'light-white-300': '#F3F3F4',
        'light-white-400': '#E2E5F1',
        'light-white-500': '#E4E4E4',
        gray: '#4D4A4A',
        'gray-100': '#3d3d4e',
        'black-100': '#252525',
        'primary-blue': '#042A3F',
        primaryLightBlue: '#387da1',
        primaryExtralightblue: '#1d75a5',
        primaryThinlightblue: '#92d8fd',
        dashboardUserState: 'rgba(207, 255, 233, 1)',
        dashboardPendingUserState: 'rgba(210, 234, 255, 1)',
        'primary-red': '#F92B3B',
        'primary-yellow': '#FFFF00',
        'secendary-yellow': '#FFEB34',
        'primary-green': '#46D39D',
        'transparent-bg': 'rgba(255,255, 255, 0.10)',
        'gray-50': '#D9D9D9',
      },
      backgroundImage: {
        'card-bg': "url('/assets/resultCard/cardbg.jpeg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        moon: "url('/assets/admin/utils/night-sky.jpg')",
        sun: "url('/assets/admin/utils/sun.jpg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
