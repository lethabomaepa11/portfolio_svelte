/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        royalblue: {
          primary: "#4169E1", // RoyalBlue
          secondary: "#6C757D", // Neutral secondary
          accent: "#4ADE80", // Soft green accent
          neutral: "#3D4451", // Neutral for backgrounds
          "base-100": "#FFFFFF", // White for main background
          info: "#2094F3", // Info blue
          success: "#009485", // Success green
          warning: "#FF9900", // Warning orange
          error: "#FF5724", // Error red
        },
      },
    ],
  },
};
