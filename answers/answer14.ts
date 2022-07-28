export const answer14 = `# 클로저

# 클로저란 ?

\`\`\`jsx
function outer() {
  var a = "a";
  function inner() {
    console.log(a);
  }
  return inner;
}

function bb() {
  console.log(a);
}

const fun = outer();
fun();
\`\`\`

함수에 함수가 리턴될때 inner에서 outer의 변수로 접근할 수 있다.`;
