"use client";
import { useState, useEffect } from "react";

interface CurTimeProps {
  weatherData: any;
  currentTime: any;
  setCurrentTime: Function;
}

export default function CurTime({
  weatherData,
  currentTime,
  setCurrentTime,
}: CurTimeProps) {

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000)); // Add one second to the current time
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that effect runs only once on mount

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="flex flex-col content-center justify-center">
      {weatherData ? (
        <h2 className="self-center font-light">
          Current time in {weatherData.location.name}
        </h2>
      ) : (
        <h2>Current local time</h2>
      )}
      <p className="self-center mb-2 font-bold">
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
}