export const answer22 = `# Head Tag

## title

웹 페이지의 제목을 나타낸다. 검색 엔진에서 가장 크게 보여짐으로 페이지의 특성을 잘 드러내야한다.

한 웹 페이지당 한 번만 사용해야한다.

\`\`\`jsx
<html>
	<head>
	<title>
	이 웹 페이지의 제목
	</title>
	</head>
	<body>
		<h1>
		제목제목
		</h1>
	</body>
</html>
\`\`\`

## style

문서의 스타일 정보가 포함된다.

### stlye tag의 위치 head vs body

보통 style을 적용 시킬때 head에 link tag를 이용해서 외부 파일을 연결한다. 

body에 style tag를 써서 style을 넣으면 html파일이 커질수록 늦게 style tag가 인식되기 때문에 유저가 처음 본 화면에 style 적용이 안될 수 있다.

## meta

태그는 해당 문서에 대한 정보인 메타데이터(metadata)를 정의할 때 사용한다.

> metadata는 데이터를 설명하는 데이터이다.
> 

### meta tag로 설명할 수 있는 것들

- character 인코딩하기

\`\`\`jsx
<meta charset="utf-8">
\`\`\`

- 저자 표시하기

\`\`\`jsx
<meta name="author" content="Lee">
\`\`\`

- 설명 표시하기

\`\`\`html
<meta name="description" content="The MDN Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
\`\`\`

- 5초 뒤에 다른 페이지로 redirect하는 예제

\`\`\`html
<meta http-equiv="refresh" content="5;url=http://www.naver.com" />
\`\`\`

- viewport를 설정하는 예제

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

- 검색 엔진에 검색되는 단어를 지정

\`\`\`html
<meta name="Keywords" content="Web, html, 웹 표준" />
\`\`\`

이것들 이외에도 여러 속성들이 있다.`;
