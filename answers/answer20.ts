export const answer20 = `# Webpack, babel

# Webpack이란?

Webpack은 **모듈번들러**이다.

## 모듈 번들러란?

웹을 구성하는 HTML, CSS, Javascript, Image 등을 모두 각각의 모듈로 보고 이들을 하나의 결과물을 만드는 도구를 의미한다.

## 번들링을 하는 이유는?

### 자바스크립트 파일 관리

요즘은 여러개의 자바스크립트 파일을 만들어 개발을 한다. 여러 자바스크립트 파일에서 중복된 이름의 변수가 충돌이 일어날 수 있다.

\`\`\`jsx
<html>
	<body>
		<script>
			var a = 10
			function getNum () {
			console.log(a)
			}
		</script>
		<script>
			var a = 20
			function getNum () {
			console.log(a)
			}
		</script>
		<script>
			getNum() //20
		</script>
	</body>
</html>
\`\`\`

### 웹 페이지 로딩 속도 상승

여러 js파일을 요청하는 것이 아닌 하나의 js 파일을 요청하기 때문에 빨라진다.

---

# Babel이란?

Babel은 **트랜스파일러**이다.

## 트랜스파일러란?

특정 언어로 작성된 코드를 비슷한 다른 언어로 변환시키는 것이다. 모든 브라우저가 ES6의 기능을 제공하지 않기 때문에 ES5코드로 변환시키는 과정이 필요하다.`;
