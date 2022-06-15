import Link from "next/link";

import { homeStyle, titleStyle } from "../styles/index.css";
import { themeClass } from "../styles/theme.css";
import Button from "../components/Button/Button";

function Home() {
  return (
    <div className={`${homeStyle} ${themeClass} `}>
      <div className={titleStyle}>DEVELOPER Q&A</div>
      <Button>시작하기</Button>
      <Button>Q&A한번에보기</Button>
      <Button>Q&A추가하기</Button>
      <Button>설명서</Button>
    </div>
  );
}

export default Home;
