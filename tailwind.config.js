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
                "button-background-active": "#006EDB",
                "digital-crown-blue": "#d1e8fd",
                "gallery-light-grey": "#f5f4f0",
                "gallery-grey": "#d2d3d4",
                "gallery-black": "#3c3d3a",
                "gallery-light-black": "#595759",
                "galley-blue": "#2f506c",
                "gallery-light-blue": "#91a6bb",
                "gallery-red": "#e4544d",
                "gallery-light-red": "#d8a097",
                "gallery-light-green": "#e7ece3",
                "gallery-green": "#afbfab",
                "gallery-bg": "#F5F5F7",
                "main-grey": "#86868b",
            },
        },
    },
    plugins: [],
}

