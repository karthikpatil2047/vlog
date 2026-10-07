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
        // Vibrant Creator Palette
        vlog: {
          bg: '#0a0a16',          // Midnight navy-violet background
          surface: '#121226',     // Deep violet surface
          card: '#181735',        // Rich card base
          cardHover: '#22204c',   // Elevated card hover
          border: 'rgba(255, 255, 255, 0.12)',
          purple: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          rose: '#f43f5e',
          magenta: '#d946ef',
          orange: '#f97316',
          yellow: '#facc15',
          gold: '#fbbf24',
          accent: '#ff0055',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite reverse',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 14s linear infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'creator-hero': 'radial-gradient(circle at 20% 15%, rgba(139, 92, 246, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)',
        'creator-cta': 'linear-gradient(135deg, rgba(124, 58, 237, 0.85) 0%, rgba(217, 70, 239, 0.85) 50%, rgba(244, 63, 94, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}
