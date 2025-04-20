import React, { useEffect, useState } from "react";
import useCounter from "./UseCounter/useCounter";

export default function Accommodate(props) {
  const MAX_VALUE = 15;
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0, MAX_VALUE);

  useEffect(() => {
    console.log('Accommodate: 마운트됨');
  }, []);

  useEffect(() => {
    console.log('Accommodate: 리렌더링됨');
    console.log(`count: ${count}, isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_VALUE);
  }, [count]);

  return (
    <div>
      <p>현재 입장한 인원은 {count}명</p>
      <button onClick={increaseCount}>입장시키기</button>
      <button onClick={decreaseCount}>퇴장시키기</button>
      {isFull && <p style={{ color: '#833' }}>인원이 가득 찼습니다.</p>}
    </div>
  );
}