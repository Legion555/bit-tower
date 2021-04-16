module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'shuffle': 'shuffle 3s ease-in-out infinite',
        'cloudsLeft': 'cloudsLeft 30s linear infinite',
        'cloudsLeft2': 'cloudsLeft 30s linear 15s infinite',
        'blurOut': 'blurOut 3s linear',
        'lightCycle': 'lightCycle 30s linear infinite'
        },
      keyframes: {
        shuffle: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(100px)' },
        },
        cloudsLeft: {
          '0%': { right: '-100%' },
          '100%': { right: '125%' },
        },
        blurOut: {
          '0%': { filter: 'blur(4px)' },
          '100%': { right: 'blur(0px)' },
        },
        lightCycle: {
          '0%, 100%': { backgroundColor: '#87ceeb ' },
          '50%': { backgroundColor: '#070B34' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
