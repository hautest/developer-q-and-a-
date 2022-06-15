import Image from "next/image";
import { ReactNode } from "react";

import { themeClass } from "../../styles/theme.css";
import { globalLayoutStyle, buttonBox } from "./GlobalLayout.css";
import Button from "../Button/Button";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <div className={`${themeClass} ${globalLayoutStyle}`}>
        <div className={buttonBox}>
          <Button>
            <Image alt="홈이미지" width="30px" height="30px" src="/home.png" />
          </Button>
          <Button>toggleMode버튼</Button>
        </div>
        {children}
      </div>
    </>
  );
}
