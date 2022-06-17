import { useEffect, useState } from "react";

import Button from "../components/Button/Button";
import { quizBox, qAndACard, buttonBox } from "../styles/quiz.css";
import { qAndAData } from "../qAndAData";

interface localStorageInterface {
  q: string;
  a: string;
  id: number;
}

export default function Quiz() {
  const [questionNum, setQuestionNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const maxQuestionNum = qAndAData.length - 1;
  const question = qAndAData[questionNum].q;
  const answer = qAndAData[questionNum].a;
  const id = qAndAData[questionNum].id;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loaclStorageGetItem = localStorage.getItem("check");
      if (typeof loaclStorageGetItem === "string") {
        const localStorageArrar: localStorageInterface[] | null =
          JSON.parse(loaclStorageGetItem);
        setChecked(
          localStorageArrar?.filter((arr) => arr.id === id).length === 1
        );
      }
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
    const localStorgeData = localStorage.getItem("check");
    if (typeof localStorgeData === "string") {
      const pastArr: localStorageInterface[] = JSON.parse(localStorgeData);
      const find = pastArr?.find((arr: localStorageInterface) => arr.id === id);
      if (!find) {
        const storeObj = [...pastArr, { q: question, a: answer, id }];
        localStorage.setItem("check", JSON.stringify(storeObj));
        setChecked((prev) => !prev);
      } else if (!!find) {
        const filter = pastArr?.filter((arr) => arr.id !== id);
        localStorage.removeItem("check");
        localStorage.setItem("check", JSON.stringify(filter));
        setChecked((prev) => !prev);
      }
    } else if (localStorgeData === null) {
      const storeObj = [{ q: question, a: answer, id }];
      localStorage.setItem("check", JSON.stringify(storeObj));
      setChecked((prev) => !prev);
    }
  };

  return (
    <main className={quizBox}>
      <div className={qAndACard}>
        {!showAnswer && <div>{question}</div>}
        {!!showAnswer && <div>{answer}</div>}
      </div>
      <div className={buttonBox}>
        <Button size="md" onClick={handleToggle}>
          {showAnswer ? "문제보기" : "정답보기"}
        </Button>
        <Button size="md" onClick={handleCheck}>
          {checked ? "체크해제하기" : "체크하기"}
        </Button>
        <Button size="md" onClick={handleBefore}>
          이전
        </Button>
        <Button size="md" onClick={handleNext}>
          다음
        </Button>
      </div>
    </main>
  );
}
