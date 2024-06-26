"use client";
import Image from "next/image";
import CurWeather from "./components/CurWeather";
import Searchbar from "./components/SearchBar";
import { useState, useEffect } from "react";
import CurTime from "./components/CurTime";

export default function Home() {
  const [cityValue, setCityValue] = useState("jakarta");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=262ac2f2706841da9d595753242603&q=${cityValue}&days=7&aqi=no&alerts=no`;

  async function getCity() {
    try {
      const response = await fetch(apiURL, { mode: "cors" });
      if (response.status === 400) {
        throw new Error("City not found");
      }
      const cityData = await response.json();
      setWeatherData(cityData);
      setNewDate(cityData);
    } catch (error: any) {
      setError(error.message);
    }
  }

  const handleSetCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCity();
    setCityValue("");
  };

  function setNewDate(weatherData: any) {
    const date = new Date(weatherData.location.localtime);
    setCurrentTime(date);
    console.log(date);
  }

  useEffect(() => {
    getCity();
    setCityValue("");
    return () => {
      console.log("Component unmounted");

    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <main className="flex min-h-screen w-full bg-gray-50 black flex-col items-center justify-start p-5">
      <div className="text-black">
        <CurTime
          weatherData={weatherData}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Searchbar
          cityVal={cityValue}
          setCity={setCityValue}
          handleSetCity={handleSetCity}
        />
      </div>
      <div className="text-black">
        <CurWeather weatherData={weatherData} />
      </div>
    </main>
  );
}
