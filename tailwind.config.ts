import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        fields: {
          50: '#e8f7fc',   // Lightest sky tint
          100: '#c8edf7',  // Light sky blue tint
          200: '#8ecae6',  // Sky Blue (Light) — airy, uplifting
          300: '#52b8d8',  // Mid sky-to-ocean transition
          400: '#219ebc',  // Blue Green — oceanic, dynamic
          500: '#1a8aa5',  // Deeper blue-green
          600: '#0d6e8a',  // Deep ocean
          700: '#023047',  // Deep Space Blue — cosmos, ambition
          800: '#011f30',  // Darker deep space
          900: '#010f18',  // Near black deep space
          accent: '#ffb703',  // Amber Flame — golden, bold
          orange: '#fb8500',  // Tiger Orange — energetic, charismatic
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },

  plugins: []
} as Config;