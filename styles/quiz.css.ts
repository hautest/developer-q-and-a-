import { style } from "@vanilla-extract/css";

import { vars } from "./theme.css";

export const quizBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  height: "100%",
});

export const qAndACard = style({
  width: "80%",
  height: "50vh",
  backgroundColor: vars.colors.white,
  padding: vars.spacing.sm,
  display: "flex",
  alignItems: "center",
});

export const buttonBox = style({
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "10px",
  columnGap: "5px",
});
