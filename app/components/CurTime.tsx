'use client'
import { useState, useEffect } from 'react';

interface CurTimeProps {
    weatherData:any;
    currentTime:any;
    setCurrentTime:Function;
  }



export default function CurTime({weatherData, currentTime, setCurrentTime}:CurTimeProps) {

    
    useEffect(() => {
      const interval = setInterval(() => {

        setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000)); // Add one second to the current time

      }, 1000); // Update every second
  
      // Clear the interval on component unmount
      return () => clearInterval(interval);
    }, []); // Empty dependency array ensures that effect runs only once on mount
  
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return <></>;

    
    if (typeof window === 'undefined') {
        return null;
      }
    

    return (
      <div>
        {weatherData ? (
            <h2>Current time in {weatherData.location.name}</h2>
        ) : (<h2>Current local time</h2>)}
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    );
  };
    // const d = new Date()
    // let localTime = d.getTime()
    // let localOffset = d.getTimezoneOffset() * 60000
    // let utc = localTime + localOffset
    // let atlanta = utc + (1000 * -14400)
    // let nd = new Date(atlanta)
    // return(
    //     <div>
    //         {nd.toString()}
    //     </div>
    // )

