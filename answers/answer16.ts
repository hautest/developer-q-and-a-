export const answer16 = `# React가 무엇이며 왜 사용하는지 ?

# 프론트엔드 프레임워크 사용하는 이유

### 1. 데이터의 변화를 화면에 적용하기 쉽다

### 2. 컴포넌트화 하기 쉽다

# **React란?**

**사용자 인터페이스를 만들기 위한 JavaScript 라이브러리이다**

# React를 사용하는 이유

## Component 작성

1. 유지보수에 유리하다
2. 재사용성이 올라간다

## 수 많은 커뮤니티

## Virtual DOM

웹브라우저 단에서 DOM 변화가 일어나면 웹브라우저가 CSS를 다시 연산하고 레이아웃을 구성하고, 페이지를 리 페인트 즉 렌더링이 일어나는 이 과정에서 시간이 소모된다.

DOM에는 브라우저가 화면을 그리는데 필요한 모든 정보가 들어있어 직접 조작하는 작업은 무겁다. 그래서 React는 DOM의 변경 사항을 빠르게 파악하고 반영하기 위해 내부적으로 Virtual DOM을 만든다

React는 성능 향상을 위해 실제 렌더링된 UI를 내부적으로 JavaScript 객체로 따로 관리한다. 왜냐하면 DOM 노드를 생성하거나 기존 DOM 노드에 접근하는 것이 JavaScript 객체로 표현된 트리 노드를 생성하거나 접근하는 거에 비해 느리기 때문이다. 즉, JavaScript 객체로 표현된 트리에 CRUD 작업을 수행하는 것이 DOM 노드에 CRUD 작업을 수행하는 것보다 일반적으로 더 빠르다. (대신 메모리 사용량이 늘어난다는 단점은 있다.)

## 원리

Component가 반환했던 전에 엘리먼트와 비교해서 다른 경우에만 해당 DOM 노드를 업데이트한다`;
