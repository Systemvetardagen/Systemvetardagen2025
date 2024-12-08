/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'rgba(var(--background))',
                text: 'rgba(var(--text))',
                primary: 'rgba(var(--primary))',
                secondary: 'rgba(var(--secondary))',
                accent: 'rgba(var(--accent))',
            },
            fontFamily: { body: ['WorkSans'], heading: ['OverPass'] },
        },
    },
    plugins: [],
};
