import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="stopDiv">
      <h2>{time}</h2>
      <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTimerOn(true)}>Resume</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default StopWatch;
