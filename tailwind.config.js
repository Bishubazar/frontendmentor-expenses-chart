/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "soft-red": "hsl(10, 79%, 65%)",
                cyan: "hsl(186, 34%, 60%)",
                brown: {
                    dark: "hsl(25, 47%, 15%)",
                    medium: "hsl(28, 10%, 53%)",
                },
                cream: "hsl(27, 66%, 92%)",
                orange: {
                    pale: "hsl(33, 100%, 98%)",
                },
            },
        },
    },
    plugins: [],
};
