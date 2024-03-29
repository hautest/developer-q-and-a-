export const answer7 = `# 이벤트 버블링, 캡쳐링, 위임

### event가 발생하면 최상단 부모 노드부터 target까지 쭉 내려온다. 이때 캡쳐링 이벤트들이 있으면 실행된다.

### target에 도착하여 target을 실행시키고 다시 최상단 부모 노드까지 올라간다. 이때 버블링 이벤트들이 실행된다.

default는 버블링이며 *onClickCapture 등과 같은 것들을 사용하면 캡쳐링이 걸린다.*

이벤트의 전파를 막으려면 event.stopPropagation() 라는 API를 추가하면 된다.

# 위임

## 이벤트 위임이란?

캡쳐링과 버블링을 이용한 것으로, 여러 엘리먼트마다 각각 이벤트 핸들러를 할당하지 않고, 공통되는 부모에 이벤트 핸들러를 할당하여 이벤트를 관리하는것을 말한다.`;
