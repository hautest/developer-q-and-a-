export const answer12 = `# CORS

# SOP이란?

SOP(same origin policy)동일 출처 정책을 의미한다

## same origin(동일 출처)란?

프로토콜, 호스트, 포트가 같은것을 의미한다

https://naver.com:80

- 프로토콜 : https
- 호스트 : naver.com
- 포트 : 80

## SOP가 필요한 이유

보안 문제

쿠키에 여러 데이터들을 보관하는데 위험함

# CORS란?

Cross Origin Resource Sharing(교차 출처 리소스 공유)

추가 HTTP헤더를 사용하여, 한 출처에서 실행중인 웹 어플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하는것이다.

# CORS 해결하는 방법

### 1. 크롬 확장프로그램 사용

[https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)

### 2. 서버에서 Access Control Allow Origin 세팅

### 3. proxy server

# 포트를 입력하지 않아도 괜찮은 이유

http : 80

https : 443

이라는 기본 포트값이 있다

**포트값을 명시해놓지 않으면 프로토콜을 참조해 기본 포트값을 사용한다**`;
