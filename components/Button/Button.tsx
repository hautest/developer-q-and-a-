import { ReactNode } from "react";

import { themeClass } from "../../styles/theme.css";
import { buttonStyle } from "./buttonStyle.css";

interface ButtonProps {
  children: string | ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <button className={`${themeClass} ${buttonStyle}`}>{children}</button>;
}
