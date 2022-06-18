import { ReactNode } from "react";

import { themeClass } from "../../styles/theme.css";
import { buttonStyle } from "./buttonStyle.css";

interface ButtonProps {
  children: string | ReactNode;
  onClick?: () => void;
  size: "lg" | "md";
}

export default function Button({ children, onClick, size }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${themeClass} ${buttonStyle[size]}`}>
      {children}
    </button>
  );
}
