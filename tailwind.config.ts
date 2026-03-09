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
                    50: '#e8f0fe',
                    100: '#d2e3fc',
                    200: '#aecbfa',
                    300: '#8ab4f8',
                    400: '#669df6',
                    500: '#4285f4',
                    600: '#1a73e8',
                    700: '#1967d2',
                    800: '#185abc',
                    900: '#174ea6',
                    950: '#0d3b82',
                },
                accent: {
                    50: '#e6f4ea',
                    100: '#ceead6',
                    200: '#a8dab5',
                    300: '#81c995',
                    400: '#5bb974',
                    500: '#34a853',
                    600: '#1e8e3e',
                    700: '#188038',
                    800: '#137333',
                    900: '#0d652d',
                },
                gold: {
                    400: '#facc15',
                    500: '#eab308',
                    600: '#ca8a04',
                },
                surface: {
                    50: '#ffffff',
                    100: '#f8f9fa',
                    200: '#f1f3f4',
                    300: '#e8eaed',
                    400: '#dadce0',
                    500: '#bdc1c6',
                    600: '#9aa0a6',
                    700: '#5f6368',
                    800: '#3c4043',
                    900: '#202124',
                },
                dark: {
                    800: '#1a1a2e',
                    900: '#0f0f23',
                    950: '#070714',
                },
            },
            fontFamily: {
                sans: ['Roboto', '"Noto Sans"', '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Naskh Arabic"', '"Noto Sans Thai"', '"Noto Sans Hebrew"', '"Noto Sans Bengali"', 'sans-serif'],
                display: ['"Google Sans"', '"Noto Sans"', '"Noto Sans JP"', '"Noto Sans KR"', '"Noto Naskh Arabic"', '"Noto Sans Thai"', '"Noto Sans Hebrew"', '"Noto Sans Bengali"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
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
                    '0%, 100%': { boxShadow: '0 0 15px rgba(26, 115, 232, 0.4)' },
                    '50%': { boxShadow: '0 0 30px rgba(26, 115, 232, 0.7)' },
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
                'gradient-premium': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
