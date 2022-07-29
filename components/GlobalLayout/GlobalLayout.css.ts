import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const globalLayoutStyle = style({
  minWidth: "375px",
  maxWidth: "420px",
  height: "100%",
  backgroundColor: vars.colors.color1,
  margin: "0 auto",
});

export const navBox = style({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: vars.colors.color4,
  height: "10%",
});

export const childrenBox = style({
  margin: "0",
  display: "flex",
  justifyContent: "center",
  minHeight: "90%",
  alignItems: "center",
});

export const homeButtonBox = style({
  marginLeft: "3%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
