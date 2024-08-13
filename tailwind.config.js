/** @type {import('tailwindcss').Config} */

const { getConfigPath } = require("./constant/ConfigPath.js");

const configPath = getConfigPath();

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        logo: `url(${configPath.imagePath}/logo.svg)`,
        logo_dark: `url(${configPath.imagePath}/logo_dark.svg)`,
        hero: `url(${configPath.imagePath}/hero/hero-bg.png)`,
        hero_shape: `url(${configPath.imagePath}/hero/shape-1.svg)`,
        hero_shape_dark: `url(${configPath.imagePath}/hero/shape-1-dark.svg)`,
        hero_shape2_light: `url(${configPath.imagePath}/hero/shape-2-light.svg)`,
        hero_shape2_dark: `url(${configPath.imagePath}/hero/shape-2-dark.svg)`,
        dots_light: `url(${configPath.imagePath}/about/dots-light.svg)`,
        dots_dark: `url(${configPath.imagePath}/about/dots-dark.svg)`,
        work_project_bg_light: `url(${configPath.imagePath}/work/project-bg-light.png)`,
        work_project_bg_dark: `url(${configPath.imagePath}/work/project-bg-dark.png)`,
        contact_illustration_light: `url(${configPath.imagePath}/contact/illustration-light.svg)`,
        contact_illustration_dark: `url(${configPath.imagePath}/contact/illustration-dark.svg)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
