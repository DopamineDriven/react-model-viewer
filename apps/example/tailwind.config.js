const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@takeda-digital/ui/tailwind")],
  content: [
    "../../../node_modules/@takeda-digital/ui/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: { gotham: ["Gotham", ...defaultTheme?.fontFamily?.sans] }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ]
};
