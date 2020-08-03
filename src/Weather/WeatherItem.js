import React from 'react';


function WeatherItem({ weather, isCurrent }) {


  let data = {};
  let date = '';
  if (isCurrent) {
    data = weather;
    date = data.last_updated.split(' ')[0];
  } else {
    data = weather.day;
    date = weather.date;
  }


  return (
    <div className="current-weather">
      <span className="data-text">{date}</span>
      <h2>{data.temp_c || data.avgtemp_c}&deg;C</h2>
      <p>FEELS LIKE <span>{data.feelslike_c || data.maxtemp_c}&deg;C</span></p>
      <img src={data.condition.icon} />
      <span className="weather-condition">{data.condition.text}</span>
    </div>
  )
}

export default WeatherItem;