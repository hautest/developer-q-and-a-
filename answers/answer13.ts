export const answer13 = `# 실행컨텍스트

# 실행 컨텍스트란 ?

실행할 코드의 환경 정보를 모아놓은 객체를 말한다 = 스코프의 정보를 담은 환경

## 코드 실행에 필요한 정보들은 ?

- **변수**
- **함수 선언**
- **변수의 유효 범위**
- **This**

# 실행 컨텍스트의 종류

## 전역 컨텍스트

콜스텍에 제일 밑에 있는 실행 컨텍스트

- 함수 내부에 없는 코드들은 전역 컨텍스트에서 실행됨
- window 전역 컨텍스트를 생성한다
- this를 전역 객체로 설정한다

## 함수 컨텍스트

함수가 호출 될때 해당 함수에 맞는 함수 컨텍스트가 콜스텍에 쌓임

# 실행 컨텍스트 과정

![https://velog.velcdn.com/images%2Fiamjoo%2Fpost%2F3b75359c-f184-4bed-9c8d-6b8f84aeeba7%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.36.58.png](https://velog.velcdn.com/images%2Fiamjoo%2Fpost%2F3b75359c-f184-4bed-9c8d-6b8f84aeeba7%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-01-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.36.58.png)

\`\`\`jsx
console.log("전역");
function outer() {
  console.log("outer함수");
  function inner() {
    console.log("inner함수");
  }
  inner();
}
outer();
\`\`\`
`;
