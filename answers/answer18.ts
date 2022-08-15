export const answr18 = `# useCallback, useMemo, React.Memo

# Memoization

메모이제이션이란 연산의 결과값을 저장해두고 동일한 입력이 들어오면 재활용하는것을 의미한다. 적절하게 사용하면 메모리를 더 쓰긴 하지만 성능이 향상된다.

# useMemo

**메모리제이션된 값을 반환한다**

\`\`\`jsx
const memoziedValue = useMemo(()=> something(a,b),[a,b] )
\`\`\`

### 사용예시

\`\`\`jsx
const getId = id=>{
	console.log("id가 변경")
	return id
}
const getPassword = password => {
	console.log("password가 변경")
	return password
}

function Inner ({id, password}) {
	const newId = getId(id)
	const newPassword = getPassword(password)
	return <div>
	{newId}{newPassword}
</div>
}

export default function App () {
	const [id, setId] = useState("")
	const [password, setPassword] = useState("")

	const handleId =(e)=>{
		const {target : {value}}=e;
		setId(value)
	}
	const handlePassword =(e)=>{
		const {target : {value}}=e;
		setPassword(value)
	}

	return 
		<>
			<input value={id} onChange={handleId} />
			<input value={password} onChange={handlePassword} />
			<Inner id={id} password={password} />
		</>
}
\`\`\`

이런식으로 코드를 짜면 id, password각각 변해도 “id가 변경”, “password가 변경”둘 다 console에 찍힌다. 여기서 **useMemo**를 사용하면 불필요한것을 막을 수 있다.

\`\`\`jsx

function getId(id) {
  console.log("id가 변경");
  return id;
}
const getPassword = (password) => {
  console.log("password가 변경");
  return password;
};

function Inner({ id, password }) {
  const newId = useMemo(()=>{
    return getId(id);
  },[id]) 
  const newPassword = useMemo(()=>{
    return getPassword(password);
  },[password]) 
  return (
    <div>
      {newId}
      {newPassword}
    </div>
  );
}

export default function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    const {
      target: { value }
    } = e;
    setId(value);
  };
  const handlePassword = (e) => {
    const {
      target: { value }
    } = e;
    setPassword(value);
  };

  return (
    <>
      <input value={id} onChange={handleId} />
      <input value={password} onChange={handlePassword} />
      <Inner id={id} password={password} />
    </>
  );
}
\`\`\`

이런식으로 **useMemo**를 사용하면 id를 바뀌면 “id가 변경”만

password가 변경되면 “password가 변경”만 찍한다.

# useCallback

**메모리제이션된 함수를 반환한다**

\`\`\`jsx
const memoziedFunction = useCallback(()=> {
	console.log(a,b)
},[a,b])
\`\`\`

# useMemo, useCallback 차이점

useMome : return 값을 저장

useCallback : callback함수를 저장

# React.Memo

리액트는 부모 컴포넌트가  렌더링되면 부모 컴포넌트에 속한 자식 컴포넌트 또한 렌더링이 된다. 그런데 자식 컴포넌트로 내려주는 props가 바뀌지 않는다면, 바뀌지 않는 자식 컴포넌트는 리렌더링이 일어나지 않아도 될 것이다. 이처럼 리렌더링이 필요한 컴포넌트만 리렌더링 시키는 함수를 **React.memo**라고 한다.

\`\`\`jsx
const Small = function ({number, setNumer}) {
  console.log("small render!!")
  const handlePlue =()=> {
    setNumer((prev)=> prev+1)
  }
  const handleMius = (e)=>{
    setNumer((prev)=> prev-1)
  }
  return <>
  <button onClick={handleMius} >-</button>
  {number}
  <button onClick={handlePlue} >+</button>
  </>
} 

const Big =function ({number, setNumer}) {
  console.log("big render!!")
  const handlePlue =()=> {
    setNumer((prev)=> prev+100)
  }
  const handleMius = (e)=>{
    setNumer((prev)=> prev-100)
  }
  return <>
  <button onClick={handleMius} >-</button>
  {number}
  <button onClick={handlePlue} >+</button>
  </>
}

function Parent ({smallNum,setSmallNum,bigNum, setBigNum }) {
  return <>
  <Small number={smallNum} setNumer={setSmallNum}  />
  <br/>
  <Big number={bigNum} setNumer={setBigNum} />
</>
}

export default function App () {
  const [smallNum, setSmallNum] =useState(0)
  const [bigNum, setBigNum] =useState(0)
  return <Parent smallNum={smallNum} setSmallNum={setSmallNum}bigNum={bigNum} setBigNum={setBigNum} />
};
\`\`\`

이런식으로 그냥 사용하면 small, big들을 각각 클릭해서 숫자를 바꾸면 

"big render!!", “small render!!” 가 둘 다 찍힌다.

여기서 React.memo를 사용하면 

\`\`\`jsx
const Small = React.memo(function ({number, setNumer}) {
  console.log("small render!!")
  const handlePlue =()=> {
    setNumer((prev)=> prev+1)
  }
  const handleMius = (e)=>{
    setNumer((prev)=> prev-1)
  }
  return <>
  <button onClick={handleMius} >-</button>
  {number}
  <button onClick={handlePlue} >+</button>
  </>
} )

const Big = React.memo(function ({number, setNumer}) {
  console.log("big render!!")
  const handlePlue =()=> {
    setNumer((prev)=> prev+100)
  }
  const handleMius = (e)=>{
    setNumer((prev)=> prev-100)
  }
  return <>
  <button onClick={handleMius} >-</button>
  {number}
  <button onClick={handlePlue} >+</button>
  </>
})

function Parent ({smallNum,setSmallNum,bigNum, setBigNum }) {
  return <>
  <Small number={smallNum} setNumer={setSmallNum}  />
  <br/>
  <Big number={bigNum} setNumer={setBigNum} />
</>
}

export default function App () {
  const [smallNum, setSmallNum] =useState(0)
  const [bigNum, setBigNum] =useState(0)
  return <Parent smallNum={smallNum} setSmallNum={setSmallNum}bigNum={bigNum} setBigNum={setBigNum} />
};
\`\`\`

small은 “small render!!”, big은 “big render!!”가 각각 찍힌다(불필요하게 두개씩 찍히지 않는다.)`;
