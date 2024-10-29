/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                '.layout-sm': {
                    'grid-template-columns': `1fr min(${theme('screens.sm')},100%) 1fr`
                },
                '.layout-xl': {
                    'grid-template-columns': `1fr minmax(auto,${theme(
                        'spacing.60'
                    )}) min(${theme('screens.sm')},100%) minmax(auto,${theme('spacing.60')}) 1fr`
                }
            });
        }),
        
        require('tailwindcss-animate')
    ]
};
