import React from 'react';
import WeatherItem from './WeatherItem';

function ChosenWeather({ weather }) {

  console.log(weather)
  return (
    weather &&
    <div className="current-weather-wrapper">
      <div className="additional-info-right">
        <div className="info-item">
          <div className="img-wrapper">
            <img width="30" height="30" src="img/wind.svg" />
            <span>Wind</span>
          </div>
          <div className="info">
            {weather.wind_kph}km/h
          </div>
        </div>
        <div className="info-item">
          <div className="img-wrapper">
            <img width="30" height="30" src="img/humidity.svg" />
            <span>Humidity</span>
          </div>
          <div className="info">
            {weather.humidity}%
          </div>
        </div>
      </div>
      <WeatherItem weather={weather} isCurrent={true} />
      <div className="additional-info-left">
        <div className="info-item">
          <div className="img-wrapper">
            <img width="30" height="30" src="img/pressure.svg" />
            <span>Pressure</span>
          </div>
          <div className="info">
            {weather.pressure_mb}
          </div>
        </div>
        <div className="info-item">
          <div className="img-wrapper">
            <img width="30" height="30" src="img/sun.svg" />
            <span>UV Index</span>
          </div>
          <div className="info">
            {weather.uv} of 10
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChosenWeather;