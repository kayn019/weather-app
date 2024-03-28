import { useState } from "react";

export default function CurWeather({ weatherData }: any) {
  const elements = [1, 2, 3];

  return (
    <div className=" bg-white rounded-2xl p-10 shadow-xl md:max-w-full">
      {weatherData ? (
        // show current weather data from selected city
        <div className="grid-rows-2 sm:flex justify-between gap-10 ">
          <div className="flex flex-col mr-5 mb-8 sm:mb-0">
            <h2 className="sm:text-3xl md:text-6xl font-extrabold">
              {weatherData.location.name}
            </h2>
            <div className="sm:text-sm md:text-lg mb-5 font-light">
              {weatherData.current.last_updated}
            </div>
            <img
              className="w-2/6 h-auto self-center"
              src={weatherData.current.condition.icon}
              alt=""
            />
            <p className="sm:text-xl md:text-6xl font-black">
              {weatherData.current.temp_c}°C
            </p>
            <p className="sm:text-sm">{weatherData.current.condition.text}</p>
          </div>

          {/* forecast next 3 days */}
          <div className="flex flex-col justify-evenly sm:gap-1">
            {elements.map((element, index) => (
              <div
                key={index}
                className="justify-start mb-6 sm:mb-0 flex gap-2 sm:gap-5 md:gap-10 bg-gray-50 hover:bg-white sm:p-4 md:p-7 rounded-2xl flex-row content-center"
              >
                <h2 className="self-center font-semibold sm:text-sm md:text-base">
                  {weatherData.forecast.forecastday[element].date}
                </h2>
                <img
                  className="hidden sm:block sm:w-1/12 sm:h-auto md:w-1/12 md:h-auto sm:self-center  "
                  src={
                    weatherData.forecast.forecastday[element].day.condition.icon
                  }
                  alt=""
                />
                <p className="self-center sm:text-sm md:text-base">
                  {weatherData.forecast.forecastday[element].day.mintemp_c}°C/
                  {weatherData.forecast.forecastday[element].day.maxtemp_c}°C
                </p>
                <p className=" sm:text-sm hidden font-light md:block md:self-center md:text-base">
                  {weatherData.forecast.forecastday[element].day.condition.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-20">no data yet</div>
      )}
    </div>
  );
}
