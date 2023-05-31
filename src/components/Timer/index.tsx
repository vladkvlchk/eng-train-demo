import React from "react";
import { Navigate } from "react-router-dom";

interface TimerType{
  onTimeOver: () => {}
}

const Timer: React.FC<TimerType> = ({onTimeOver}) => {
  const [minutes, setMinutes] = React.useState(30);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = Date.now() + 15 * 60 * 1000;

  const getTime = () => {
    const time = deadline - Date.now();

    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);
  if(minutes < 1 && seconds < 1) {
    onTimeOver();
  }
  return <>{minutes}:{seconds > 9 ? seconds : "0" + seconds}</>;
};

export default Timer;
