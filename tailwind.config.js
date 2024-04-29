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
      saturate: {
        '200': '2', 
      },
      
      hueRotate: {
        '180': '180deg', 
      },
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
     
      colors: {

        "primary": "#0087e8",
        
        "on-light-surface": {
          "1": "#fcfcfd",
          "2": "#f9f9fb",
          "3": "#eff0f3",
          "4": "#e7e8ec",
          "5": "#e0e1e6",
          "6": "#d8d9e0",
          "7": "#cdced7",
          "8": "#b9bbc6",
          "9": "#8b8d98",
          "10": "#80828d",
          "11": "#62636c",
          "12": "#1e1f24",
        },
        
        "on-dark-surface": {
          "1": "#111113",
          "2": "#19191b",
          "3": "#222325",
          "4": "#292a2e",
          "5": "#303136",
          "6": "#393a40",
          "7": "#46484f",
          "8": "#5f606a",
          "9": "#6c6e79",
          "10": "#797b86",
          "11": "#b2b3bd",
          "12": "#eeeef0"
        },  
        
        "primary-light": {
          "1": "#fbfdff",
          "2": "#f5faff",
          "3": "#e9f3fe",
          "4": "#d9edff",
          "5": "#c7e3ff",
          "6": "#b3d6fc",
          "7": "#98c5f5",
          "8": "#6faeef",
          "9": "#0087e8",
          "10": "#0079dc",
          "11": "#0075d4",
          "12": "#003560",
        },
        
        "primary-dark": {
          "1": "#09121b",
          "2": "#0f1924",
          "3": "#0c2844",
          "4": "#01335d",
          "5": "#08406f",
          "6": "#164d80",
          "7": "#215d95",
          "8": "#276fb2",
          "9": "#0087e8",
          "10": "#007ada",
          "11": "#78b9fd",
          "12": "#cce4fd",
        },
        
        
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

