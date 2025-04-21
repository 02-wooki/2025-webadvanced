import React from "react";

export default function Counter(props) {
  var counter = 0;

  return(
    <div>
      <p>총 {counter}번 클릭했습니다.</p>
      <button onClick={() => {
        console.log(++counter);
      }}>
        클릭
      </button>
    </div>
  );
}