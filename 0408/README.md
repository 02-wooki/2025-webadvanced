# 6주차
## 📘 4장: React - Component

### 🔸 컴포넌트(Component)
- UI를 구성하는 **재사용 가능한 코드 블록**
- HTML, CSS, JS, State, Props를 포함
- **모든 페이지는 컴포넌트로 구성**
- 작은 컴포넌트들을 조합해 더 큰 컴포넌트를 구성할 수 있음
- **컴포넌트 이름은 항상 대문자로 시작**

### 🔸 Props
- **Property(속성)** 의 약자
- 컴포넌트에 데이터를 전달할 수 있는 방법
- 컴포넌트의 **입력값(Input)** 역할
- 읽기 전용(Read-only)이며, 변경 불가
- 중괄호`{}`를 사용해 문자열 외 값 전달


### 🔸 함수형 vs 클래스형 컴포넌트
|항목|함수형 컴포넌트|클래스형 컴포넌트|
|---|---|---|
|선언 방식|함수 (`function`)|클래스 (`class`)|
|상태 관리|`useState` Hook|`this.state`|
|생명주기 관리|`useEffect` Hook|`componentDidMount` 등|
|코드 길이|짧고 간결|상대적으로 길어짐|
|`this` 사용|❌ 없음|✅ 사용|
|Hooks 사용|✅ 가능|❌ 불가|
|퍼포먼스	최적화|쉬움|상대적으로 무거움|

### 🔸 컴포넌트 합성 (Composition)
- **여러 컴포넌트를 결합** 해 더 복잡한 UI를 구성
- 마치 **레고 블록처럼 조립**
- `props.children`을 사용해 자식 요소 포함 가능

#### ✅ 기본 합성 예시
##### Child.js
```jsx
export default function Child() {
  return ( <p>자식 컴포넌트</p> );
}
```
##### Parent.js
```jsx
export default function Parent() {
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <Child />
    </div>
  );
}
```
##### App.js
```jsx
export default function App.js() {
  return ( <Parent /> );
}
```

#### ✅ props를 이용한 확장된 합성
##### Child.js
```jsx
export default function Child({ name }) {
  return <p>안녕하세요!, {name}님!</p>;
}
```
##### Parent.js
```jsx
export default function Parent() {
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <Child name="홍길동" />
    </div>
  );
}
```
##### App.js
```jsx
export default function App.js() {
  return ( <Parent /> );
}
```

### 🔸 컴포넌트 추출 (Extraction)
- 하나의 큰 컴포넌트를 작은 컴포넌트로 분리
- 유지보수 및 재사용성 향상

#### ✅ 예시 구조 분리
- Avatar, UserInfo → Profile 내부로부터 추출
##### Avatar.jsx
```jsx
export default function Avatar({ src }) {
  return <img src={src} alt="프로필 이미지" width="100" />;
}
```
##### UserInfo.jsx
```jsx
export default function UserInfo({ name, job }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}
```
##### Profile.jsx
```jsx
export default function Profile() {
  return(
    <div>
      <Avatar src="profile.jpg" />
      <UserInfo name="홍길동" job="프론트엔드 개발자" />
    </div>
  );
}
```
### 💬 댓글 컴포넌트 만들기 실습
- Comment → 댓글 하나
- CommentList → 댓글 리스트
- App.js와 index.js에서 렌더링

#### ✅ Comment.jsx 예시
```jsx
export default function Comment({ name, comment }) {
  return (
    <div>
      <span>{name}</span>
      <p>{comment}</p>
    </div>
  );
}
```
```jsx
const comments = [
  {
    name: "강동협",
    comment: "안녕하세요, 랩장입니다."
  },
  {
    name: "손영빈",
    comment: "리액트 재미있어요~!"
  },
  {
    name: "박세현",
    comment: "저도 리액트 배워보고 싶어요!!"
  }
];

export default function CommentList(props) {
  return (
    <div>
      {comments.map((c) => {
        return (
          <Comment name={c.name} comment={c.comment} />
        );
      })}
    </div>
  );
}
```
#### App.js
```jsx
export default function App() {
  return ( <CommentList /> );
}
```

<br><br>

## 📘 5장: State와 생명주기(Life Cycle)
### 📌 State란?
> *컴포넌트 내부에서 동적으로 변하는 데이터를 저장하는 JavaScript 객체*
- 컴포넌트의 UI를 동적으로 변경할 때 사용되며, 상태가 변경되면 자동으로 리렌더링
- React 컴포넌트 개발에서 필수 개념

### 🔁 Props와 State 차이
- `Props`는 부모 컴포넌트로부터 전달받은 읽기 전용 데이터
- `State`는 컴포넌트 내부에서 선언되고 변경 가능한 데이터
- 함수형 컴포넌트에서는 `useState`, 클래스형에서는 `this.state`와 `this.setState()` 사용

### 📋 클래스형 컴포넌트에서의 State 사용 예시
##### Test.jsx
```jsx
class Test extends Component {
  constructor(props) {
      // state 값 초기화
    super(props);
    this.state = {
      title: 'subtest'
    }
  }
  render() {
    return (
      <div>
        <SubTest
          title={this.state.title}
          onClick={() => { this.setState({ title: 'Clicked' }); }.bind(this)}
        />
      </div>
    )
  }
}

export default Test();
```
##### SubTest.jsx
```jsx
class SubText extends Component {
  render() {
    return (
      <button
        onClick = {
          function(e) {
            e.preventDefault();
            console.log('clicked');
          }.bind(this)
        }
      >{this.props.title}</button>
    )
  }
}

export default SubTest();
```

### 📋 함수형 컴포넌트에서의 State 사용 예시
##### Test.jsx
```jsx
export default function Test() {
  const [title, setTitle] = useState('subTest');

  return (
    <SubTest 
      title={title}
      onClick={() => setTitle('Clicked')}
    />
  );
}
```
##### SubTest.jsx
```jsx
export default function SubTest({title}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        return console.log('clicked');
      }}
    >{title}</button>
  );
}
```

### 🔄 컴포넌트 생명주기(Component LifeCycle)
#### 🟢 Mount (컴포넌트가 생성되어 나타나는 시점)
- `constructor()`: 초기 state 설정
- `render()`: UI 렌더링
- `componentDidMount()`: 최초 렌더링 후 실행됨 (API 호출 등)

#### 🔁 Update (props 또는 state 변경 시)
- `shouldComponentUpdate()`: 렌더링 여부 결정
- `render()`: 변경 반영하여 다시 렌더링
- `componentDidUpdate()`: 변경 후 작업 처리

#### 🔴 Unmount (컴포넌트 제거 시)
- `componentWillUnmount()`: 타이머 해제, 이벤트 정리 등 수행

### ⚙️ 함수형 컴포넌트에서 생명주기 구현 (useEffect)
```jsx
// Mount, unMount될 때 실행
useEffect(() => {
  console.log("Mounted");
  return () => console.log("Unmounted");
}, []);

// count 값이 변경될 때마다 실행
useEffect(() => { console.log("count 변경됨"); }, [count]);
```