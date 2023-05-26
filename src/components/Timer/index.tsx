import React from "react";
import { Navigate } from "react-router-dom";

const Timer: React.FC = () => {
  const [minutes, setMinutes] = React.useState(30);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = Date.now() + 30 * 60 * 1000;

  const getTime = () => {
    const time = deadline - Date.now();

    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);
  if(!minutes && !seconds) {
    return <Navigate to={'./result'} />

  }
  return <>{minutes}:{seconds > 9 ? seconds : "0" + seconds}</>;
};

export default Timer;
