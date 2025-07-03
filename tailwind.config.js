/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: {
			DEFAULT: "#3B82F6", // blue-500
			dark: "#2563EB",    // blue-600
		  },
		  dark: {
			DEFAULT: "#1F2937", // gray-800
			light: "#374151",   // gray-700
		  },
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'],
		},
		boxShadow: {
		  card: "0 4px 12px rgba(0, 0, 0, 0.1)",
		  "card-hover": "0 6px 16px rgba(0, 0, 0, 0.15)",
		},
		animation: {
		  "fade-in-up": "fadeInUp 0.6s ease-out",
		  "slide-in": "slideIn 0.8s ease-out",
		},
		keyframes: {
		  fadeInUp: {
			"0%": { opacity: 0, transform: "translateY(20px)" },
			"100%": { opacity: 1, transform: "translateY(0)" },
		  },
		  slideIn: {
			"0%": { transform: "translateX(-100%)", opacity: 0 },
			"100%": { transform: "translateX(0)", opacity: 1 },
		  },
		},
	  },
	},
	plugins: [],
	darkMode: "class", // Active le dark mode via la classe .dark sur <html> ou <body>
  };