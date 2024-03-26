import { useState } from "react";

export default function CurWeather({weatherData}:any) {
    const elements = [1, 2, 3];
    
    return(
        <>
        {weatherData ? (
            <div className="flex justify-between gap-10">
                <div>
                    <h2>{weatherData.location.name}</h2>
                    <div>{weatherData.current.last_updated}</div>
                    <p>{weatherData.current.temp_c}°C</p>
                    <p>{weatherData.current.condition.text}</p>
                    <img src={weatherData.current.condition.icon} alt="" />
                </div>
                <div className="flex flex-col">
                    {elements.map((element, index) => (
                        <div key={index} className="flex gap-10">
                            <h2>{weatherData.forecast.forecastday[element].date}</h2>
                            <img src={weatherData.forecast.forecastday[element].day.condition.icon} alt="" />
                            <p>{weatherData.forecast.forecastday[element].day.mintemp_c}°C/{weatherData.forecast.forecastday[element].day.maxtemp_c}°C</p>
                            <p>{weatherData.forecast.forecastday[element].day.condition.text}</p>
                        </div>
                    ))}
                      
                </div>
            </div>
      ) :
      (
        <div>
            no data yet
        </div>
      )}
        </>
    );
}