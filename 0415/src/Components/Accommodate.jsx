import React, { useEffect, useState } from 'react';
import useCounter from '../Hooks/useCounter';

const MAX_CAPACITY = 10;

export default function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log(`useEffect is Called`);
    console.log(`isFull = ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    setIsEmpty(count <= 0);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{padding: 16}}>
      <p>{`총 ${count}명 수용했습니다`}</p>

      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>

      {isFull && <p style={{color: '#883333'}}>정원이 가득 찼습니다.</p>}
    </div>
  );
}