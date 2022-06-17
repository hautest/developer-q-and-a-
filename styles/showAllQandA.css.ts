import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const showAllQAndABox = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  marginTop: "10%",
});

export const qAndABox = style({
  width: "80%",
  backgroundColor: vars.colors.white,
  padding: vars.spacing.sm,
});
