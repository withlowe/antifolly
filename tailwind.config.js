/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        "brand-orange": "#FF6B44",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#333",
            a: {
              color: "#000000",
              textDecoration: "none",
              borderBottom: "1.8px solid #c1c1c1",
              "&:hover": {
                color: "#FF6B44",
                textDecoration: "none",
              },
            },
          },
        },
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
