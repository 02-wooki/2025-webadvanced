import React from "react";
import "../../App.css"

export default function NonUseStateTest() {
  var count = 0;
  return (
    <div className="componentContainer">
      <p>useState를 사용하지 않은 변수</p>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => count++}>
        클릭
      </button>
    </div>
  );
}