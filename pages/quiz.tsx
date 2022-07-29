import { useEffect, useState } from "react";

import Button from "../components/Button/Button";
import ReactMarkdown from "react-markdown";
import { quizBox, qAndACard, buttonBox, markUpStyle } from "../styles/quiz.css";
import { qAndAData } from "../qAndAData";
import { checkStorage } from "../utils/localStorage/checkStorage";

export default function Quiz() {
  const [questionNum, setQuestionNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const maxQuestionNum = qAndAData.length - 1;
  const question = qAndAData[questionNum].question;
  const answer = qAndAData[questionNum].answer;
  const id = qAndAData[questionNum].id;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = checkStorage.get();

      setChecked(!!data?.[id]);
    }
  }, [questionNum, id]);

  const handleToggle = () => {
    setShowAnswer((prev) => !prev);
  };
  const handleBefore = () => {
    if (questionNum === 0) {
      return;
    }
    setQuestionNum((prev) => prev - 1);
    setShowAnswer(false);
  };
  const handleNext = () => {
    if (questionNum === maxQuestionNum) {
      return;
    }
    setQuestionNum((prev) => prev + 1);
    setShowAnswer(false);
  };

  const handleCheck = () => {
    const localStorgeData = checkStorage.get();
    if (!!localStorgeData) {
      const find = localStorgeData[id];

      if (find) {
        checkStorage.remove(id);
      } else {
        checkStorage.append(id, { question, answer });
      }
    } else {
      checkStorage.set({ [id]: { question, answer } });
    }
    setChecked((prev) => !prev);
  };

  return (
    <div className={quizBox}>
      <article className={qAndACard}>
        {!showAnswer && <p>{question}</p>}
        {!!showAnswer && (
          <ReactMarkdown className={markUpStyle}>{answer}</ReactMarkdown>
        )}
      </article>
      <div className={buttonBox}>
        <Button size="md" onClick={handleToggle}>
          {showAnswer ? "문제보기" : "정답보기"}
        </Button>
        <Button size="md" onClick={handleCheck}>
          {checked ? "체크해제" : "체크하기"}
        </Button>
        <Button size="md" onClick={handleBefore}>
          이전
        </Button>
        <Button size="md" onClick={handleNext}>
          다음
        </Button>
      </div>
    </div>
  );
}
