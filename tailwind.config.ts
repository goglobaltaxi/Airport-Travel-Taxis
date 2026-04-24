import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#111111', // Deep Black 
                    950: '#000000',
                },
                accent: {
                    50: '#fffbf0',
                    100: '#fef5d6',
                    200: '#fce6a6',
                    300: '#fad16c',
                    400: '#f7b935',
                    500: '#f29e12',
                    600: '#d57b0b', // Golden amber
                    700: '#b15a0c',
                    800: '#8f4611',
                    900: '#753b11',
                },
                gold: {
                    400: '#FBB117',
                    500: '#D4AF37', // Premium Gold
                    600: '#AA8C2C',
                },
                surface: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b', // Very dark slate
                },
                dark: {
                    800: '#1c1c1e',
                    900: '#121212',
                    950: '#0a0a0a',
                },
            },
            fontFamily: {
                sans: ['"Inter"', '"Roboto"', 'sans-serif'],
                display: ['"Outfit"', '"Google Sans"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-glow': 'pulseGlow 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)' }, // Gold glow
                    '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-premium': 'linear-gradient(135deg, #111111 0%, #18181b 50%, #000000 100%)',
                'gradient-gold': 'linear-gradient(135deg, #FBB117 0%, #D4AF37 50%, #AA8C2C 100%)',
            },
            boxShadow: {
                'premium': '0 10px 40px -10px rgba(0,0,0,0.1)',
                'premium-hover': '0 20px 40px -10px rgba(0,0,0,0.15)',
                'gold': '0 10px 30px -10px rgba(212, 175, 55, 0.3)',
            }
        },
    },
    plugins: [],
};

export default config;
