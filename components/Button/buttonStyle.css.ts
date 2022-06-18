import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

const baseStyle = style({
  backgroundColor: vars.colors.color2,
  padding: vars.spacing.sm,
  border: "0",
  cursor: "pointer",
  borderRadius: "20px",
  ":hover": {
    backgroundColor: vars.colors.color3,
  },
});

export const buttonStyle = styleVariants({
  lg: [baseStyle, { width: "30vh" }],
  md: [baseStyle, { width: "15vh" }],
});
