/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        creator: {
          bg: '#090a0f',
          surface: '#11131a',
          card: '#161922',
          cardHover: '#1c202c',
          border: '#232738',
          accent: '#e50914',
          accentLight: '#ff334b',
          accentDark: '#b20710',
          muted: '#8e96aa',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(229, 9, 20, 0.65)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(at 20% 20%, rgba(229, 9, 20, 0.15) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(59, 130, 246, 0.08) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
