/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activation du mode sombre
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs du thème clair
        'light-background': '#f8f9fa',
        'light-foreground': '#212529',
        'light-card': '#ffffff',
        'light-border': '#dee2e6',
        
        // Couleurs du thème sombre
        'dark-background': '#0d1117',
        'dark-foreground': '#c9d1d9',
        'dark-card': '#161b22',
        'dark-border': '#30363d',

        // Couleur d'accentuation
        'accent': '#3b82f6', // bleu-500
        'accent-hover': '#2563eb', // bleu-600
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 6px 16px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};