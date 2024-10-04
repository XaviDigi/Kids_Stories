import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5dc", // Soft beige background
        foreground: "#3e3e3e", // Darker gray for text
        primary: {
          DEFAULT: "#d2b48c", // Beige for primary color
          dark: "#b0916a", // Darker beige for hover effects
        },
        secondary: {
          DEFAULT: "#c19a6b", // Lighter brownish-beige for secondary elements
        },
        accent: {
          DEFAULT: "#8b7355", // Deep beige-brown for accents
        },
        neutral: {
          light: "#f0e5d8", // Very light beige for card backgrounds
          dark: "#3e3e3e", // Dark gray for text
        },
      },
      fontFamily: {
        display: ['"Poppins"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
      borderRadius: {
        large: "16px",
      },
      boxShadow: {
        card: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f5f5dc", // Soft beige background
            foreground: "#3e3e3e", // Darker gray for text
            primary: {
              DEFAULT: "#d2b48c", // Beige consistent with the theme
            },
          },
        },
      },
    }),
  ],
};

export default config;
