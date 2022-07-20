import { answer4, answer1, answer2 } from "./answers";

export const qAndAData = [
  {
    question: "브라우저의 렌더링 과정은 ?",
    answer: answer1,
    id: 0,
  },
  {
    question: "Reflow, Repaint는 무엇이며 최적화 하는 방법은 ?",
    answer: answer2,
    id: 1,
  },
  {
    question: "Sementic Tag란 ?",
    answer:
      "Sementic Tag는 기능은 <div>와 마찬가지로 block element지만 웹의 layout을 설계할때 의미를 부여함으로써 웹의 구조를 파악할 수 있도록 만들어진 태그이다. 시멘틱 태그를 쓰는 이유는 1. SEO(Search Engine Optimization) 2.스크린리더 사용할때 도움이 된다. 3. 유지보수에 유용하다. header, nav, aside, section, article, footer, address, hgroup, main, details, figure, figcaption, mark, time, summary등이 존재한다.",
    id: 2,
  },
  {
    question: "웹 접근성이란 무엇이며 왜 중요한가 ?",
    answer:
      "웹 접근성은 장애인, 고령자 등을 포함한 다양한 사용자가 인터넷상에서 차별없이 일반 사용자와 동등하게 정보에 접근하고 이용할 수 있도록 보장하는것을 말한다. 웹 접근성이 중요한 이유는 1. 누구에게나 동등한 기회 제공을 하기 위해 웹 접근성을 준수해야하며 2. 법률로 웹 접근성 보장이 명시되어 있다.  ",
    id: 3,
  },
  {
    question: "www.naver.com을 입력하면 무슨일이 일어날까 ?",
    answer: answer4,
    id: 4,
  },
];
