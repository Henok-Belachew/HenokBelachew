/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': {'min': '1250px'},
      'lg': {'min': '1024px'},
      '3-md': {'min': '768px'},
      '4-md': {'min': '580px'},
      'sm': {'min': '450px'},
    },
    
    extend: {
      fontSize: {
        'md1-1': '24px',
        'md1-2': '18px',
        'md1-3': '17px',
        'md1-4': '16px',
        'md1-5': '15px',
        'md1-6': '14px',
        'md1-7': '13px',
        'md1-8': '11px',
        '1': '32px',
        '2': '24px',
        '3': '26px',
        '4': '18px',
        '6': '15px',
        '7': '15px',
        '8': '12px',
      },
      fontWeight: {
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
      },
      colors: {
        'jet': 'var(--jet)',
        'onyx': 'var(--onyx)',
        'eerie-black-1': 'var(--eerie-black-1)',
        'eerie-black-2': 'var(--eerie-black-2)',
        'smoky-black': 'var(--smoky-black)',
        'white-1': 'var(--white-1)',
        'white-2': 'var(--white-2)',
        'orange-yellow-crayola': 'var(--orange-yellow-crayola)',
        'vegas-gold': 'var(--vegas-gold)',
        'light-gray': 'var(--light-gray)',
        'light-gray-70': 'var(--light-gray-70)',
        'bittersweet-shimmer': 'var(--bittersweet-shimmer)',
      },
      boxShadow: {
        'shadow-1': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'shadow-2': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.08)',
        'shadow-3': '0 15px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.08)',
        'shadow-4': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'shadow-5': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'shadow-lg-1': '-4px 8px 24px rgba(0, 0, 0, 0.125)',
        'shadow-lg-2': '0 16px 30px rgba(0, 0, 0, 0.125)',
        'shadow-lg-3': '0 16px 40px rgba(0, 0, 0, 0.125)',
      }
    },
  },
  plugins: [],
}

