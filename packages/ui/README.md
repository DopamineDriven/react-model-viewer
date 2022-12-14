# @takeda-digital/ui

---you can run targeted apps with turbo using a filter flag -- so to trigger studio only for example it'd be `yarn turbo run dev --filter=@takeda-digital/studio`

then only the packages consumed by studio and apps/studio itself will launch

```cjs
const defaultTheme = require("tailwindcss/defaultTheme");

const Screens = {
  "3xl": 1920,
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 480
};

module.exports = {
  // safelist: [
  //   {
  //     pattern: /(text|bg|border|fill)-/,
  //   },
  // ],
  theme: {
    screens: {
      // desktop first
      "max-3xl": { max: Screens["3xl"] + "px" },
      "max-2xl": { max: Screens["2xl"] + "px" },
      "max-xl": { max: Screens["xl"] + "px" },
      "max-lg": { max: Screens["lg"] + "px" },
      "max-md": { max: Screens["md"] + "px" },
      "max-sm": { max: Screens["sm"] + "px" },
      "max-xs": { max: Screens["xs"] + "px" },
      // mobile first
      sm: { min: Screens["sm"] + "px" },
      md: { min: Screens["md"] + "px" },
      lg: { min: Screens["lg"] + "px" },
      xl: { min: Screens["xl"] + "px" },
      "2xl": { min: Screens["2xl"] + "px" },
      "3xl": { min: Screens["3xl"] + "px" }
    },
    extend: {
      fontSize: {
        base: "16px"
      },
      colors: {
        "text-color": "var(--textColor)",
        primary: "var(--colorPrimary)",
        "primary-contrast": "var(--colorPrimaryContrast)",
        "primary-active": "var(--colorPrimaryActive)",
        "primary-active-contrast": "var(--colorPrimaryActiveContrast)",
        secondary: "var(--colorSecondary)",
        "secondary-contrast": "var(--colorSecondaryContrast)",
        "light-grey": "var(--colorLightGrey)",
        "light-grey-contrast": "var(--colorLightGreyContrast)",
        "medium-grey": "var(--colorMediumGrey)",
        "medium-grey-contrast": "var(--colorMediumGreyContrast)",
        "dark-grey": "var(--colorDarkGrey)",
        "dark-grey-contrast": "var(--colorDarkGreyContrast)",

        /**
         * Assorted colors
         */
        "akane-red": "#ea5532",
        "sakura-pink": "#da5283",
        "fuji-purple": "#9b72b0",
        "sorairo-blue": "#4c9bcf",
        "asagi-blue": "#51b1bf",
        "matsuba-green": "#abb436",
        "yamabuki-yellow": "#eba800",
        "azuki-maroon": "#891515"
      },
      spacing: {
        "1/1": "100%",
        "1/4": "25%",
        "2/3": "66.666%",
        "3/2": "150%",
        "3/4": "75%",
        "4/3": "133.333%",
        "9/16": "56.25%"
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        15: "15"
      },
      fontFamily: {
        sans: ["Gotham", ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        "2-1": "minmax(0, 2fr) minmax(0, 1fr)",
        "1-2": "minmax(0, 1fr) minmax(0, 2fr)"
      },
      boxShadow: {
        md: "0 2px 16px 0 rgb(0, 0, 0, 0.1), 0 1px 12px 0 rgb(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};
```
