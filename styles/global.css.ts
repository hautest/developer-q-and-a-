import { fontFace, globalStyle } from "@vanilla-extract/css";

globalStyle("body, button", {
  backgroundColor: "black",
  margin: "0",
  fontFamily: "OTWelcomeRA",
  fontSize: "20px",
});

globalStyle("a", {
  textDecoration: "none",
  color: "black",
});
