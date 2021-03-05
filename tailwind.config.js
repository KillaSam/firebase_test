module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        colors:{
            'myGreen': '#349A89',
            'white': '#FFFFFF',
            'black': '#000000',
            'red': '#DC2626',
            'inGray': '#F9FAFB',
            'inBorGray': '#DEDEE0',
            'dontRem' : '#8C8C8C',
            'footer-bg': 'rgba(192, 196, 206, 0.127321)',
            'footer-text': '#C0C4CE'
        },
        boxShadow: {
            DEFAULT: '0px 2px 42px rgba(0, 0, 0, 0.111233)'
        },
        extend: {
            animation: {
                'loader': 'animateLoad 2s ease-in-out infinite'
            },
            keyframes: {
                animateLoad: {
                    '0%, 100%': { strokeDashoffset : '440' },
                    '50%': { strokeDashoffset : '0' },
                    '50.1%': { strokeDashoffset : '880' }
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
