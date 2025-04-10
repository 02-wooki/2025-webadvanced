import React, { useState } from "react";
import "../../App.css"

function UseStateEx() {
  const [count, setCount] = useState(0);
  return (
    <div className="componentContainer">
      <p>useState를 사용한 변수</p>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

export default UseStateEx;
