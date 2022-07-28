export const answer2 = `# Reflow, Repaint

## Reflow란?

생성된 DOM 노도의 레이아웃 수치 (너비, 높이, 위치 등) 변경 시 영향 받는 모든 노드의 수치를 다시 계산하여 렌더 트리를 재생성하는 과정

## Repaint란?

Reflow과정이 끝난 후 재생성된 렌더 트리를 다시 그리는 과정

<aside>
💡 꼭 Reflow가 일어나야지만 Repaint가 일어나는것은 아님 !
노드의 background-color, visibility 등등 layout 수치의 변화가 없을시에는 Reflow빼고 Repaint만 일어남.

</aside>

## Reflow는 언제 일어날까 ?

1. 페이지 초기에 렌더링(브라우저 렌더링에서 최초 layout과정)
2. 노드의 추가 or 제거
3. 요소의 위치 or 크기 변경
4. 폰트 변경 or 이미지 변경
5. 윈도우 리사이징

## Reflow 최적화 방법

1. 스타일을 변경할 경우 가장 하위 노드의 클래스를 변경한다(Reflow가 일어나는 범위가 작아짐)
2. inline 스타일을 지양한다(inline스타일은 HTML이 parsing되는 시점에 바로 layout에 영향을 미치기 때문에 추가적인 reflow를 발생시킨다)
3. 애니메이션이 있는 element라면 position을 fixed or absolute로 지정한다(애니메이션 효과는 많은 Reflow를 발생을 시킨다.  position을 fixed or absolute로 지정하게되면 애니메이션을 발생하는 노드를 전체에서 따로 분류하여서 해당 노드만 Reflow가 발생한다)
4. CSS표현식을 지양한다(Reflow가 발생할때 마다 자바스크립트 표현식이 다시 계산이 된다)
5. display: none을 활용(Render tree가 생성될때 제외가 되기 때문에 Reflow비용을 줄일 수 있다)`; 
 