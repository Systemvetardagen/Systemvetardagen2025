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
                first: 'rgba(var(--logo-gradient-first))',
                second: 'rgba(var(--logo-gradient-second))',
                third: 'rgba(var(--logo-gradient-third))',
            },
            fontFamily: { body: ['WorkSans'], heading: ['OverPass'] },
        },
    },
    plugins: [],
};
