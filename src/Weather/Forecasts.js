import React from 'react';
import WeatherItem from './WeatherItem';

function ForecastsList({ forecasts }) {

  const data = forecasts.forecastday;

  return (
    <div className="forecasts">
      {
        data.map((f, i) => {
          return (
            <WeatherItem key={i} weather={f} isCurrent={false}></WeatherItem>
          )
        })
      }
    </div>
  )

}

export default ForecastsList;