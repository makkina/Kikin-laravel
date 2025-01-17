import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary-one': '#B4FFFF',
                'primary-two': '#99F7F7',
                'primary-three': '#84E8F4',
                'primary-four': '#3ACFE1',
                'primary-five': '#00A8A8',
                'black': '#000000'
            },
        },
    },

    plugins: [forms],
};
