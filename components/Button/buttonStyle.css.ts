import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const buttonStyle = style({
  backgroundColor: vars.colors.color2,
  padding: vars.spacing.sm,
  border: "0",
  cursor: "pointer",
  borderRadius: "20px",
  width: "50%",
  ":hover": {
    backgroundColor: vars.colors.color3,
  },
});
