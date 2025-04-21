import React, { useEffect, useState } from "react";

export default function Counter3(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 마운트됨');
  }, [])

  useEffect(() => {
    document.title=count;
    console.log('카운트 값이 변경됨')
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머: 1초 지남');
    }, 1000);

    return () => {
      console.log('타이머 종료');
      clearInterval(timer);
    }
  })

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => {
        setCount(prev => prev + 1);
      }}>
        클릭
      </button>
    </div>
  );
}