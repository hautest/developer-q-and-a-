import { style } from "@vanilla-extract/css";

export const homeStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  gap: "30px",
  alignItems: "center",
});

export const titleStyle = style({
  fontSize: "30px",
});
