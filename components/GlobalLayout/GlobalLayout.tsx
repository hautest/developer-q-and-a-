import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

import { themeClass } from "../../styles/theme.css";
import {
  globalLayoutStyle,
  navBox,
  childrenBox,
  homeButtonBox,
} from "./GlobalLayout.css";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div className={`${themeClass} ${globalLayoutStyle}`}>
      <header className={navBox}>
        <nav className={homeButtonBox}>
          <Link href="/">
            <a>
              <Image
                alt="홈이미지"
                width="30px"
                height="30px"
                src="/home.png"
              />
            </a>
          </Link>
        </nav>
      </header>
      <main className={childrenBox}>{children}</main>
    </div>
  );
}
