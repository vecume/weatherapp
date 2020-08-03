import React, { useEffect } from 'react';
import './App.css';
import Form from './Weather/Form';
import ChosenWeather from './Weather/Current';
import Loader from './Weather/Loader';
import ForecastsList from './Weather/Forecasts';
import Notfound from './Weather/Notfound';

const WEATHER_KEY = '30a5d47f6ea142b9a17120840200108';

const weatherConditions = ['cloudy', 'clear', 'ice', 'sunny', 'mist', 'overcast', 'rain', 'thunder', 'fog'];



function App() {
  const [weather, setWeather] = React.useState(['Samarkand', null]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    console.log('im here in useeffect')
    async function fetchData() {
      const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${weather[0]}&days=3`)
      const result = await data.json();
      console.log(result)
      if (result.error) {
        setWeather([weather[0], null]);
      } else {
        setWeather([weather[0], result]);
      }

      setLoading(false)
    }

    fetchData();
  }, [weather[0]]);


  let bg = '';

  if (weather[1]) {
    weatherConditions.forEach(w => {
      const randomImgOrder = Math.floor(Math.random() * 3) + 1;
      const currentCondition = weather[1].current.condition.text.split(' ');
      currentCondition.forEach(current => {
        if (current.toLowerCase() === w.toLowerCase()) {
          bg = `img/${current.toLowerCase()}${randomImgOrder}.jpg`;
        }
      });
    });
  }


  function searchWeather(query) {
    setWeather([query, null]);
    setLoading(true);
  }

  return (
    <div className="App" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bg})` }}>
      {loading ? <Loader></Loader> : <h1 className="location-name">{weather[0]}</h1>}
      <Form onSearch={searchWeather}></Form>

      {
        loading ?
          <Loader></Loader> : !weather[1] ?
            <Notfound /> :
            <div>
              <ChosenWeather weather={weather[1].current}></ChosenWeather>
              <ForecastsList forecasts={weather[1].forecast}></ForecastsList>
            </div>
      }

    </div>
  );
}

export default App;
