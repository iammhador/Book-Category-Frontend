/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3de03a",
          secondary: "#f4b5f2",
          accent: "#e1f433",
          neutral: "#2a2932",
          "base-100": "#f5f4f6",
          info: "#8697e4",
          success: "#0c5f4f",
          warning: "#b18110",
          error: "#e46b67",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
