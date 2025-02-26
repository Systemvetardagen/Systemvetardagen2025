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
                link: 'rgba(var(--link))',
                bachelors: '#ffe2e2',
                masters: '#e7d3ff',
                positions: '#cae0ff'
            },
            fontFamily: { body: ['WorkSans'], poppins:['Poppins'], ibm:['IBM Plex Mono', 'monospace'] },
        },
    },
    plugins: [],
};
