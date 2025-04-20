import React, { useState } from "react";

export default function useCounter(initialValue, maxValue) {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count < maxValue ? count + 1 : count);
  }
  const decreaseCount = () => {
    setCount(count > 0 ? count - 1 : count);
  }

  return [count, increaseCount, decreaseCount];
}