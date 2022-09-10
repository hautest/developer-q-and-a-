export const answer21 = `# Position

# position : static

**static**은 position 기본값이다.

**top, bottom, left, right** 속성은 무시된다

# position : relative

**relative**는 원래 위치를 기준으로  **top, bottom, left, right**을 통해서 움직일 수 있다.

# position : absolute

**absolute**를 사용한 요소를 기준으로 상위 요소로 올라가 **position : static**이 아닌 요소를 기준으로 움직인다.

\`\`\`jsx
<!DOCTYPE html>
<html>
  <body>
    <main>
      <div id="first">1</div>
      <div id="second">2</div>
      <div id="third">3</div>
    </main>
    <style>
      main {
        width: 300px;
        height: 300px;
        background-color: green;
      }
      #first {
        background-color: red;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50px;
      }
      #second {
        background-color: pink;
        width: 100px;
        height: 100px;
      }
      #third {
        background-color: blue;
        width: 100px;
        height: 100px;
      }
    </style>
  </body>
</html>
\`\`\`

이런식으로 상위 요소인 main이 **static**으로 설정되어 있으면 **body**를 참고해서 움직인다.

# position : fixed

특정 요소를 해당위치에 고정시킬때 쓰인다.

**viewport**를 기준으로 **top, bottom, left, right**적용되어 ****움직인다.

# position : sticky

스크롤 하다가 **top, bottom, left, right**를 통해서 정한 위치에 고정된다.`;
