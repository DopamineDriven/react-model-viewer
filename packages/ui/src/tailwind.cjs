/**
 * @type {import("tailwindcss/defaultTheme").fontFamily}
 */
const defaultTheme = require("tailwindcss/defaultTheme").fontFamily;

const colors = {
  blue: "#2882ef",
  lightblue: "#2882ef",
  violet: "#8524c3",
  rosa: "#f02888",
  yellow: "#f9c32a",
  orange: "#f97449",
  "akane-red": "#ea5532",
  "sakura-pink": "#da5283",
  "fuji-purple": "#9b72b0",
  "sorairo-blue": "#4c9bcf",
  "asagi-blue": "#51b1bf",
  "matsuba-green": "#abb436",
  "yamabuki-yellow": "#eba800",
  "azuki-maroon": "#891515",
  accents: {
    0: "#fff",
    1: "#fafafa",
    2: "#eaeaea",
    3: "#999",
    4: "#888",
    5: "#666",
    6: "#444",
    7: "#333",
    8: "#111",
    9: "#000"
  },
  success: {
    DEFAULT: "#0070f3",
    dark: "#0761d1",
    light: "#3291ff",
    lighter: "#d3e5ff"
  },
  error: {
    DEFAULT: "#e00",
    dark: "#c50000",
    light: "#ff1a1a",
    lighter: "#f7d4d6"
  },
  warning: {
    DEFAULT: "#f5a623",
    dark: "#ab570a",
    light: "#f7b955",
    lighter: "#ffefcf"
  },
  violet: {
    DEFAULT: "#7928ca",
    dark: "#4c2889",
    light: "#8a63d2",
    lighter: "#e3d7fc"
  },
  cyan: {
    DEFAULT: "#50e3c2",
    dark: "#29bc9b",
    light: "#79ffe1",
    lighter: "#aaffec"
  },
  highlight: {
    purple: "#f81ce5",
    magenta: "#eb367f",
    pink: "#ff0080",
    yellow: "#fff500"
  },
  foreground: "#000",
  background: "#fff",
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
  "dark-grey-contrast": "var(--colorDarkGreyContrast)"
};

const screens = {
  "7xs": "250px",
  "6xs": "275px",
  "5xs": "325px",
  "4xs": "350px",
  "3xs": "375px",
  "2xs": "415px",
  xs: "480px",
  sm: "640px",
  md: "768px",
  mdlg: "896px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  "3xl": "1920px",
  "4xl": "2240px",
  "5xl": "2780px",
  "6xl": "3250px"
};

/**
 * @type {import('tailwindcss/defaultConfig')}
 */

module.exports = {
  theme: {
    extend: {
      screens: {
        ...screens
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif"
        ],
        gotham: ["Gotham", ...defaultTheme.sans]
      },
      colors: {
        ...colors,
        selection: colors.cyan.light,
        link: {
          DEFAULT: colors.success.DEFAULT,
          light: colors.success.light
        },
        code: colors.rosa,
        secondary: {
          DEFAULT: colors.accents[5],
          dark: colors.accents[7],
          light: colors.accents[3],
          lighter: colors.accents[2]
        }
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100%": { opacity: 0.2 }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        wave: {
          "0%, 100%": {
            transform: "rotate(0)"
          },
          "20%, 60%": {
            transform: "rotate(-25deg)"
          },
          "40%, 80%": {
            transform: "rotate(10deg)"
          }
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)"
          }
        }
      },
      boxShadow: {
        "outline-2": "0 0 0 2px var(--accents-0)",
        "outline-normal": "0 0 0 2px var(--accents-2)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
        cardHover:
          "0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)",
        activeShadow:
          "inset 0 1px 4px 0 rgb(119 122 175 / 40%), inset 0 1px 1px 0 rgb(119 122 175 / 40%), 0 1px 0 0 rgb(35 38 59 / 5%)"
      },
      fontSize: { xxs: ["0.50rem", { lineHeight: "0.75rem" }] }
    }
  }
};
