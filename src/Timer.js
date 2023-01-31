import { useState, useEffect } from "react";

export default function Timer() {
  const [start, setStart] = useState(true);
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (start) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [start]);
  function pauseClick() {
    if (start === true) setStart(false);
  }
  function startClick() {
    if (start === false) setStart(true);
  }
  function restartClick() {
    setTime(0);
    setStart(false);
  }
  return (
    <>
      <h1>Timer</h1>
      <div>過了 {time} 秒</div>
      <button onClick={startClick}>start</button>
      <button onClick={pauseClick}>pause</button>
      <button onClick={restartClick}>restart</button>
    </>
  );
}
