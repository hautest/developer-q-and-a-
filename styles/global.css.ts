import { fontFace, globalStyle } from "@vanilla-extract/css";

globalStyle("body, button", {
  backgroundColor: "black",
  margin: "0",
  outline: "none",
  fontFamily: "OTWelcomeRA",
  fontSize: "20px",
});

globalStyle("a", {
  textDecoration: "none",
  color: "black",
});
