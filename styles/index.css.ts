import { style } from "@vanilla-extract/css";

export const homeStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "30px",
  alignItems: "center",
  height: "100%",
});

export const titleStyle = style({
  fontSize: "30px",
});
