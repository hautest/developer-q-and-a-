import { answer4 } from "./answers";

export const qAndAData = [
  {
    question: "브라우저의 렌더링 과정은 ?",
    answer:
      "HTML,CSS parsing => Render tree 생성 => Layout => Paint => Composite(합성) 과정을 통해서 렌더링 된다. parsing이란 문자열을 의미 있는 토큰으로 분해하여 토큰 간의 위계 관계를 분석해 구조를 결정하는것을 말한다. HTML parsing을 통해서 DOM tree를 만들고 CSS parsing을 통해서 CSSOM tree를 만든다. DOM tree와 CSSOM tree가 결합하여 Render tree를 생성한다. Layout에서 각 요소들의 위치, 크기를 찾는다. Paint에서 Render tree를 순회하며 레이어를 만들고 레이어의 배경, 테두리, 그려지는 순서, 레이어간의 순서등을 기록한다. Compositing에서 각 레이어를 분리해 화면의 픽셀로 변환시킨뒤 브라우저의 페이지의 크기, 뷰포트에 맞게 합성해서 화면에 나타낸다.",
    id: 0,
  },
  {
    question: "Reflow, Repaint는 무엇이며 최적화 하는 방법은 ?",
    answer:
      "Reflow는 생성된 DOM노드에 레이아웃 수치 변경시에 영향 받는 모든 노드 수치를 계산하여 Render tree를 재생성하는 과정을 말한다. Repaint는 Reflow과정이 끝난뒤에 재생성된 Render tree를 다시 그리는 과정을 말한다. (꼭 Reflow가 일어나야 Repaint가 일어나는것은 아니며 background-color, vusubility 등 layout 수치의 변화가 없을때에는 Reflow는 실행되지 않고 Repaint만 실행된다.) Reflow는 페이지 초기 렌더링, 노드의 추가와 제거, 요소의 위치와 크기 변경, 폰트 변경, 이미지 변경등에서 발생되며 최적화하는 방법으로는 스타일을 변경할 경우 가장 하위 노드의 스타일을 변경하고(Reflow가 일어나는 범위가 작아짐) inline스타일,CSS표현식을 지양한다. 그리고 애니메이션이 있는경우 애니메이션의 position을 fixed or abosolute로 지정한다. display: none을 활용한다",
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
