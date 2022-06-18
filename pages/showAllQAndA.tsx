import { useEffect, useState } from "react";
import { qAndAData } from "../qAndAData";

import { showAllQAndABox, qAndABox } from "../styles/showAllQandA.css";
import Button from "../components/Button/Button";

interface dataInterface {
  q: string;
  a: string;
  id: number;
}

export default function ShowAllQAndA() {
  const [toggle, setToggle] = useState(false);
  const [checkedQAndAArray, setCheckedQAndAArray] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageData = localStorage.getItem("check");
      if (typeof localStorageData === "string") {
        setCheckedQAndAArray(JSON.parse(localStorageData));
      }
    }
  }, []);
  const hadleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <main className={showAllQAndABox}>
      <Button onClick={hadleToggle} size="lg">
        {toggle ? "전체보기" : "체크한것만 보기"}{" "}
      </Button>
      {!toggle &&
        qAndAData.map((arr) => (
          <div className={qAndABox} key={arr.id}>
            <div>{arr.q}</div>
            <hr />
            <div>{arr.a}</div>
          </div>
        ))}
      {toggle &&
        checkedQAndAArray.map((arr: dataInterface) => (
          <div className={qAndABox} key={arr.id}>
            <div>{arr.q}</div>
            <hr />
            <div>{arr.a}</div>
          </div>
        ))}
    </main>
  );
}
