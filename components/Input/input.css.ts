import { vars } from "../../styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const { spacing, colors } = vars;

export const inputBase = style({
  padding: spacing.md,
  fontSize: "1.5rem",
  borderRadius: "1rem",
  width: "100%",
  border: `solid 3px ${colors.color4}`,
  outline: "none",
});
