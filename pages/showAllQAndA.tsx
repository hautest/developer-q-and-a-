import { useState, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { qAndAData } from "../qAndAData";

import {
  showAllQAndABox,
  qAndABox,
  answerStyle,
  lineColor,
  flexCenter,
  baseListStyle,
} from "../styles/showAllQandA.css";
import Button from "../components/Button/Button";
import { checkStorage } from "../utils/localStorage/checkStorage";

interface ListProps<T> {
  list: T[];
  renderItem: (value: T, index: number) => ReactNode;
  className?: string;
}

function List<T>({ list, renderItem, className }: ListProps<T>) {
  return (
    <ul className={`${baseListStyle} ${className}`}>{list.map(renderItem)}</ul>
  );
}

export default function ShowAllQAndA() {
  const [toggle, setToggle] = useState(false);

  const hadleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <main className={showAllQAndABox}>
      <Button onClick={hadleToggle} size="lg">
        {toggle ? "전체보기" : "체크한것만 보기"}
      </Button>
      <List
        className={flexCenter}
        list={toggle ? Object.values(checkStorage.get() ?? {}) : qAndAData}
        renderItem={({ question, answer }) => (
          <li className={qAndABox} key={answer}>
            <div>{question}</div>
            <hr className={lineColor} />
            <ReactMarkdown className={answerStyle}>{answer}</ReactMarkdown>
          </li>
        )}
      />
    </main>
  );
}
