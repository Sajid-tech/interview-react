import React, { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [laps, setLaps] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  // Start
  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1000);
    }, 1000);
  };

  // Pause
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Reset
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  // Lap
  const handleLap = () => {
    setLaps((prev) => [...prev, time]);
  };

  // Format HH:MM:SS
  const formatTime = (ms) => {
    let totalSeconds = ms / 1000;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ padding: "20px", width: "300px", border: "1px solid black" }}>
      <h2>⏱ Stopwatch</h2>

      <h1>{formatTime(time)}</h1>

    
      <ChildButtons
        onStart={handleStart}
        onPause={handlePause}
        onLap={handleLap}
        onReset={handleReset}
      />

      <h3>Laps:</h3>
      <ul>
        {laps.map((lap, i) => (
          <li key={i}>Lap {i + 1}: {formatTime(lap)}</li>
        ))}
      </ul>
    </div>
  );
}

function ChildButtons({ onStart, onPause, onLap, onReset }) {
  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onLap}>Lap</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
