import { useRef, useState, useEffect } from "react";

const Counter = () => {
  const timer = useRef(0);
  var [cont, setCont] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => setCont(cont++), 1000);
  }, []);

  const handleClick = () => {
    clearInterval(timer.current);
    timer.current=0;
  };

  return (
    <div>
      <h1>Counter: {cont}</h1>
      <button onClick={handleClick}>Parar el contador</button>
    </div>
  );
};

export default Counter;
