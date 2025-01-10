/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'rgba(var(--background))',
                text: 'rgba(var(--text))',
                primary: 'rgba(var(--primary))',
                secondary: 'rgba(var(--secondary))',
                accent: 'rgba(var(--accent))',
                gradientFirst: 'rgba(var(--gradient-first))',
                gradientSecond: 'rgba(var(--gradient-second))',
                gradientThird: 'rgba(var(--gradient-third))',
            },
            fontFamily: { body: ['WorkSans'], heading: ['OverPass'], poppins:['Poppins'] },
        },
    },
    plugins: [],
};
