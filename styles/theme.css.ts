import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    color1: "#C2DED1",
    color2: "#ECE5C7",
    color3: "#CDC2AE",
    color4: "#354259",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
});
