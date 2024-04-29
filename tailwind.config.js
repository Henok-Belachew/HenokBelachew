/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
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
      gradient: {
        'gradient-1': 'linear-gradient(to bottom right, #002744 0%, #09121B 50%)',
      },
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
      backgroundImage: {
        // Custom gradient


        // gradient jet
        'd-gradient-1': `linear-gradient(
          to bottom right, 
          #172537 2%,   // Corrected the syntax here
          hsla(240, 2%, 11%, 0) 100%
        ), #141d2b`,
        
        // gradient yellow 1
        'd-gradient-2': `linear-gradient(
          to bottom right, 
          #077edf,    // Note the comma here separating the color stops
          #ffc06100 50%
        )`,

        // gradient yellow 2
        'd-gradient-3': `linear-gradient(  
          135deg, 
          #005296 0%, 
          #ffbb5c00 59.86%
        ), #202022`
      },
      colors: {
        // ----------- DARK MODE ----------- //
        // - Solid color - Accessible texts - //
        'd-on-surface-12': "#EEEEF0",
        'd-on-surface-11': "#B2B3BD",
        'd-on-surface-10': "#797B86",

        // ------ Border and Separators -----//
        'd-on-surface-9': "#0087E8",
        'd-on-surface-8': "#276FB2",
        'd-on-surface-7': "#215D95",
        'd-on-surface-6': "#164D80",
        'd-on-surface-5': "#0C2844",


        // ----------- LIGHT MODE ----------- //
        // - Solid color - Accessible texts - //

        'l-on-surface-12': "#1E1F24",
        'l-on-surface-11': "#62636C",
        'l-on-surface-10': "#80828D",

        // ------ Border and Separators -----//
        'l-on-surface-9': "#8B8D98",
        'l-on-surface-8': "#B9BBC6",
        'l-on-surface-7': "#CDCED7",
        'l-on-surface-6': "#D8D9E0",
        'l-on-surface-5': "#C7E3FF",

        'primary': "#0087E8",




        'd-surface-1': "#09121B",  //smoky-black
        'd-surface-2': "#0F1924",
        
        'd-surface-3': "#0C2942",
        'd-surface-4': "#00345B",
        'd-surface-5': "#07406D",


        'l-surface-1': "#FBFDFF",
        'l-surface-2': "#F4FAFF",
        'l-surface-3': "#E8F3FF",
  


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
        // 'gradient-1': 'var(--border-gradient-onyx)'
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

