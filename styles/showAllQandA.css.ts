import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const flexCenter = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
  gap: "30px",
});

export const baseListStyle = style({
  padding: "0",
  listStyle: "none",
});

export const showAllQAndABox = style([
  flexCenter,
  {
    width: "100%",
    marginTop: "10%",
    backgroundColor: vars.colors.color1,
  },
]);

export const qAndABox = style({
  width: "80%",
  backgroundColor: vars.colors.white,
  padding: vars.spacing.md,
  borderRadius: vars.spacing.sm,
});

export const lineColor = style({
  borderColor: vars.colors.color3,
});

export const answerStyle = style({
  overflow: "scroll",
  height: "50vh",
  "::-webkit-scrollbar": {
    display: "none",
  },
});
