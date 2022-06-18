import { useRouter } from "next/router";

import { homeStyle, titleStyle } from "../styles/index.css";
import { themeClass } from "../styles/theme.css";
import Button from "../components/Button/Button";
import Link from "next/link";

function Home() {
  return (
    <div className={`${homeStyle} ${themeClass} `}>
      <div className={titleStyle}>DEVELOPER Q&A</div>
      <Link href="/quiz">
        <a>
          <Button size="lg">Quiz 시작하기</Button>
        </a>
      </Link>
      <Link href="/showAllQAndA">
        <a>
          <Button size="lg">Q&A한번에보기</Button>
        </a>
      </Link>
      <Button size="lg">설명서</Button>
    </div>
  );
}

export default Home;
