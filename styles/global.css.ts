import { fontFace, globalStyle } from "@vanilla-extract/css";

globalStyle("body, button", {
  backgroundColor: "black",
  margin: "0",
  fontFamily: "'Nanum Pen Script', cursive",
  fontSize: "20px",
});

globalStyle("a", {
  textDecoration: "none",
  color: "black",
});
