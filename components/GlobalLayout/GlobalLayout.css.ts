import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const globalLayoutStyle = style({
  minWidth: "375px",
  minHeight: "100vh",
  maxWidth: "420px",
  backgroundColor: vars.colors.color1,
  margin: "0 auto",
});

export const navBox = style({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: vars.colors.color4,
  height: "5vh",
});

export const childrenBox = style({
  height: "95vh",
});
