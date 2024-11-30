import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
    ],
    theme: {
      extend: {}, // Extend default theme if needed
    },
    plugins: [],
};
