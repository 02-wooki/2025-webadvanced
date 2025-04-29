import './App.css';
import Counter from './Components/UseState/Counter';
import RealCounter from './Components/UseState/RealCounter';
import Counter3 from './Components/UseEffect/Counter3';
import MouseTracker from './Components/UseEffect/MouseTracker';
import FetchData from './Components/UseEffect/FetchData';
import Accommodate from './Components/Accommodate';
import ExpensiveCalculation from './Components/UseMemo/ExpensiveCalculation';
import TodoApp from './Components/TodoApp';
import TabMenu from './Components/TabMenu';
import UserList from './Components/UserList';

function App() {

  const tmp = 'react';
  return (
    <div className='App'>
      <h1>useState 사용 예시</h1>
        <div className="sect">
        <p>var변수를 통한 상태 관리</p>
        <Counter />
        <hr />
        <p>useState 훅을 이용한 상태 관리</p>
        <RealCounter />
        <hr />
      </div>
      <h1>useEffect 사용 예시</h1>
        <div className="sect">
        <p>useEffect 훅 사용</p>
        <Counter3 />
        <hr />
        <p>useEffect 훅으로 마우스 위치 추적</p>
        <MouseTracker />
        <hr />
        <p>useEffect 훅으로 api 호출</p>
        <FetchData />
        <hr />
      </div>
      <h1>custum Hook 사용 예시</h1>
        <div className='sect'>
        <p>custum Hook 만들어서 사용하기</p>
        <Accommodate />
      </div>
      <h1>useMemo 사용 예시</h1>
        <div className='sect'>
          <ExpensiveCalculation />
        </div>

      <hr />
      <TodoApp />

      <hr />
      <TabMenu />

      <hr />
      <UserList />
    </div>
  );
}

export default App;
