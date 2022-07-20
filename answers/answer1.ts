export const answer1 = `# 브라우저 렌더링 과정

1. HTML,CSS 파싱(parsing)
2. 렌더 트리(Render Tree)생성
3. 레이아웃(Layout)생성
4. 페인트(paint)
5. 합성(composite)

이러한 과정을 CRP (Critical Rendering Path)라고 한다

## 1. HTML, CSS parsing

파싱이란?

문자열을 의미 있는 토큰으로 분해하여 토큰 간의 위계 관계를 분석해 구조를 결정하는것이다.

### HTML parsing

HTML데이터를 파싱을 하여서 DOM tree를 만든다.

<script>태그를 만나면 parsing을 중단하고 자바스크립트 코드를 파싱한다.

### CSS parsing

HTML parsing과정에서 <link>태그를 만나면 css코드를 가져온다.

CSSOM tree를 만든다.

DOM : HTML를 조작할 수 있게 도와준다.

CSSOM : 자바스크립트에서 CSS를 조작할 수 있게 해주는 API집합이다.

## 2.Render Tree 생성

Render tree는 DOM tree와 CSSOM tree가 결합되어 생성된다. 

이떄 display : none처럼 레이아웃에서 영역을 차지하고 있지 않는 것들은 tree에서 생략된다.

## 3.Layout

각 요소들의 상대적인 위치, 크기를 찾는 과정이다.

## 4.Paint

렌더 트리를 순회하여 레이어를 만들고 레이어의 배경, 테두리, 텍스트, 그려지는 순서, 레이어간의 순서 등을 기록한다.

## 5.Compositing

각 레이어를 분리해 화면의 픽셀로 변환 시킨뒤 브라우저의 페이지의 크기, 뷰포트에 맞게 합성해서 화면에 나타낸다.`;
