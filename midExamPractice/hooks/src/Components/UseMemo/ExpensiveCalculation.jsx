import React, { useState, useMemo } from "react";

function CalcWithOutUseMemo({number}) {
  console.log('useMemo 훅 없이 계산 시작');

  let result = 0;
  for (let i = 0; i < 100000; i++) {
    result += i;
  }

  console.log('useMemo 훅 없이 계산 완료');
  return <p>결과 <span style={{ fontWeight: 'bold' }}>{result}</span></p>
}

function ExpensiveCalculation(props) {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const memoResult = useMemo(() => {
    console.log('useMemo 훅으로 계산 시작');
    
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += 1;
    }

    console.log('useMemo 훅으로 계산 완료');
    
    return result;
  }, [count]);

  return (
    <div>
      <h1>useMemo 없이 매번 계산</h1>
      <button onClick={() => setCount(count + 1)}>클릭 <span style={{ fontWeight: 'bold' }}>{count}</span></button>
      <CalcWithOutUseMemo number={number} />

      <h1>useMemo 훅 사용해서 계산</h1>
      <p>결과 <span style={{ fontWeight: 'bold'}}>{memoResult}</span></p>
    </div>
  );
}

export default ExpensiveCalculation;