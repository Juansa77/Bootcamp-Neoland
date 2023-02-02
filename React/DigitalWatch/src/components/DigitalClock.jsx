import "./DigitalClock.css";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() =>
      {setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString())
      },1000)
    }
      , [])

  return (
    <div className="clockDiv">
    <h2>{clockState}</h2>
      
    </div>
  );
};

export default DigitalClock;
