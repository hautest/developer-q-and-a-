import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

import { themeClass } from "../../styles/theme.css";
import { globalLayoutStyle, navBox, childrenBox } from "./GlobalLayout.css";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className={`${themeClass} ${globalLayoutStyle}`}>
      <div className={navBox}>
        <div>
          <Link href="/">
            <Image
              alt="홈이미지"
              width="30px"
              height="30px"
              src="/home.png"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div>toggleMode버튼</div>
      </div>
      <div className={childrenBox}>{children}</div>
    </div>
  );
}
