import React from 'react';
import { getWeather } from '../services/fetch-utils';
import { useState } from 'react';
import WeatherList from '../Components/WeatherList';
// import Spinner from '../Spinner';

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherQuery, setWeatherQuery] = useState('');
//   const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);
  
  async function loadWeatherData() {
    // setIsLoadingPokemon(true);
    const data = await getWeather(weatherQuery);
    // setIsLoadingPokemon(false);
    // console.log(data);
    setWeatherData(data.main);
  }

  async function handleWeatherSubmit(e){
    e.preventDefault();
    // console.log('submit!!!');
      //use state to search for particular pokemon 
    await loadWeatherData();
    // setWeatherQuery('');
  }
//   console.log(weatherQuery);
      
  return (
    <div className="weather-search">
      <form onSubmit={handleWeatherSubmit}>
        <input value={weatherQuery} onChange={e => setWeatherQuery(e.target.value)}></input>
        <button>search</button>
      </form>
      <WeatherList weatherData={weatherData}/>
    </div>
  );
}