import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const globalLayoutStyle = style({
  minWidth: "375px",
  minHeight: "100vh",
  maxWidth: "420px",
  backgroundColor: vars.colors.white,
  margin: "0 auto",
});

export const buttonBox = style({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: vars.colors.backgroundDarkModeNav,
});
