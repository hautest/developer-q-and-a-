export const answer10 = `# 함수 선언문, 함수 표현식, 화살표 함수

# 함수선언문이란?

\`\`\`ts
function fun () {
	console.log("출력출력")
}
\`\`\`

이런식으로 표현한다

# 함수표현식이란?

\`\`\`jsx
const fun = function(){
	console.log("출력출력")
}
\`\`\`

이런식으로 변수에 함수를 할당을 한다.

# 함수선언문 vs 함수표현식

\`\`\`jsx
fun1() // fun1입니다
fun2() // fun2는 함수가 아닙니다

function fun1 () {
	console.log("fun1입니다")
}

var fun2 = function(){
	console.log("fun2입니다")
}
\`\`\`

이렇게 나오는 이유는 호이스팅 문제이다

\`\`\`jsx
var fun2

fun1() // fun1입니다. fun1는 한번에 위에서 호이스팅된다.
fun2() // fun2는 함수가 아닙니다. fun2 === undifined 로나온다.

function fun1 () {
	console.log("fun1입니다")
}

fun2 = function(){
	console.log("fun2입니다")
}
\`\`\`

# 화살표 함수

일반 함수와 arguments 객체와 this 바인딩을 하지 않는다`;
