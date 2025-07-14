/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#FEF7ED',
          100: '#FEF0DC',
          200: '#FCDCB8',
          300: '#F9C285',
          400: '#F5A150',
          500: '#F28629',
          600: '#E3701F',
          700: '#BC561C',
          800: '#95451E',
          900: '#783A1B',
        },
        'warm-brown': {
          50: '#F7F3F0',
          100: '#EDE4DD',
          200: '#DBC9BA',
          300: '#C4A68A',
          400: '#A3845A',
          500: '#8B6914',
          600: '#7D5F28',
          700: '#684E23',
          800: '#574223',
          900: '#4A3720',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};