/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins'],
            },
            colors: {
                "mainnav-black": "rgba(0,0,0,0.8)",
                "mainnav-black-hover": "#000000",
                "secondnav-border" : "rgba(0, 0, 0, 0.16)",
                "button-background": "rgb(0, 113, 227)",
                "button-background-hover": "#0076DF",
                "button-background-active": "#006EDB"
            },
        },
    },
    plugins: [],
}

