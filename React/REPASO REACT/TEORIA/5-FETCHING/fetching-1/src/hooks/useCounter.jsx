import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = (value = 1) => {
    setCount(count + value);
  };

  const decrement = (value = 1) => {
    setCount(count - value);
  };

  const reset = () => {
    setCount(initialValue);
  };
  return {count, setCount, increment, decrement, initialValue, reset };
};

export default useCounter;
