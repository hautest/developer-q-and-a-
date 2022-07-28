export const answer17 = `# 리액트 라이프사이클

# 순서

## Mount

DOM이 생성되고 브라우저에 나타나는것

## Update

**Update가 발생하는 상황**

1. props가 바뀔때
2. state가 바뀔때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

## UnMount

DOM이 브라우저에서 사라지는것

# Hook실행순서

## useState, useMemo

이 둘은 먼저 코드가 입력된 순서부터 실행된다

useEffect보다 일찍 실행된다

## useEffect

useEffect는 렌더링 이후 수행된다

\`\`\`jsx
useEffect(()⇒{
	console.log("이것은 렌더링 될때마다 실행~")
})

useEffect(()⇒{
	console.log("이것은 첫렌더링때만 실행~")
},[])

useEffect(()⇒{
	console.log("이것은 state1또는state2가 변할때와 첫 렌더링때만 실행~")
},[state1, state2])

useEffect(()⇒{
	return(()=> {console.log("이것은 Unmount될때 실행")})
})
\`\`\`

\`\`\`jsx
const Children = () => {
  useState(() => {
    console.log("ChildrenState");
  });
  useMemo(() => {
    console.log("ChildrenMemo");
  }, []);
  useEffect(() => {
    console.log("ChildrenEffect");
  }, []);
  return null;
};

const Parent = () => {
  useEffect(() => {
    console.log("ParentEffect");
  }, []);
  useMemo(() => {
    console.log("ParentMemo");
  }, []);
  useState(() => {
    console.log("ParentState");
  });
  return <Children />;
};
\`\`\`

이것의 실행순서는 

1. ParentMemo
2. ParentState
3. ChildrenState
4. ChildrenMemo
5. ChildrenEffect
6. ParentEffect

### 이유는

우선 랜더링 되기전에 부모의 state, memo가 실행된다.

state, memo는 코드를 짠 순서대로 실행된다

### useEffect가 Children부터 실행된 이유

useEffect는 랜더링이 되고나서 실행된다

부모 컴포넌트가 렌더링이 되려면 자식 컴포넌트가 렌더링 되어야한다

자식 컴포넌트가 렌더링되면 자식 컴포넌트의 useEffect가 실행된다

**자식 컴포넌트 렌더링 > 자식 useEffect > 부모 컴포넌트 렌더링 > 부모 useEffect**

# Class 컴포넌트 라이프 사이클

useEffect에서 기본적으로 수행하는것들을 따로 직접 수행시켜줘야한다

## Mount

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

## Updating

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. componentDidUpdate

## UnMount

1. componentWillUnmount`;
