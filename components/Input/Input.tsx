import { inputBase } from "./input.css";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return <input className={inputBase} {...rest} />;
}
