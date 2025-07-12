import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated primary color scheme with #4942E4
				pulse: {
					"50": "#f0f0ff",
					"100": "#e6e4ff",
					"200": "#d0ccff",
					"300": "#b5adff",
					"400": "#9688ff",
					"500": "#4942E4", // Your new primary color
					"600": "#3d35cc",
					"700": "#342bb3",
					"800": "#2b2299",
					"900": "#221a80",
					"950": "#1a1466",
				},
				// Adding accent color #00D1B2
				accent: {
					"50": "#f0fdfa",
					"100": "#ccfbf1",
					"200": "#99f6e4",
					"300": "#5eead4",
					"400": "#2dd4bf",
					"500": "#00D1B2", // Your accent color
					"600": "#0d9488",
					"700": "#0f766e",
					"800": "#115e59",
					"900": "#134e4a",
					"950": "#042f2e",
				},
				dark: {
					"900": "#121212", // Almost black
					"800": "#1e1e1e",
					"700": "#2d2d2d",
					"600": "#3d3d3d",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'fade-in-spring': {
					'0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'slide-in-elastic': {
					'0%': { opacity: '0', transform: 'translateX(100px) scale(0.9)' },
					'60%': { opacity: '0.8', transform: 'translateX(-10px) scale(1.02)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
				},
				'scale-up-bounce': {
					'0%': { opacity: '0', transform: 'scale(0.3) rotate(-3deg)' },
					'50%': { opacity: '0.7', transform: 'scale(1.05) rotate(1deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
				},
				'shimmer-modern': {
					'0%': { backgroundPosition: '-200% 0', opacity: '0.6' },
					'50%': { opacity: '1' },
					'100%': { backgroundPosition: '200% 0', opacity: '0.6' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--primary) / 0.3), 0 0 20px hsl(var(--primary) / 0.1)' },
					'50%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.3)' }
				},
				'magnetic-hover': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-2px) scale(1.02)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'fade-in-spring': 'fade-in-spring 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-in-elastic': 'slide-in-elastic 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'scale-up-bounce': 'scale-up-bounce 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'shimmer-modern': 'shimmer-modern 2.5s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'magnetic-hover': 'magnetic-hover 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'float': 'float 6s ease-in-out infinite'
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, hsla(245, 83%, 58%, 1) 0%, hsla(250, 87%, 65%, 1) 100%)',
				'hero-gradient-2': 'linear-gradient(90deg, hsla(245, 83%, 58%, 1) 0%, hsla(240, 80%, 55%, 1) 100%)',
				'pulse-gradient': 'linear-gradient(180deg, rgba(73,66,228,0.8) 0%, rgba(73,66,228,0) 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Brockmann', 'SF Pro Display', 'Inter', 'sans-serif'],
				'brockmann': ['Brockmann', 'serif'],
				'playfair': ['"Playfair Display"', 'serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;