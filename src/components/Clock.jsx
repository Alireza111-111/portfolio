import React, { useState, useEffect } from 'react';
import '../main.css'; 

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    return () => clearInterval(timerId);
  }, []); 

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock-container">
      <span>{hours}</span><span className="colon">:</span>
      <span>{minutes}</span><span className="colon">:</span>
      <span>{seconds}</span>
    </div>
  );
}

export default Clock;