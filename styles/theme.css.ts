import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    backgroundDarkMode: "#202124",
    backgroundDarkModeNav: "#354259",
    backgroundLightModeMain: "#ECE5C7",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
});
